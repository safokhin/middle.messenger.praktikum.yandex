import Handlebars from "handlebars/dist/handlebars";
import template from "../components/registration/registration.tmpl";
import "../components/registerPartials.js";

const groupsTextField = [
  {
    id: 'email',
    buttonName: "Почта",
    placeholder: "Введите почту",
    errorText: "Некорректная почта",
    error: false,
    name: 'email',
  },
  {
    id: 'login',
    buttonName: "Логин",
    placeholder: "Введите логин",
    errorText: "Некорректный логин",
    error: true,
    name: 'login',
  },
  {
    id: 'first_name',
    buttonName: "Имя",
    placeholder: "Введите имя",
    error: false,
    name: 'first_name',
  },
  {
    id: 'second_name',
    buttonName: "Фамилия",
    placeholder: "Введите фамилию",
    error: false,
    name: 'second_name',
  },
  {
    id: 'phone',
    buttonName: "Телефон",
    placeholder: "Введите номер телефона",
    errorText: "Номер телефона введен неверно",
    error: false,
    name: 'phone',
  },
  {
    id: 'password',
    buttonName: "Пароль",
    placeholder: "Введите пароль",
    errorText: "Пароль слишком короткий",
    error: false,
    name: 'password',
  },
  {
    id: 'password-repeat',
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
