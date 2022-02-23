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

/** Variables */
let operand1 = document.getElementById("non-curli");
let operand2 = document.getElementById("gearing-capital");
let operand3 = document.getElementById("gearing-reserves");
let operand4 = document.getElementById("long-liabilities");

/** gearing.html ratios */
/** Calculates the gearing ratio in gearing.html*/
    
function calculateGearing() {

    a = parseInt(operand1.value)
    b = parseInt(operand2.value)
    c = parseInt(operand3.value)
    d = parseInt(operand4.value)
    document.getElementById('gearing-result').value = a / (b + c + d);

    return false;  
   }
    






