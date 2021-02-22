const filter = (inputString) => {
  return inputString.split("").reduce((result, character) => {
    // if acc is less then 3 chars long, 4 of the same character can't occur
    if (result.length > 3) {
      const lastCharacters = result.slice(result.length - 3).split("");
      if (lastCharacters.every((c) => c === character)) {
        return result; // if the current character is the same as the previous, skip adding it to the result.
      }
    }
    return result + character;
  }, "");
};

module.exports = filter;
