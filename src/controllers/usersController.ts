import { checkAllFieldsErrors } from "../util/validation";
import { users } from "../api/users";
import { authController } from "./authController";

class UsersController {
  changeProfile(data: any) {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      users
        .changeProfile({ data: validation.fields, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) {
            authController.getUser();
          }
        })
        .catch(() => {});
    }
  }

  changeProfileAvatar() {
    const headers = {};
    const form = document.querySelector("#form-avatar");
    const avatar = document.querySelector("#field-photo");

    if (form !== null && avatar !== null) {
      const formData = new FormData(form);
      formData.append("avatar", avatar.files[0]);

      users
        .changeProfileAvatar({ data: formData, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) {
            authController.getUser();
          }
        })
        .catch(() => {});
    }
  }

  changePassword(data: any) {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      users
        .changePassword({ data: validation.fields, headers })
        .then(() => {
          console.log("Ok");
        })
        .catch(() => {});
    }
  }

  getUser(id: number) {
    console.log(id);
  }
}

export const usersController = new UsersController();
