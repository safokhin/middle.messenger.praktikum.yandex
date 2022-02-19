import { Block } from "../../modules/Block";
import { popupTmpl } from "./popup.tmpl";

export default class Popup extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  componentDidMount(_?: unknown): void {
    this._element?.addEventListener("click", (event) => {
      const isClose = handleOutsideClick(event);
      if (isClose) this.setProps({ classes: "invisible" });
    });
  }

  render() {
    return this.compile(popupTmpl, this.props);
  }
}

const handleOutsideClick = (event: Event) => {
  // @ts-ignore
  const path = event.path || (event.composedPath && event.composedPath());

  const indexPopup = path.findIndex((node: HTMLElement) =>
    node.classList ? node.classList.contains("popup") : false
  );

  return indexPopup < 0;
};
