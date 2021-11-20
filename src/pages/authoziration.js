import Handlebars from "handlebars/dist/handlebars";
import template from "../components/authorization/authorization.tmpl";
import "../components/registerPartials";

const groupsTextField = [
  {
    buttonName: "Логин",
    placeholder: "Введите логин",
    errorText: "Некорректный логин",
    error: false,
    name: 'login',
  },
  {
    buttonName: "Пароль",
    placeholder: "Введите пароль",
    errorText: "Некорректный пароль",
    error: true,
    name: 'password',
  },
];

const buttonRegistration = {
  classes: "link",
  name: "Регистрация",
  page: "registration",
};

const buttonAuth = {
  name: "Войти",
  id: "test",
  page: "chat",
};

export const createTemplateAuth = () => {
  const compiled = Handlebars.compile(template);
  document.querySelector("#root").innerHTML = compiled({
    buttonAuth,
    buttonRegistration,
    groupsTextField,
  });
};
