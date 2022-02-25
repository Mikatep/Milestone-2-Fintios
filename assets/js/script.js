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
        document.getElementById("cover-feedback").innerHTML = "Your organization's Interest Cover Ratio is equal or less than 1 (1.99), this indicates that your company can not meet its current interest payment obligations and, therefore, is not in good financial health.";
    } else if (bbb = 2 < 3) {
        document.getElementById("cover-feedback").innerHTML = "Your organization's Interest Cover Ratio is greater than 2, this is considered the minimum acceptable amount for a company that has solid, consistent revenues.";
    }
    else {
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

const dividendFeedback = () => {
    let result3 = document.getElementById("dividend-payout-result");
    ccc = parseFloat(result3.value)
    if (ccc <= 0.30) {
        document.getElementById("dividend-feedback").innerHTML = "Your organization's Dividend Payout Ratio is lower than 30%, this is sustainable for the company, however, organization's with a extremely low ratio will struggle to attract investors.";
    } else if (ccc >= 0.30 <= 0.50) {
        document.getElementById("dividend-feedback").innerHTML = "Your organization's Dividend Payout Ratio is between 30% and 50%, this is considered a healthy dividend payout."
    } else {
        document.getElementById("dividend-feedback").innerHTML = "Your organization's Dividend Payout Ratio is greater than 50%, this is considered an unsustainable dividend payout since the company will have to pay 50% or more of the internal profit as dividend payout.";
    }
}

/** Calculates the dividend yield ratio in shareholders.html*/

function calculateYield() {

    j = parseFloat(operand10.value)
    k = parseFloat(operand11.value)
    let yieldResult = document.getElementById("dividend-yield-result").value = (j / k) * 100;  
   }

const yieldFeedback = () => {
    let result4 = document.getElementById("dividend-yield-result");
    ddd = parseFloat(result4.value)
    if (ddd < 5) {
        document.getElementById("yield-feedback").innerHTML = "Your organization's Dividend Yield Ratio is lower than 5%, this is sustainable for the company, and it's the most common ratio used by organizations, however, organization's with a extremely low ratio will struggle to attract investors.";
    } else if ( 5 >= ddd <= 9.99) {
        document.getElementById("yield-feedback").innerHTML = "Your organization's Dividend Yield Ratio is between 5% and 10%, this is considered a healthy dividend payout, it shows a consolidated and strong organizations with healthy finances, and it's interesting enough to attract investors.."
    } else {
        document.getElementById("yield-feedback").innerHTML = "Your organization's Dividend Yield Ratio is greater than 10%, this is considered an unsustainable and risky dividend yield in the industry, historically companies with this kind of dividend yield struggle to actually pay the dividends to investors, and they constantly cancel the payment of dividends throughout the years. This companies may seem as a very attractive option for new investors, but definitely is advisable to 'Stay Away from them!";
    }
}

   /** Calculates the dividend payout ratio in shareholders.html*/

function calculateEarnings() {

    l = parseFloat(operand12.value)
    m = parseFloat(operand13.value)
    n = parseFloat(operand14.value)
    let earningsResult = document.getElementById("earnings-share-result").value = ((l - m) * 100 ) /n;  
   }

const earningsFeedback = () => {
    let result5 = document.getElementById("earnings-share-result");
    eee = parseFloat(result5.value)
    if (eee > 0) {
        document.getElementById("earnings-feedback").innerHTML = "Your organization's Earnings per Share Ratio is greater than 0, there is not good or bad when it comes to earnings per share ratio, the extended conception about it is 'the higher the better'. The resulting number serves as an indicator of a company's profitability.";
    }
}

  /** Calculates the dividend payout ratio in shareholders.html*/

  function calculatePrice() {

    o = parseFloat(operand15.value)
    p = parseFloat(operand16.value)
    let priceResult = document.getElementById("price-ratio-result").value = o / p;  
   }

   const priceFeedback = () => {
    let result6 = document.getElementById("price-ratio-result");
    fff = parseFloat(result6.value)
    if (fff > 0) {
        document.getElementById("price-feedback").innerHTML = "Your organization's Price to Earnings Ratio is greater than 0. As it happens with the earnings per share ratio, there's not such a thing as a good or bad price to earnings ratio. A higher P/E ratio shows that investors are willing to pay a higher share price today because of growth expectations in the future. The average P/E for the S&P 500 has historically ranged from 13 to 15. For example, a company with a current P/E of 25, above the S&P average, trades at 25 times earnings.";
    } 
}

/** efficiency.html ratios */
/** Calculates the inventory holding period in efficiency.html*/

function calculateInventory() {

    q = parseFloat(operand17.value)
    r = parseFloat(operand18.value)
    let inventoryResult = document.getElementById("inventory-holding-result").value = (q / r) * 365;  
   }

const inventoryFeedback = () => {
    let result7 = document.getElementById("inventory-holding-result");
    ggg = parseFloat(result7.value)
    if (ggg >= 60) {
        document.getElementById("inventory-feedback").innerHTML = "Your organization's Inventory holding Ratio is greater than 60 days, this is above average, and it means that you take longer than 2/3 months to sell and restock. This can be dangerous if your organization's belongs to an industry such a food retail or hospitality.";
    } else if ( 20 >= ggg <= 59) {
        document.getElementById("inventory-feedback").innerHTML = "Your organization's Inventory holding Ratio is between 20 and 59 days, this is considered a good holding inventory period, and it means that the organization is able to sell all the inventory and restock withing 1 and 2 months period. Again, this will depend of the industry the organization's is in, and it wont apply to hospitality and food retail since the expected holding inventory period for mentioned industries is way lower."
    } else {
        document.getElementById("inventory-feedback").innerHTML = "Your organization's Inventory holding Ratio is lower than 20 days, this is considered a fast holding inventory period, and it means that the organization is able to sell all the inventory and restock withing 1 month. It shows that the organization's most likely belogngs to an fast industry such as food reatil or hospitality."
    }
}

/** Calculates the average period to settle trade receivables ratio in efficiency.html*/

function calculateReceivables() {

    s = parseFloat(operand19.value)
    t = parseFloat(operand20.value)
    let receivablesResult = document.getElementById("trade-settlement-result").value = (s / t) * 365;  
   }

   const receivablesFeedback = () => {
    let result8 = document.getElementById("trade-settlement-result");
    hhh = parseFloat(result8.value)
    if (hhh >= 40) {
        document.getElementById("receivables-feedback").innerHTML = "Your organization's trade receivables settlement period is greater than 40 days, this is slighliest higher than the average. Again, this varies from one industry to another but you risk missing payments from credit sales.";
    } else {
        document.getElementById("receivables-feedback").innerHTML = "Your organization's trade receivables settlement period is lower than 40 days, this is within the average, and it means that the organization is able to turn its credit sales into cash within one month, again organization's within the hospitality or retail or food retail indrustry, normally presents the lowest trade receivable's settlement period with their number closer to 5 or 10 days."
    }
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




    
   
    






