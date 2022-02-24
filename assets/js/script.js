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
let operand5 = document.getElementById("cover-operating");
let operand6 = document.getElementById("cover-payable");
let operand7 = document.getElementById("dividend-year");
let operand8 = document.getElementById("taxed-profit");
let operand9 = document.getElementById("preference");
let operand10 = document.getElementById("per-share");
let operand11 = document.getElementById("market-value");
let operand12 = document.getElementById("taxed-profit-earnings");
let operand13 = document.getElementById("earnings-preference");
let operand14 = document.getElementById("ordinary-shares");
let operand15 = document.getElementById("market-value");
let operand16 = document.getElementById("price-earnings");
let operand17 = document.getElementById("inventory-held");
let operand18 = document.getElementById("cost");
let operand19 = document.getElementById("average-receivables");
let operand20 = document.getElementById("credit-sales");
let operand21 = document.getElementById("average-payables");
let operand22 = document.getElementById("credit-purchase");
let operand23 = document.getElementById("sales");
let operand24 = document.getElementById("total-assets");
let operand25 = document.getElementById("turnover-liabilities");



/** gearing.html ratios */
/** Calculates the gearing ratio in gearing.html*/
    
function calculateGearing() {

    a = parseFloat(operand1.value)
    b = parseFloat(operand2.value)
    c = parseFloat(operand3.value)
    d = parseFloat(operand4.value)
    let gearingResult = document.getElementById("gearing-result").value = a / (b + c + d);  
   }
    
/** Calculates the interest cover ratio in gearing.html*/
    
function calculateCover() {

    e = parseFloat(operand5.value)
    f = parseFloat(operand6.value)
    document.getElementById('cover-result').value = e / f;  
   }
/** shareholders.html ratios */
/** Calculates the dividend payout ratio in shareholders.html*/

function calculateDividend() {

    g = parseFloat(operand7.value)
    h = parseFloat(operand8.value)
    i = parseFloat(operand9.value)
    let dividendResult = document.getElementById("dividend-payout-result").value = (g / (h -i)) * 100;  
   }

/** Calculates the dividend yield ratio in shareholders.html*/

function calculateYield() {

    j = parseFloat(operand10.value)
    k = parseFloat(operand11.value)
    let yieldResult = document.getElementById("dividend-yield-result").value = (j / k) * 100;  
   }

   /** Calculates the dividend payout ratio in shareholders.html*/

function calculateEarnings() {

    l = parseFloat(operand12.value)
    m = parseFloat(operand13.value)
    n = parseFloat(operand14.value)
    let earningsResult = document.getElementById("earnings-share-result").value = ((l - m) * 100 ) /n;  
   }

  /** Calculates the dividend payout ratio in shareholders.html*/

  function calculatePrice() {

    o = parseFloat(operand15.value)
    p = parseFloat(operand16.value)
    let priceResult = document.getElementById("price-ratio-result").value = o / p;  
   }

/** efficiency.html ratios */
/** Calculates the inventory holding period in efficiency.html*/

function calculateInventory() {

    q = parseFloat(operand17.value)
    r = parseFloat(operand18.value)
    let inventoryResult = document.getElementById("inventory-holding-result").value = (q / r) * 365;  
   }

/** Calculates the average period to settle trade receivables ratio in efficiency.html*/

function calculateReceivables() {

    s = parseFloat(operand19.value)
    t = parseFloat(operand20.value)
    let receivablesResult = document.getElementById("trade-settlement-result").value = (s / t) * 365;  
   }

/** Calculates the average period to settle trade payables ratio in efficiency.html*/

function calculatePayables() {

    u = parseFloat(operand21.value)
    v = parseFloat(operand22.value)
    let payablesResult = document.getElementById("trade-payables-result").value = (u / v) * 365;  
   }

/** Calculates the average turnover ratio in efficiency.html*/

function calculateTurnover() {

    w = parseFloat(operand23.value)
    x = parseFloat(operand24.value)
    y = parseFloat(operand25.value)
    let turnoverResult = document.getElementById("turnover-result").value = w / (x -y);  
   }
    
   
    






