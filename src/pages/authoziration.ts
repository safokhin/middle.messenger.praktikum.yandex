import Button from "../components/button";
import AuthorizationPage from "../components/authorization";
import { changePage, createTmpl } from "./index";
import TextField from "../components/textField";
import { handlerErrors } from "../util/validation";
import { authController } from "../controllers/authController";

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

const groupsTextField = [login, password];

const buttonAuth = new Button({
  name: "Войти",
  page: "chat",
  type: "button",
  click: (): void => authController.signInUser(groupsTextField),
});

const buttonRegistration = new Button({
  classes: "link",
  name: "Регистрация",
  page: "registration",
  type: "button",
  click: () => changePage("/sign-up"),
});

export const authorizationPage = new AuthorizationPage({
  buttonRegistration,
  buttonAuth,
  groupsTextField,
});

export const createTmplAuth = () => {
  const fragment: DocumentFragment = authorizationPage.render();
  createTmpl(fragment);
};
