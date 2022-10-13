const input = document.querySelector("#text");
const convert = document.querySelector("#convert-btn");

const camelCaseElement = document.querySelector("#camel-case");
const pascalCaseElement = document.querySelector("#pascal-case");
const snakeCaseElement = document.querySelector("#snake-case");
const screamingSnakeCaseElement = document.querySelector(
  "#screaming-snake-case"
);
const kebabCaseElement = document.querySelector("#kebab-case");
const screamingKebabCaseElement = document.querySelector(
  "#screaming-kebab-case"
);

// function for camelCase
const convertCamelCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i) => {
    if (i === 0) {
      return (word = word.toLowerCase());
    } else {
      const firstLetter = word.slice(0, 1);
      const remainingLetter = word.slice(1);
      return firstLetter.toUpperCase() + remainingLetter.toLowerCase();
    }
  });
  return arrayFunction.join("");
};

// function for PascalCase
const convertPascalCase = (text) => {
  const words = text.split(" ");
  const arrayFunction = words.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const remainingLetter = word.slice(1);
    return firstLetter.toUpperCase() + remainingLetter.toLowerCase();
  });

  return arrayFunction.join("");
};

convert.addEventListener("click", () => {
  let text = input.value;
  console.log("first");
  //to camelCase
  const camelCase = convertCamelCase(text);
  camelCaseElement.innerText = camelCase;

  //to PascalCase
  const PascalCase = convertPascalCase(text);
  pascalCaseElement.innerText = PascalCase;
});
