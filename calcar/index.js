let input1 = document.getElementById("first-number");
let input2 = document.getElementById("second-number");
let results = document.querySelector("ul");
const operationButtons = document.querySelectorAll("[data-operation]");

const validation = (n) => n.replace(/[^0-9]+/g, "");


let i1 = parseInt(validation(input1.value));
let i2 = parseInt(validation(input2.value));
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let r = "";
    console.log(parseFloat(input1.value));
    switch (button.id) {
      case "add":
        r = parseFloat(validation(input1.value)) + parseFloat(validation(input2.value));
        break;
      case "sub":
        r = validation(input1.value) - validation(input2.value);
        break;
      case "mul":
        r = validation(input1.value) * validation(input2.value);
        break;
      case "div":
        r = validation(input1.value) / validation(input2.value);
        break;
    }

    results.innerHTML += `<li>${r}</li>`;
  });
});
