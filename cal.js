let display = document.getElementById("p");
let n1 = "";
let n2 = "";
let op = "";
let res = "";
let but = document.querySelector(".buttons");
but.onclick = function (event) {
  if (event.target.tagName === "BUTTON") {
    let value = event.target.innerHTML;
    if (value === "C") {
      n1 = "";
      n2 = "";
      op = "";
      res = "";
      display.innerHTML = "";
    } else if (!isNaN(value) || value === ".") {
      if (value === "." && n1.includes(".")) {
        return;
      }
      n1 += value;
      display.innerHTML = n1;
    } else if (value === "=") {
      if (n1 && n2 && op) {
        res = calculate(n2, n1, op);
        display.innerHTML = res;
        n1 = res;
        n2 = "";
        op = "";
      }
    } else {
      if (n1 && !op) {
        op = value;
        n2 = n1;
        n1 = "";
      }
    }
  } else {
    return;
  }
};

function calculate(n1, n2, op) {
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);
  switch (op) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "/":
      return num1 / num2;

    case "*":
      return num1 * num2;

    case "^":
      return Math.pow(num1, num2);

    default:
      alert("no operator is present");
      return 0;
  }
}