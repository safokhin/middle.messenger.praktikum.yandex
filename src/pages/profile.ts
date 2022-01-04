import iconClip from "../../static/icons/back.svg";
import { changePage, createTmpl } from "./index";
import Button from "../components/button";
import Avatar from "../components/avatar";
import TextField from "../components/textField";
import { authController } from "../controllers/authController";
import { usersController } from "../controllers/usersController";
import { handlerErrors } from "../util/validation";
import { typeFormSettings } from "../util/typeFormSettings";
import Popup from "../components/popup";
import iconRemove from "../../static/icons/remove.svg";
import Profile from "../components/profile";

const buttonBack = new Button({
  classes: "icon",
  icon: iconClip,
  iconText: "Назад",
  click: () => changePage("/messenger"),
});
const buttonEditProfile = new Button({
  name: "Изменить данные",
  type: "button",
  click: () => typeFormSettings("edit-profile", buttonsProfile, infoPersons),
});
const buttonEditPassword = new Button({
  name: "Изменить пароль",
  type: "button",
  click: () => {
    typeFormSettings("edit-password", buttonsProfile, infoPersons);
  },
});
const buttonExit = new Button({
  classes: "warning",
  name: "Выйти",
  type: "button",
  click: () => authController.logOut(),
});
const buttonSaveProfile = new Button({
  classes: "invisible",
  name: "Сохранить",
  type: "button",
  click: () => {
    usersController.changeProfile([
      login,
      firstName,
      secondName,
      displayName,
      phone,
      email,
    ]);
    typeFormSettings("default", buttonsProfile, infoPersons);
  },
});
const buttonSavePassword = new Button({
  classes: "invisible",
  name: "Сохранить",
  type: "button",
  click: () => {
    usersController.changePassword([oldPassword, newPassword]);
    typeFormSettings("default", buttonsProfile, infoPersons);
  },
});

const avatarUser = new Avatar({
  classes: "big",
  click: () => changeAvatarPopup.setProps({ classes: "" }),
});

const login = new TextField({
  buttonName: "Логин",
  classes: "underline",
  name: "login",
  validName: "LOGIN",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), login);
  },
});
const firstName = new TextField({
  buttonName: "Имя",
  classes: "underline",
  name: "first_name",
  validName: "NAME",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), firstName);
  },
});
const secondName = new TextField({
  buttonName: "Фамилия",
  classes: "underline",
  name: "second_name",
  validName: "NAME",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), secondName);
  },
});
const displayName = new TextField({
  buttonName: "Имя в чате",
  classes: "underline",
  name: "display_name",
  validName: "LOGIN",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), displayName);
  },
});
const phone = new TextField({
  buttonName: "Телефон",
  classes: "underline",
  name: "phone",
  validName: "PHONE",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), phone);
  },
});
const email = new TextField({
  buttonName: "Почта",
  classes: "underline",
  name: "email",
  validName: "EMAIL",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), email);
  },
});

const oldPassword = new TextField({
  buttonName: "Старый пароль",
  classes: "underline invisible",
  name: "oldPassword",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), oldPassword);
  },
});
const newPassword = new TextField({
  buttonName: "новый пароль",
  classes: "underline invisible",
  name: "newPassword",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), newPassword);
  },
});

const newPasswordRepeat = new TextField({
  buttonName: "Повторите новый пароль",
  classes: "underline invisible",
  name: "password",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), newPasswordRepeat);
  },
});

const textFieldPhoto = new TextField({
  id: "field-photo",
  buttonName: "Выбрать файл на компьютере",
  type: "file",
  classes: "underline file",
});

const changeAvatarPopup = new Popup({
  id: "form-avatar",
  method: "post",
  classes: "invisible",
  title: "Загрузить файл",
  buttonClose: new Button({
    classes: "icon",
    icon: iconRemove,
    type: "button",
    click: () => changeAvatarPopup.setProps({ classes: "invisible" }),
  }),
  textField: textFieldPhoto,
  button: new Button({
    type: "submit",
    name: "Применить",
    click: (event: Event) => {
      event.preventDefault();
      usersController.changeProfileAvatar();
    },
  }),
});

let buttonsProfile = [
  buttonEditProfile,
  buttonEditPassword,
  buttonExit,
  buttonSaveProfile,
  buttonSavePassword,
];
let infoPersons = [
  login,
  firstName,
  secondName,
  displayName,
  phone,
  email,
  oldPassword,
  newPassword,
  newPasswordRepeat,
];

const profilePage = new Profile({
  buttonBack,
  avatarUser,
  buttonsProfile,
  infoPersons,
  changeAvatarPopup,
});

export const createTmplProfile = () => {
  const fragment: any = profilePage.render();
  createTmpl(fragment);
};
