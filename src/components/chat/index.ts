import { Block } from "../../modules/Block";
import { chatTmpl } from "./chat.tmpl";
import Popup from "../popup";
import TextField from "../textField";
import Button from "../button";
import iconRemove from "../../assets/icons/remove.svg";
import { chatController } from "../../controllers/chatController";

class ChatPage extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  componentDidMount(_?: unknown) {
    this.setProps({ popupCreateChat, popupRemove, popupAdd });
  }

  render() {
    return this.compile(chatTmpl, this.props);
  }
}

export const popupAdd = new Popup({
  classes: "invisible",
  title: "Добавить пользователя",
  textField: new TextField({
    placeholder: "Введите логин пользователя",
    buttonName: "логин",
    containerClass: "popup__row",
    blur: (event: { target: HTMLInputElement }) => {
      // @ts-ignore
      popupAdd.props.textField.setProps({
        value: event.target.value.trim(),
      });
    },
  }),
  buttonClose: new Button({
    classes: "icon",
    icon: iconRemove,
    type: "button",
    click: () => popupAdd.setProps({ classes: "invisible" }),
  }),
  button: new Button({
    type: "button",
    name: "Добавить",
    click: () => {
      // @ts-ignore
      chatController.addUser(popupAdd.props.textField.props.value);
      popupAdd.setProps({ classes: "invisible" });
    },
  }),
});

export const popupRemove = new Popup({
  classes: "invisible",
  title: "Удалить пользователя",
  textField: new TextField({
    placeholder: "Введите логин пользователя",
    buttonName: "логин",
    containerClass: "popup__row",
    blur: (event: { target: HTMLInputElement }) => {
      // @ts-ignore
      popupRemove.props.textField.setProps({
        value: event.target.value.trim(),
      });
    },
  }),
  buttonClose: new Button({
    classes: "icon",
    icon: iconRemove,
    type: "button",
    click: () => popupRemove.setProps({ classes: "invisible" }),
  }),
  button: new Button({
    classes: "warning",
    type: "button",
    name: "Удалить",
    click: () => {
      // @ts-ignore
      chatController.removeUser(popupRemove.props.textField.props.value);
      popupRemove.setProps({ classes: "invisible" });
    },
  }),
});

export const popupCreateChat = new Popup({
  classes: "invisible",
  title: "Создать новый чат",
  textField: new TextField({
    placeholder: "Введите название чата",
    buttonName: "Название чата",
    containerClass: "popup__row",
    blur: (event: { target: HTMLInputElement }) => {
      // @ts-ignore
      popupCreateChat.props.textField.setProps({
        value: event.target.value.trim(),
      });
    },
  }),
  buttonClose: new Button({
    classes: "icon",
    icon: iconRemove,
    type: "button",
    click: () => popupCreateChat.setProps({ classes: "invisible" }),
  }),
  button: new Button({
    type: "button",
    name: "Создать",
    click: () => {
      // @ts-ignore
      const title: string = popupCreateChat.props.textField.props.value;
      chatController.create(title);
      popupCreateChat.setProps({ classes: "invisible" });
    },
  }),
});

export default ChatPage;
