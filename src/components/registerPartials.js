import Handlebars from "handlebars/dist/handlebars";

import button from "./button/button.tmpl";
import input from "./input/input.tmpl";
import textField from "./textField/textField.tmpl";
import avatar from "./avatar/avatar.tmpl";
import action from "./action/action.tmpl";
import message from "./message/message.tmpl";
import popup from "./popup/popup.tmpl";

import dialog from "./chat/dialog/dialog.tmpl";
import dialogItem from "./chat/dialogItem/dialogItem.tmpl";
import sidebar from "./chat/sidebar/sidebar.tmpl";

Handlebars.registerPartial({
  button,
  textField,
  avatar,
  dialog,
  dialogItem,
  input,
  action,
  message,
  popup,
  sidebar,
});
