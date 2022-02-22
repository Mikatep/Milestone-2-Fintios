/** Event listener for all ratios buttons */

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "submit") {
              calculateGearing();
          } 
      });
  }
})

/** gearing.html ratios */
/** Calculates the gearing ratio in gearing.html*/
    
const calculateGearing = (operand1, operand2, operand3, operand4,) => operand1 / (operand2 + operand3 + operand4);

    let gearingResult = calculateGearing();

/** Variables */
let operand1 = document.getElementById("non-curli").innerText;
let operand2 = document.getElementById("gearing-capital").innerText;
let operand3 = document.getElementById("gearing-reserves").innerText;
let operand4 = document.getElementById("long-liabilities").innerText;
let



