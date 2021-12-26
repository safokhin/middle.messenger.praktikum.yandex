import { getUser, logOut, signIn, signUp } from "../api/auth";
import { changePage } from "../pages";
import { authorizationPage, createTmplAuth } from "../pages/authoziration";
import { checkAllFieldsErrors } from "../util/validation";
import { createTmplReg, registrationPage } from "../pages/registration";
import { store } from "../modules/Store";
import { router } from "../service/Router";

export class AuthController {
  public signUpUser(data: any[]): void {
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

      signUp({ data: validation.fields, headers })
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
          createTmplReg(); // Необходимо для отображения текста ошибки
        });
    }
  }

  public signInUser(data: any[]): void {
    const validation = checkAllFieldsErrors(data);

    if (validation.check) {
      const headers = {
        "Access-Control-Allow-Credentials": true,
        "Content-type": "application/json; charset=utf-8",
      };
      signIn({ data: validation.fields, headers })
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

  public getUser(): any {
    const pathName = window.location.pathname;

    return getUser({
      data: {},
      headers: { "Content-type": "application/json; charset=utf-8" },
    })
      .then((data: { response: string }) => {
        const dataObj = JSON.parse(data.response);
        store.set("user", dataObj);
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
    logOut({ data: {}, headers })
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
