export const firstCharacters = (str: string): string => {
  return str.split(" ").reduce((acc, word) => (acc += word[0]), "");
};
