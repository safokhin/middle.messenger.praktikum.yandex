import Button from "../components/button";
import AuthorizationPage from "../components/authorization";
import { changePage, createTmpl } from "./index";
import TextField from "../components/textField";

const onFinish = (): void => {
  const loginElement = <HTMLInputElement>(
    document.querySelector('[name="login"]')
  );
  const passwordElement = <HTMLInputElement>(
    document.querySelector('[name="password"]')
  );
  // ТЕСТ, потом поменять
  if (loginElement !== null && passwordElement !== null) {
    const loginValue = loginElement.value;
    const passwordValue = passwordElement.value;

    if (loginValue === "admin" && passwordValue === "admin") {
      changePage("chat");
    }

    if (loginValue !== "admin") {
      login.setProps({ errorText: "Логин - admin", value: loginValue });
    } else {
      login.setProps({ errorText: "", value: loginValue });
    }

    if (passwordValue !== "admin") {
      password.setProps({ errorText: "Пароль - admin", value: passwordValue });
    } else {
      password.setProps({ errorText: "", value: passwordValue });
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
  click: () => changePage("registration"),
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
