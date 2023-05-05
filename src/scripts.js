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
  }

  updateDisplay(value) {
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
