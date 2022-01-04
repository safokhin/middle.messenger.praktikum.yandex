import { auth } from "../api/auth";
import { changePage } from "../pages";
import { authorizationPage, createTmplAuth } from "../pages/authoziration";
import { checkAllFieldsErrors } from "../util/validation";
import { createTmplReg, registrationPage } from "../pages/registration";
import { store } from "../modules/Store";
import { router } from "../service/Router";
import { Block } from "../modules/Block";

export class AuthController {
  public signUpUser(data: Block[]): void {
    console.log(data);
    const validation = checkAllFieldsErrors(data);
    const passwords = data.filter(
      (element) =>
        element.props.name === "password" ||
        element.props.name === "password-repeat"
    );

    const passwordEquals =
      passwords[0].props.value === passwords[1].props.value;

    if (!passwordEquals) {
      registrationPage.setProps({
        error: "Пароли не совпадают",
      });
      createTmplReg();
    }

    if (validation.check && passwordEquals) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };

      auth
        .signUp({ data: validation.fields, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) this.getUser();
        })
        .catch((err) => {
          let errorText;
          if (err.status >= 400 && err.status < 500) {
            errorText = JSON.parse(err.response).reason;
          } else {
            errorText =
              "У нас проблемы, попробуйте ещё раз. Если не помогло, обратитесь в поддержку";
          }

          registrationPage.setProps({
            error: errorText,
          });
        });
    }
  }

  public signInUser(data: Block[]): void {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      auth
        .signIn({ data: validation.fields, headers })
        .then((data: { status: number }) => {
          if (data.status === 200) this.getUser();
        })
        .catch((err) => {
          let errorText;
          if (err.status === 401) {
            errorText = `${
              JSON.parse(err.response).reason
            } (Неверный логин или пароль)`;
          } else if (err.status === 400) {
            errorText = JSON.parse(err.response).reason;
          } else {
            errorText =
              "У нас проблемы, попробуйте ещё раз. Если не помогло, обратитесь в поддержку";
          }

          authorizationPage.setProps({
            error: errorText,
          });
          createTmplAuth(); // Необходимо для отображения текста ошибки
        });
    }
  }

  public async getUser(): Promise<void> {
    const pathName = window.location.pathname;
    const headers = { "Content-type": "application/json; charset=utf-8" };
    return await auth
      .getUser({
        data: {},
        headers,
      })
      .then((data: { response: string }) => {
        const user = JSON.parse(data.response);
        store.set("user", user);
        // Чтобы страница не рендерилась лишний раз
        if (pathName === "/" || pathName === "/sign-up") {
          changePage("/messenger");
        } else {
          router.start();
        }
      })
      .catch(() => {
        if (pathName === "/" || pathName === "/sign-up") {
          router.start();
        } else {
          changePage("/");
        }
      });
  }

  public logOut(): void {
    // переход только если 200
    const headers = {
      "Access-Control-Allow-Credentials": true,
      "Content-type": "application/json; charset=utf-8",
    };
    auth
      .logOut({ data: {}, headers })
      .then((data: { status: number }) => {
        if (data.status === 200) {
          changePage("/");
        }
      })
      .catch(() => {
        changePage("/500");
      });
  }
}

export const authController = new AuthController();
