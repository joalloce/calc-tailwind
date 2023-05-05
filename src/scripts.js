class Calc {
  constructor(input, output) {
    this.input = input;
    this.output = output;
    this.clear();
  }

  cleanInput(operation) {
    let cleanResult = operation.map((number) => {
      if (number === "x") {
        return "*";
      }
      if (number === "÷") return "/";
      else return number;
    });

    return cleanResult.join("");
  }

  clear() {
    input.innerText = "0";
    output.innerText = "0";
    error.innerHTML = "<br>";
  }

  updateDisplay(value) {
    error.innerHTML = "<br>";
    if (input.innerText === "0") input.innerText = value.toString();
    else if (input.innerText === "") input.innerText = "0";
    else input.innerText = input.innerText.toString() + value.toString();

    let op = input.innerText.split("");
    let operation = this.cleanInput(op);

    try {
      output.innerText = eval(operation) === undefined ? "0" : eval(operation);
    } catch (e) {}
  }

  delete() {
    input.innerText = input.innerText.slice(0, -1);
    error.innerHTML = "<br>";
  }

  result() {
    let op = input.innerText.split("");
    let operation = this.cleanInput(op);

    error.innerHTML = "<br>";

    try {
      input.innerText = eval(operation) === undefined ? "0" : eval(operation);
      output.innerHTML = "<br>"; // empty to keep the height of the text.
    } catch (e) {
      error.innerText = "Error";
    }
  }
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const error = document.getElementById("error");

const numbers = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");

const deleteButton = document.getElementById("delete");
const result = document.getElementById("result");
const clear = document.getElementById("clear");

const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const root = document.getElementById("root");
const display = document.getElementById("display");
const digits = document.getElementById("digits");
const operations = document.getElementById("operations");

const calc = new Calc(input, output);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    calc.updateDisplay(value);
  });
});

operation.forEach((button) => {
  button.addEventListener("click", () => {
    let operant = button.innerText;
    calc.updateDisplay(operant);
  });
});

deleteButton.addEventListener("click", () => {
  calc.delete();
  calc.updateDisplay("");
});

result.addEventListener("click", () => {
  calc.result();
});

clear.addEventListener("click", () => {
  calc.clear();
});

darkMode.addEventListener("click", () => {
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
  root.classList.remove("bg-zinc-800", "text-black");
  root.classList.add("bg-zinc-200", "text-white");
  display.classList.remove("bg-zinc-100");
  display.classList.add("bg-zinc-900");
  digits.classList.remove("bg-zinc-200");
  digits.classList.add("bg-zinc-800");
  operations.classList.remove("bg-zinc-300");
  operations.classList.add("bg-zinc-700");
});

lightMode.addEventListener("click", () => {
  darkMode.classList.toggle("hidden");
  lightMode.classList.toggle("hidden");
  root.classList.remove("bg-zinc-200", "text-white");
  root.classList.add("bg-zinc-800", "text-black");
  display.classList.remove("bg-zinc-900");
  display.classList.add("bg-zinc-100");
  digits.classList.remove("bg-zinc-800");
  digits.classList.add("bg-zinc-200");
  operations.classList.remove("bg-zinc-700");
  operations.classList.add("bg-zinc-400");
});
