import iconClip from "../../static/icons/back.svg";
import { changePage, createTmpl } from "./index";
import Profile from "../components/profile";
import Button from "../components/button";
import Avatar from "../components/avatar";
import TextField from "../components/textField";

const buttonBack = new Button({
  classes: "icon",
  icon: iconClip,
  iconText: "Назад",
  page: "chat",
  click: () => changePage("chat"),
});

const avatarUser = new Avatar({
  nameSymbol: "SA",
  classes: "big",
  isEmptyPhoto: true,
  srcImage: "https://source.unsplash.com/user/erondu/50x50",
});

const buttonsProfile = [
  new Button({
    name: "Изменить данные",
    type: "button",
  }),
  new Button({
    name: "Изменить пароль",
    type: "button",
  }),
  new Button({
    classes: "warning",
    name: "Выйти",
    page: "authorization",
    type: "button",
  }),
];

const infoPersons = [
  new TextField({
    id: "login",
    value: "Секрет",
    buttonName: "Логин",
    classes: "underline",
    name: "login",
    containerClass: "popup__row",
  }),
  new TextField({
    id: "first_name",
    value: "Секрет",
    buttonName: "Имя",
    classes: "underline",
    name: "first_name",
    containerClass: "popup__row",
  }),
  new TextField({
    id: "second_name",
    value: "Секрет",
    buttonName: "Фамилия",
    classes: "underline",
    name: "second_name",
    containerClass: "popup__row",
  }),
  new TextField({
    id: "display_name",
    value: "Секрет",
    buttonName: "Имя в чате",
    classes: "underline",
    name: "display_name",
    containerClass: "popup__row",
  }),
  new TextField({
    id: "phone",
    value: "8 (999) 999-09-99 ",
    buttonName: "Телефон",
    classes: "underline",
    name: "phone",
    containerClass: "popup__row",
  }),
  new TextField({
    id: "email",
    value: "asafohin@gmail.com ",
    buttonName: "Почта",
    classes: "underline",
    name: "email",
    disabled: true,
    containerClass: "popup__row",
  }),
];

const profilePage = new Profile({
  buttonBack,
  avatarUser,
  buttonsProfile,
  infoPersons,
});

export const createTmplProfile = () => {
  const fragment: any = profilePage.render();
  createTmpl(fragment);
};
