import { createTmplAuth } from "./authoziration";
import { createTmplReg } from "./registration";
import { createTemplateChat } from "./chat";
import { createTmplProfile } from "./profile";
import { createTmpl404 } from "./404";
import { createTmpl500 } from "./500";

export const changePage = (page: string): void => {
  if (page === "registration") createTmplReg();
  if (page === "authorization") createTmplAuth();
  if (page === "chat") createTemplateChat();
  if (page === "profile") createTmplProfile();
  if (page === "404") createTmpl404();
  if (page === "500") createTmpl500();
};

// Универсальный метод для монтирования страниц
export const createTmpl = (fragment: DocumentFragment): void => {
  const root = document.querySelector("#root");
  if (root !== null) {
    root.innerHTML = "";
    root.appendChild(fragment);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createTmplAuth();
});
