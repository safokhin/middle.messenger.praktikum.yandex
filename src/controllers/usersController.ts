import { checkAllFieldsErrors } from "../util/validation";
import {
  changePassword,
  changeProfile,
  changeProfileAvatar,
} from "../api/users";
import { authController } from "./authController";

class UsersController {
  changeProfile(data: any) {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      changeProfile({ data: validation.fields, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) {
            authController.getUser();
          }
        })
        .catch((err) => {});
    }
  }

  changeProfileAvatar(data: any) {
    const headers = {};
    const form = document.querySelector("#form-avatar");
    const avatar = document.querySelector("#field-photo");

    if (form !== null && avatar !== null) {
      const formData = new FormData(form);
      formData.append("avatar", avatar.files[0]);

      changeProfileAvatar({ data: formData, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) {
            authController.getUser();
          }
        })
        .catch((err) => {});
    }
  }

  changePassword(data: any) {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      changePassword({ data: validation.fields, headers })
        .then((data: { status: number }) => {
          console.log("Ok");
        })
        .catch((err) => {});
    }
  }
}

export const usersController = new UsersController();
