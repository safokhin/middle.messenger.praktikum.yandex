import "regenerator-runtime/runtime";
import { router } from "../service/Router";
import { authController } from "../controllers/authController";
import { store } from "../modules/Store";
import { createTmplAuth } from "./authoziration";
import { createTmplReg } from "./registration";
import { createTemplateChat } from "./chat";
import { createTmplProfile } from "./profile";
import { createTmpl404 } from "./404";
import { createTmpl500 } from "./500";

router
  .use("/", createTmplAuth)
  .use("/sign-up", createTmplReg)
  .use("/messenger", createTemplateChat)
  .use("/settings", createTmplProfile)
  .use("/404", createTmpl404)
  .use("/500", createTmpl500);

export const changePage = (url: string): void => {
  router.go(url);
};

// Универсальный метод для монтирования страниц
export const createTmpl = (fragment: DocumentFragment): void => {
  const root = document.querySelector("#root");
  if (root !== null) {
    root.innerHTML = "";
    root.appendChild(fragment);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await authController.getUser();
});
