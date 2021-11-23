import Handlebars from "handlebars/dist/handlebars";
import template from "../components/chat/chat.tmpl";

import iconClip from "../../static/icons/clip.svg";
import iconSend from "../../static/icons/send.svg";
import iconMore from "../../static/icons/more.svg";
import iconRemove from "../../static/icons/remove.svg";
import iconPlus from "../../static/icons/plus.svg";
import iconPhoto from "../../static/icons/photo.svg";
import iconFile from "../../static/icons/file.svg";
import iconLocation from "../../static/icons/location.svg";

import "../components/registerPartials";

const sidebarData = {
  profileAvatar: {
    nameSymbol: "SA",
    classes: "small",
    isEmptyPhoto: true,
    srcImage: "https://source.unsplash.com/user/erondu/50x50",
  },
  profileButton: {
    classes: "link",
    name: "Сафохин Артем",
    page: "profile",
    type: "button",
  },
  messages: [
    {
      dialogItemAvatar: {
        nameSymbol: "SA",
        classes: "small",
        isEmptyPhoto: false,
        srcImage: "https://source.unsplash.com/user/erondu/50x50",
      },
      author: 'Сафохин Артем',
      time: '12:31',
      message: 'Lorem ipsum dolor sit amet, consectetur adipue, sit ullam velit!',
      checked: true,
    },
    {
      dialogItemAvatar: {
        nameSymbol: "SA",
        classes: "small",
        isEmptyPhoto: false,
        srcImage: "https://source.unsplash.com/user/erondu/50x50",
      },
      author: 'Сафохин Артем',
      time: '12:31',
      message: 'Lorem ipsum dolor sit amet, consectetur adipue, sit ullam velit!',
      checked: false,
    },

  ],

};

const dialogData = {
  isEmpty: false,
  buttonClip: {
    classes: "icon",
    icon: iconClip,
    type: "button",
  },
  buttonSend: {
    classes: "icon button_icon-message",
    icon: iconSend,
    type: "submit",
  },
  actionMore: {
    classes: "action--left action--bottom",
    actions: [
      {
        classes: 'icon',
        icon: iconPlus,
        iconText: "Добавить пользователя",
        type: 'button',
      },
      {
        classes: 'icon',
        icon: iconRemove,
        iconText: "Удалить пользователя",
        type: 'button',
      },
    ],
  },
  actionClip: {
    classes: "action--right action--top",
    actions: [
      {
        classes: 'icon',
        icon: iconPhoto,
        iconText: "Фото или видео",
        type: 'button'
      },
      {
        classes: 'icon',
        icon: iconFile,
        iconText: "Файл",
        type: 'button'
      },
      {
        classes: 'icon',
        icon: iconLocation,
        iconText: "Локация",
        type: 'button',
      },
    ],
  },
  buttonMore: {
    type: "button",
    classes: "icon",
    icon: iconMore,
  },
  inputMessage: {
    placeholder: "Введите текст сообщения...",
    name: "message",
    id: "message",
  },
  messages: [
    {
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
      text: "Все фигня, давай по новой",
      classes: "small",
      isEmptyPhoto: false,
      srcImage: "https://source.unsplash.com/user/erondu/50x50",
    },
    {
      isMe: true,
      text: "Как код?",
      nameSymbol: "SA",
      classes: "small",
      isEmptyPhoto: true,
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
    },
    {
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
      text: "Все фигня, давай по новой",
      classes: "small",
      isEmptyPhoto: false,
      srcImage: "https://source.unsplash.com/user/erondu/50x50",
    },
    {
      isMe: true,
      text: "Как код?",
      nameSymbol: "SA",
      classes: "small",
      isEmptyPhoto: true,
      photos: [
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
        {
          src: "https://source.unsplash.com/user/erondu/100x100",
        },
      ],
    },
  ],
};

const popupAdd = {
  title: "Добавить пользователя",
  name: "Добавить",
  buttonName: "Логин",
  placeholder: "Введите логин",
};

const popupRemove = {
  title: "Удалить пользователя",
  name: "Удалить",
  buttonName: "Логин",
  placeholder: "Введите логин",
};

export const createTemplateChat = () => {
  const compiled = Handlebars.compile(template);
  document.querySelector("#root").innerHTML = compiled({
    dialogData,
    sidebarData,
    // popupAdd,
    // popupRemove,
  });
};
