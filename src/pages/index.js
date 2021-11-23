import { createTemplateAuth } from "./authoziration";
import { createTemplateReg } from "./registration";
import { createTemplateChat } from "./chat";
import { createTemplateProfile } from "./profile";
import { createTemplate404 } from "./404";
import { createTemplate500 } from "./500";

window.changePage = function (page) {
  if (page === "registration") createTemplateReg();
  if (page === "authorization") createTemplateAuth();
  if (page === "chat") createTemplateChat();
  if (page === "profile") createTemplateProfile();
  if (page === "404") createTemplate404();
  if (page === "500") createTemplate500();
};

document.addEventListener("DOMContentLoaded", function () {
  createTemplateAuth();
});
