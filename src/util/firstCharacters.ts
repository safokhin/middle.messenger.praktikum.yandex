export const firstCharacters = (str: string): string => {
  const string =
    str.split(" ").length > 2
      ? `${str.split(" ")[0]} ${str.split(" ")[1]}`
      : str;

  return string.split(" ").reduce((acc, word) => (acc += word[0]), "");
};
