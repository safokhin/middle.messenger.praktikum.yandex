import Handlebars from "handlebars/dist/handlebars";
import template from "../components/popup/popup.tmpl";
import "../components/registerPartials.js";

const pageErrorData = {
  classPopup: 'gradient',
  title: '404',
  text: 'Кажется, вы заблудились',
  classes: "link",
  name: "Назад к чатам",
  type: "button",
  page: 'chat',
}

export const createTemplate404 = () => {
  const compiled = Handlebars.compile(template);
  const html = compiled({ ...pageErrorData });
  document.querySelector("#root").innerHTML = html;
}
