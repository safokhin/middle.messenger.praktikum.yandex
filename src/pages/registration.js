import Handlebars from "handlebars/dist/handlebars";
import template from "../components/registration/registration.tmpl";
import "../components/registerPartials.js";

const groupsTextField = [
  {
    buttonName: "Почта",
    placeholder: "Введите почту",
    errorText: "Некорректная почта",
    error: false,
    name: 'email',
  },
  {
    buttonName: "Логин",
    placeholder: "Введите логин",
    errorText: "Некорректный логин",
    error: true,
    name: 'login',
  },
  {
    buttonName: "Имя",
    placeholder: "Введите имя",
    error: false,
    name: 'first_name',
  },
  {
    buttonName: "Фамилия",
    placeholder: "Введите фамилию",
    error: false,
    name: 'second_name',
  },
  {
    buttonName: "Телефон",
    placeholder: "Введите номер телефона",
    errorText: "Номер телефона введен неверно",
    error: false,
    name: 'phone',
  },
  {
    buttonName: "Пароль",
    placeholder: "Введите пароль",
    errorText: "Пароль слишком короткий",
    error: false,
    name: 'password',
  },
  {
    buttonName: "Повторите пароль",
    placeholder: "Повторите пароль",
    errorText: "Пароли не совпадают",
    error: false,
  },
];

const buttonRegistration = {
  name: "Регистрация",
  type: "submit",
  page: "chat",
};

const buttonAuth = {
  classes: "link",
  name: "Авторизация",
  type: "button",
  page: "authorization",
};

export const createTemplateReg = () => {
  const compiled = Handlebars.compile(template);
  const html = compiled({
    buttonAuth,
    buttonRegistration,
    groupsTextField,
  });

  document.querySelector("#root").innerHTML = html;
};
