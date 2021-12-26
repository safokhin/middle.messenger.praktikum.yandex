import iconClip from "../../static/icons/clip.svg";
import iconSend from "../../static/icons/send.svg";
import iconMore from "../../static/icons/more.svg";
import iconRemove from "../../static/icons/remove.svg";
import iconPlus from "../../static/icons/plus.svg";
import iconPhoto from "../../static/icons/photo.svg";
import iconFile from "../../static/icons/file.svg";
import iconLocation from "../../static/icons/location.svg";

import { changePage, createTmpl } from "./index";
import ChatPage from "../components/chat";
import Popup from "../components/popup";
import Avatar from "../components/avatar";
import Button from "../components/button";
import DialogItem from "../components/chat/dialogItem";
import Sidebar from "../components/chat/sidebar";
import Dialog from "../components/chat/dialog";
import Input from "../components/input";
import Action from "../components/action";
import Message from "../components/message";

export const sidebarData = new Sidebar({
  profileAvatar: new Avatar({
    classes: "small",
  }),
  profileButton: new Button({
    classes: "link",
    name: "Сафохин Артем",
    type: "button",
    click: () => changePage("/settings"),
  }),
  messages: [
    new DialogItem({
      dialogItemAvatar: new Avatar({
        nameSymbol: "SA",
        classes: "small",
        isEmptyPhoto: false,
        srcImage: "https://source.unsplash.com/user/erondu/50x50",
      }),
      author: "Сафохин Артем",
      time: "12:31",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipue, sit ullam velit!",
      checked: true,
      click: () => dialogData.setProps({ isEmpty: !dialogData.props.isEmpty }),
    }),
  ],
});

const buttonSend = new Button({
  classes: "button icon button_icon-message button--invisible",
  icon: iconSend,
  type: "submit",
});

const dialogData = new Dialog({
  isEmpty: true,
  buttonClip: new Button({
    classes: "icon",
    icon: iconClip,
    type: "button",
  }),
  buttonSend,
  actionMore: new Action({
    classes: "action--left action--bottom",
    actions: [
      new Button({
        classes: "icon",
        icon: iconPlus,
        iconText: "Добавить пользователя",
        type: "button",
        containerClass: "action__button",
      }),
      new Button({
        classes: "icon",
        icon: iconRemove,
        iconText: "Удалить пользователя",
        type: "button",
        containerClass: "action__button",
      }),
    ],
  }),
  actionClip: new Action({
    classes: "action--right action--top",
    actions: [
      new Button({
        classes: "icon",
        icon: iconPhoto,
        iconText: "Фото или видео",
        type: "button",
      }),
      new Button({
        classes: "icon",
        icon: iconFile,
        iconText: "Файл",
        type: "button",
      }),
      new Button({
        classes: "icon",
        icon: iconLocation,
        iconText: "Локация",
        type: "button",
      }),
    ],
  }),
  buttonMore: new Button({
    type: "button",
    classes: "icon",
    icon: iconMore,
  }),
  inputMessage: new Input({
    placeholder: "Введите текст сообщения...",
    name: "message",
    id: "message",
    keyup: (event: { target: HTMLInputElement }) => {
      const value = event.target.value;
      if (value)
        buttonSend.setProps({
          classes: "icon button_icon-message",
        });
      else
        buttonSend.setProps({
          classes: "icon button_icon-message button--invisible",
        });
    },
  }),
  messages: [
    new Message({
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
      text: "Все фигня, давай по новой",
      avatar: new Avatar({
        isEmptyPhoto: false,
        srcImage: "https://source.unsplash.com/user/erondu/50x50",
        classes: "small",
      }),
    }),
    new Message({
      isMe: true,
      text: "Как код?",
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
      avatar: new Avatar({
        isEmptyPhoto: true,
        nameSymbol: "SA",
        classes: "small",
      }),
    }),
  ],
});

const popupAdd = new Popup({
  title: "Добавить пользователя",
  button: new Button({
    name: "Добавить",
  }),
});

const popupRemove = new Popup({
  title: "Удалить пользователя",
  button: new Button({ name: "Удалить" }),
});

const chatPage = new ChatPage({ sidebarData, dialogData });

export const createTemplateChat = () => {
  const fragment: DocumentFragment = chatPage.render();
  createTmpl(fragment);
};
