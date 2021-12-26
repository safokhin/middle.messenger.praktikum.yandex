// type - edit-profile, edit-password, default
export const typeFormSettings = (type: string, buttons: any, fields: any) => {
  const [, , buttonExit, buttonSaveProfile, buttonSavePassword] = buttons;

  const [, , , , , , oldPassword, newPassword, newPasswordRepeat] = fields;

  if (type === "edit-profile") {
    setProps(fields, { disabled: false, classes: "underline" });
    setProps(buttons, { classes: "invisible" });

    buttonSaveProfile.setProps({ classes: "" });
    buttonSavePassword.setProps({ classes: "invisible" });

    oldPassword.setProps({ classes: "invisible" });
    newPassword.setProps({ classes: "invisible" });
    newPasswordRepeat.setProps({ classes: "invisible" });
  } else if (type === "edit-password") {
    setProps(fields, { classes: "invisible" });
    setProps(buttons, { classes: "invisible" });

    buttonSaveProfile.setProps({ classes: "invisible" });
    buttonSavePassword.setProps({ classes: "" });

    oldPassword.setProps({ classes: "underline", disabled: false, value: "" });
    newPassword.setProps({ classes: "underline", disabled: false, value: "" });
    newPasswordRepeat.setProps({
      classes: "underline",
      disabled: false,
      value: "",
    });
  } else if (type === "default") {
    setProps(fields, { disabled: true, classes: "underline" });
    setProps(buttons, { classes: "" });

    buttonExit.setProps({ classes: "warning" });
    buttonSaveProfile.setProps({ classes: "invisible" });
    buttonSavePassword.setProps({ classes: "invisible" });

    oldPassword.setProps({ classes: "invisible" });
    newPassword.setProps({ classes: "invisible" });
    newPasswordRepeat.setProps({ classes: "invisible" });
  }
};

const setProps = (elements: any[], props: {}) => {
  elements.forEach((item) => item.setProps(props));
};
