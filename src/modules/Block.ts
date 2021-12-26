import * as Handlebars from "handlebars";
import { nanoid } from "nanoid";
import { EventBus, IEventBus } from "./EventBus";

type UnknownObject = { [key: string]: unknown };
type PropsElement = { [key: string]: string };
type EventsElement = { [key: string]: (event: MouseEvent) => void };

interface IChildren {
  children: UnknownObject;
  propsElement: PropsElement;
  eventsElement: EventsElement;
}

export class Block {
  children: UnknownObject;
  eventsElement: EventsElement;
  props: PropsElement;
  tagName: string;
  eventBus: () => IEventBus;
  _element: HTMLElement | null = null;
  _value: string;

  static EVENTS: { [key: string]: string } = {
    INIT: "init",
    CDM: "componentDidMount",
    CDU: "componentDidUpdate",
    RENDER: "render",
  };

  constructor(tagName = "div", props = {}) {
    const { children, propsElement, eventsElement } = this._getChildren(props);

    this.children = children;
    this.eventsElement = eventsElement;
    const eventBus = new EventBus();
    this.tagName = tagName;

    this.props = propsElement;

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: IEventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.RENDER, this._render.bind(this));
  }

  private init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.CDM);
  }

  private _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.RENDER);
  }

  componentDidMount(oldProps?: unknown) {
    return oldProps;
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.CDM);
  }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    // TODO: Очень Очень плохо
    const oldPropsString = JSON.stringify(oldProps);
    const newPropsString = JSON.stringify(newProps);

    if (oldPropsString !== newPropsString) {
      this.componentDidUpdate(oldProps, newProps);
      this.eventBus().emit(Block.EVENTS.RENDER);
    }
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {}

  private _render() {
    const block = this.render();

    if (this._element !== null && block) {
      this._element.innerHTML = "";
      this._element.append(block);

      this._addEvents();
    }
  }

  render(): DocumentFragment | void {}

  private _createResources() {
    this._element = this._createDocumentElement(this.tagName);
  }

  compile(template: string, props: UnknownObject) {
    const fragment = this._createDocumentElement("template");
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = `<div data-id="${child[0].__key}"></div>`;
      } else {
        // @ts-ignore
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child: any) => {
      if (Array.isArray(child)) {
        const stub = fragment.content.querySelector(
          `[data-id="${child[0].__key}"]`
        );
        child.forEach((item) => {
          let container = document.createElement("div");
          const containerClass = item.props.containerClass;
          container.classList.add(containerClass);
          container.appendChild(item.getContent());
          if (stub !== null) stub.appendChild(container);
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        if (stub !== null) stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  setProps = (nextProps: object): void => {
    const oldProps = { ...this.props };
    const newProps = { ...this.props, ...nextProps };
    this.props = newProps;
    this._componentDidUpdate(oldProps, newProps);
  };

  get element() {
    return this._element;
  }

  getContent() {
    return this.element;
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _getChildren(propsAndChildren: {
    [key: string]: { props: unknown };
  }): IChildren {
    const children: { [name: string]: any } = {};
    const propsElement: { [name: string]: any } = {};
    const eventsElement: { [name: string]: any } = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
        children[key]._id = nanoid();
      } else if (value instanceof Array && value[0] instanceof Block) {
        children[key] = value;
        children[key].forEach((item: any) => (item.__key = key));
      } else if (value instanceof Function) {
        eventsElement[key] = value;
      } else {
        propsElement[key] = value;
      }
    });

    return { children, propsElement, eventsElement };
  }

  _addEvents(): void {
    const eventElements: string[] = ["input", "button"];
    Object.keys(this.eventsElement).forEach((eventName) => {
      let eventElement: Element | undefined | null;
      eventElements.forEach((elem) => {
        if (this._element !== null) {
          const queryElement = this._element.querySelector(elem);
          if (queryElement !== null) eventElement = queryElement;
        }
      });

      if (eventElement !== undefined && eventElement !== null) {
        eventElement.addEventListener(eventName, this.eventsElement[eventName]);
      }
    });
  }
}
