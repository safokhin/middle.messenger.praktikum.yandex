import { changePage, createTmpl } from "./index";
import TextField from "../components/textField";
import Registration from "../components/registration";
import Button from "../components/button";
import { handlerErrors } from "../util/validation";

const onFinish = () => {
  let successRegistration = true;
  groupsTextField.forEach((elem) => {
    const value = elem.props.value ? elem.props.value : "";
    const validName = elem.props.validName;

    if (typeof validName === "string" && typeof value === "string") {
      const error = handlerErrors(validName, value, elem);
      if (error !== "") successRegistration = false;
    }
  });

  if (successRegistration) changePage("chat");
};

const email = new TextField({
  id: "email",
  buttonName: "Почта",
  placeholder: "Введите почту",
  name: "email",
  containerClass: "popup__row",
  validName: "EMAIL",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>email.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, email);
  },
});

const login = new TextField({
  id: "login",
  buttonName: "Логин",
  placeholder: "Введите логин",
  name: "login",
  validName: "LOGIN",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>login.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, login);
  },
});

const firstName = new TextField({
  id: "first_name",
  buttonName: "Имя",
  placeholder: "Введите имя",
  name: "first_name",
  containerClass: "popup__row",
  validName: "NAME",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>firstName.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, firstName);
  },
});

const secondName = new TextField({
  id: "second_name",
  buttonName: "Фамилия",
  placeholder: "Введите фамилию",
  name: "second_name",
  containerClass: "popup__row",
  validName: "NAME",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>secondName.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, secondName);
  },
});

const phone = new TextField({
  id: "phone",
  buttonName: "Телефон",
  placeholder: "Введите номер телефона",
  name: "phone",
  validName: "PHONE",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>phone.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, phone);
  },
});

const password = new TextField({
  id: "password",
  buttonName: "Пароль",
  placeholder: "Введите пароль",
  name: "password",
  validName: "PASSWORD",
  containerClass: "popup__row",
  blur: (event: { target: HTMLInputElement }) => {
    const validName = <string>password.props.validName;
    const value = event.target.value.trim();
    handlerErrors(validName, value, password);
  },
});

const passwordRepeat = new TextField({
  id: "password-repeat",
  buttonName: "Повторите пароль",
  placeholder: "Повторите пароль",
  name: "password-repeat",
  containerClass: "popup__row",
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
  click: onFinish,
});

const buttonAuth = new Button({
  classes: "link",
  name: "Авторизация",
  type: "button",
  page: "authorization",
  click: () => changePage("authorization"),
});

const registrationPage = new Registration({
  groupsTextField,
  buttonRegistration,
  buttonAuth,
});

export const createTmplReg = () => {
  const fragment: any = registrationPage.render();
  createTmpl(fragment);
};
