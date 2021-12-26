import { changePage, createTmpl } from "./index";
import TextField from "../components/textField";
import Registration from "../components/registration";
import Button from "../components/button";
import { handlerErrors } from "../util/validation";
import { authController } from "../controllers/authController";

const email = new TextField({
  buttonName: "Почта",
  placeholder: "Введите почту",
  name: "email",
  containerClass: "popup__row",
  validName: "EMAIL",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), email);
  },
});

const login = new TextField({
  buttonName: "Логин",
  placeholder: "Введите логин",
  name: "login",
  validName: "LOGIN",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), login);
  },
});

const firstName = new TextField({
  buttonName: "Имя",
  placeholder: "Введите имя",
  name: "first_name",
  containerClass: "popup__row",
  validName: "NAME",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), firstName);
  },
});

const secondName = new TextField({
  buttonName: "Фамилия",
  placeholder: "Введите фамилию",
  name: "second_name",
  containerClass: "popup__row",
  validName: "NAME",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), secondName);
  },
});

const phone = new TextField({
  buttonName: "Телефон",
  placeholder: "Введите номер телефона",
  name: "phone",
  validName: "PHONE",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), phone);
  },
});

const password = new TextField({
  buttonName: "Пароль",
  placeholder: "Введите пароль",
  name: "password",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), password);
  },
});

const passwordRepeat = new TextField({
  buttonName: "Повторите пароль",
  placeholder: "Повторите пароль",
  name: "password-repeat",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    handlerErrors(event.target.value.trim(), passwordRepeat);
  },
});

const groupsTextField = [
  email,
  login,
  firstName,
  secondName,
  phone,
  password,
  passwordRepeat,
];

const buttonRegistration = new Button({
  name: "Регистрация",
  type: "button",
  page: "chat",
  click: (): void => authController.signUpUser(groupsTextField),
});

const buttonAuth = new Button({
  classes: "link",
  name: "Авторизация",
  type: "button",
  page: "authorization",
  click: () => changePage("/"),
});

export const registrationPage = new Registration({
  groupsTextField,
  buttonRegistration,
  buttonAuth,
});

export const createTmplReg = () => {
  const fragment: any = registrationPage.render();
  createTmpl(fragment);
};
