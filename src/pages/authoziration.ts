import Button from "../components/button";
import AuthorizationPage from "../components/authorization";
import { changePage, createTmpl } from "./index";
import TextField from "../components/textField";
import { handlerErrors } from "../util/validation";

const onFinish = (): void => {
  const loginElement = <HTMLInputElement>(
    document.querySelector('[name="login"]')
  );
  const passwordElement = <HTMLInputElement>(
    document.querySelector('[name="password"]')
  );

  if (loginElement !== null && passwordElement !== null) {
    const loginValue = loginElement.value;
    const passwordValue = passwordElement.value;
    const loginError = handlerErrors("LOGIN", loginValue, login);
    const passwordError = handlerErrors("PASSWORD", passwordValue, password);

    if (!loginError && !passwordError) {
      changePage("chat");
    }
  }
};

const login = new TextField({
  id: "login",
  buttonName: "Логин",
  placeholder: "Введите логин",
  name: "login",
  containerClass: "popup__row",
});

const password = new TextField({
  id: "password",
  buttonName: "Пароль",
  placeholder: "Введите пароль",
  name: "password",
  containerClass: "popup__row",
});

const groupsTextField = [login, password];

const buttonAuth = new Button({
  name: "Войти",
  page: "chat",
  type: "button",
  click: onFinish,
});

const buttonRegistration = new Button({
  classes: "link",
  name: "Регистрация",
  page: "registration",
  type: "button",
  click: () => changePage("/registration"),
});

const authorizationPage = new AuthorizationPage({
  buttonRegistration,
  buttonAuth,
  groupsTextField,
});

export const createTmplAuth = () => {
  const fragment: DocumentFragment = authorizationPage.render();
  createTmpl(fragment);
};
