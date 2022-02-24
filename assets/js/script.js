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
let operand26 = document.getElementById("current-assets");
let operand27 = document.getElementById("current-liabilities");
let operand28 = document.getElementById("acid-assets");
let operand29 = document.getElementById("acid-inventory");
let operand30 = document.getElementById("acid-liabilities");
let operand31 = document.getElementById("operating-cash");
let operand32 = document.getElementById("cash-liabilities");
let operand33 = document.getElementById("roce-operating");
let operand34 = document.getElementById("roce-equity");
let operand35 = document.getElementById("roce-liabilities");
let operand36 = document.getElementById("rosf-profit");
let operand37 = document.getElementById("rosf-preference");
let operand38 = document.getElementById("rosf-equity");
let operand39 = document.getElementById("net-operating");
let operand40 = document.getElementById("net-sales");
let operand41 = document.getElementById("gross-operating");
let operand42 = document.getElementById("gross-sales");


/** gearing.html ratios */
/** Calculates the gearing ratio in gearing.html*/
    
function calculateGearing() {

    a = parseFloat(operand1.value)
    b = parseFloat(operand2.value)
    c = parseFloat(operand3.value)
    d = parseFloat(operand4.value)
    let gearingResult = document.getElementById("gearing-result").value = a / (b + c + d);  
   }

const gearingFeedback = () => {
    let result1 = document.getElementById("gearing-result");
    aaa = parseFloat(result1.value)
    if (aaa >= 0.50) {
        document.getElementById("gearing-feedback").innerHTML = "Your organization's Gearing Ratio is greater than 50%, is typically considered highly levered or geared. As a result, the company would be at greater financial risk, because during times of lower profits and higher interest rates, the company would be more susceptible to loan default and bankruptcy.";
    } else {
        document.getElementById("gearing-feedback").innerHTML = "Your organization's Gearing Ratio is less than 50%, this is typically considered low-risk by both investors and lenders.";
    }
}
    
/** Calculates the interest cover ratio in gearing.html*/
    
function calculateCover() {

    e = parseFloat(operand5.value)
    f = parseFloat(operand6.value)
    document.getElementById('cover-result').value = e / f;  
   }

const coverFeedback = () => {
    let result2 = document.getElementById("cover-result");
    bbb = parseFloat(result2.value)
    if (bbb <= 1.99) {
        document.getElementById("cover-feedback").innerHTML = "Your organization's Interest Cover Ratio is equal or less than 1, this indicates that your company can not meet its current interest payment obligations and, therefore, is not in good financial health.";
    } else if (bbb = 2 < 3) {
        document.getElementById("cover-feedback").innerHTML = "Your organization's Interest Cover Ratio is greater than 2, this is considered the minimum acceptable amount for a company that has solid, consistent revenues.";
    }
    else if (bbb >= 3) {
        document.getElementById("cover-feedback").innerHTML = "Your organization's Cover Ratio is greater than 3, Analysts prefer to see a coverage ratio of three or better, it's sign of a solid and profitable organization.";
    }
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

/** liquidity.html ratios */
/** Calculates the current ratio in liquidity.html*/

function calculateCurrent() {

    z = parseFloat(operand26.value)
    aa = parseFloat(operand27.value)
    let currentResult = document.getElementById("current-result").value = z / aa;  
   }

/** Calculates the acid ratio in liquidity.html*/

function calculateAcid() {

    bb = parseFloat(operand28.value)
    cc = parseFloat(operand29.value)
    dd = parseFloat(operand30.value)
    let acidResult = document.getElementById("acid-result").value = (bb - cc) / dd;  
   }

/** Calculates the cash ratio in liquidity.html*/

function calculateCash() {

    ee = parseFloat(operand31.value)
    ff = parseFloat(operand32.value)
    let cashResult = document.getElementById("cash-result").value = ee / ff;  
   }

/** profitability.html ratios */
/** Calculates the ROCE ratio in profitability.html*/

function calculateRoce() {

    gg = parseFloat(operand33.value)
    hh = parseFloat(operand34.value)
    ii = parseFloat(operand35.value)
    let roceResult = document.getElementById("roce-result").value = gg / (hh + ii);  
   }

/** Calculates the ROCE ratio in profitability.html*/

function calculateRosf() {

    jj = parseFloat(operand36.value)
    kk = parseFloat(operand37.value)
    ll = parseFloat(operand38.value)
    let rosfResult = document.getElementById("rosf-result").value = ((jj - kk) *100) / ll;  
   }

/** Calculates the Operating Profit margin in profitability.html*/

function calculateMargin() {

    mm = parseFloat(operand39.value)
    nn = parseFloat(operand40.value)
    let marginResult = document.getElementById("net-result").value = (mm / nn) *100;  
   }

/** Calculates the Gross Operating Profit margin in profitability.html*/

function calculateGross() {

    oo = parseFloat(operand41.value)
    pp = parseFloat(operand42.value)
    let grossResult = document.getElementById("gross-result").value = (oo / pp) *100;  
   }




    
   
    






