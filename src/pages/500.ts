import Popup from "../components/popup";
import Button from "../components/button";
import { changePage, createTmpl } from "./index";

const page500 = new Popup({
  classPopup: "gradient",
  title: "500",
  text: "Сервис немного устал, но мы приводим его в чувство",
  classes: "link",
  button: new Button({
    classes: "link",
    name: "Назад к чатам",
    type: "button",
    click: () => changePage("chat"),
  }),
});

export const createTmpl500 = () => {
  const fragment: DocumentFragment = page500.render();
  createTmpl(fragment);
};
