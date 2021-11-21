import Handlebars from "handlebars/dist/handlebars";
import template from "../components/profile/profile.template";
import "../components/registerPartials.js";
import iconClip from "../../static/icons/back.svg";

const buttonBack = {
  classes: "icon",
  icon: iconClip,
  iconText: "Назад",
  page: "chat",
};

const avatarUser = {
  nameSymbol: "SA",
  classes: "big",
  isEmptyPhoto: true,
  srcImage: "https://source.unsplash.com/user/erondu/50x50",
};

const buttonsProfile = [
  {
    name: "Изменить данные",
    type: 'button',
  },
  {
    name: "Изменить пароль",
    type: 'button',
  },
  {
    classes: "warning",
    name: "Выйти",
    page: "authorization",
    type: 'button',
  },
];

const infoPersons = [
  { id: 'login', value: "Секрет", buttonName: "Логин", classes: "underline", name: 'login' },
  { id: 'first_name', value: "Секрет", buttonName: "Имя", classes: "underline", name: 'first_name' },
  { id: 'second_name', value: "Секрет", buttonName: "Фамилия", classes: "underline", name: 'second_name' },
  { id: 'display_name', value: "Секрет", buttonName: "Имя в чате", classes: "underline", name: 'display_name' },
  { id: 'phone', value: "8 (999) 999-09-99 ", buttonName: "Телефон", classes: "underline", name: 'phone' },
  { id: 'email', value: "asafohin@gmail.com ", buttonName: "Почта", classes: "underline", name: 'email', disabled: true },
];

export const createTemplateProfile = () => {
  const compiled = Handlebars.compile(template);
  const html = compiled({
    buttonBack,
    avatarUser,
    infoPersons,
    buttonsProfile,
  });

  document.querySelector("#root").innerHTML = html;
};
