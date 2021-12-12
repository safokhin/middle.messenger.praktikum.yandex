interface ICheckField {
  [key: string]: (value: string) => string;
}

export const checkField: ICheckField = {
  LOGIN: (value) => checkLogin(value),
  PASSWORD: (value) => checkPassword(value),
  NAME: (value) => checkName(value),
  EMAIL: (value) => checkEmail(value),
  PHONE: (value) => checkPhone(value),
};

const generalErrors = {
  getLengthLimit: (min: number, max: number): string =>
    `Длинна поля должна быть от ${min} до ${max} символов`,
};

const checkLogin = (value: string): string => {
  const checkLength = /^.{3,20}$/.test(value);
  const checkLatinAndNumber = /^(?=.*[a-zA-Z])[0-9a-zA-Z]+$/.test(value);
  const checkSpace = /\s/.test(value);
  const checkSpecialCharacters =
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);

  if (!checkLength) return generalErrors.getLengthLimit(3, 20);
  if (checkSpace) return `Поле не должно включать пробелы`;
  if (checkSpecialCharacters) return `Поле не должно содержать спецсимволов`;
  if (!checkLatinAndNumber)
    return `Поле должно состоять из латинских символов или цифр`;
  return "";
};

const checkPassword = (value: string): string => {
  const checkLength = /^.{8,40}$/.test(value);
  const checkCapitalOrNumber = /(?=.*[A-ZА-Я])(?=.*[0-9])/.test(value);

  if (!checkLength) return generalErrors.getLengthLimit(8, 40);
  if (!checkCapitalOrNumber)
    return `В поле обязательно должна присутствовать одна заглавная буква и цифра`;
  return "";
};

const checkName = (value: string) => {
  const checkLetter = /^[a-zA-Zа-яА-Я]+$/.test(value);
  const checkCapital = /^[A-ZА-Я]$/.test(value.charAt(0));

  if (!checkLetter) return `Поле должно состоять только из букв`;
  if (!checkCapital) return `Первая буква должна быть заглавной`;
  return "";
};

const checkEmail = (value: string) => {
  const checkEmail =
    /^[a-zA-Z0-9!$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
      value
    );

  if (!checkEmail) return "Некорректный E-mail";
  return "";
};

const checkPhone = (value: string) => {
  const checkPhone = /^([8+]).\d{10,15}$/.test(value);
  if (!checkPhone) return `Некорректный номер телефона`;
  return "";
};

export const handlerErrors = (
  validName: string,
  value: string,
  element: any
) => {
  const validFunction = checkField[validName];
  if (validFunction) {
    const errorText = validFunction(value);
    element.setProps({ errorText, value });
    return errorText;
  }
  return "";
};
