import Popup from "../components/popup";
import Button from "../components/button";
import { changePage, createTmpl } from "./index";

const page404 = new Popup({
  classes: "gradient",
  title: "404",
  text: "Кажется, вы заблудились",
  button: new Button({
    classes: "link",
    name: "Назад к чатам",
    type: "button",
    click: () => changePage("/messenger"),
  }),
});

export const createTmpl404 = (): void => {
  const fragment: DocumentFragment = page404.render();
  createTmpl(fragment);
};
