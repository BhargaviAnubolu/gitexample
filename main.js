/**Calculate the Home Loan EMI 
 * Taking input details as Loan Amount,Interest Rate,Tenure years
 * Calculate the Results like totalMonthly,totalInterest,totalPayable
 * creating Home Loan Amortization Schedule table
 */


/**
 * function is using  to onload the html body 
 * @returns {Number}
 */
function setInitialValue() {
  console.log('setInitialValue');
  ComputeResults();
}

/**
 * function to display the input details Amount,Interest,years
 * @returns {Number}
 */
function getLoanAmount() {
  return document.getElementById("amount").value;
}
function getLoanInterestRate() {
  return document.getElementById("interest").value;

}
function getLoanTenure() {
  return document.getElementById("years").value;
}

/**
 * function to calculate formulas like TenureYearly,EMI
 *  EMI formula P x R x (1+R)^N / [(1+R)^N-1]
 * @returns {number}
 */
function getMonthlyEMI() {
  const PrincipleAmount = getLoanAmount();
  const MonthlyInterestRate = getMonthlyInterestRate(getLoanInterestRate());
  const TenureYearly = getLoanTenure() * 12;
  const EMI = PrincipleAmount * MonthlyInterestRate *
    (Math.pow(1 + MonthlyInterestRate, TenureYearly) /
      (Math.pow(1 + MonthlyInterestRate, TenureYearly) - 1));
  return EMI;

}
/**
 * function to calculate monthly Interest Rate
 * @param {*} LoanInterestRate 
 * @returns {Number} 
 */
function getMonthlyInterestRate(LoanInterestRate) {
  return LoanInterestRate / 12 / 100;

}
/**
 * function to calculate Tenure in month
 * @returns {Number}
 */
function getTenureMonth() {
  return getLoanTenure() * 12;
}

/**
 * function to calculate results like totalInterest,totalPayment,monthlypayment
 * here calling the table 
 */
function ComputeResults() {
  console.log('ComputeResults');

  const TotalInterest = (getMonthlyEMI() * getLoanTenure() * 12 - getLoanAmount()).toFixed();
  document.getElementById("totalInterest").innerHTML = TotalInterest;

  const TotalPayment = (getMonthlyEMI() * getLoanTenure() * 12).toFixed();
  document.getElementById("totalPayment").innerHTML = TotalPayment;

  const MonthlyPayment = getMonthlyEMI().toFixed();
  document.getElementById("monthlyPayment").innerHTML = MonthlyPayment;
  Table();
}

/**
 * function to  
 *  creating an object in that
  opening balance monthly emi,montly interest,pricipal paid,outstanding balance
 *push the object to array
 *outside the loop return array
 * @param {*} MonthlyEMI 
 * @param {*} TenureInMonth 
 * @param {*} LoanAmount 
 * @param {*} MonthlyInterest 
 * @returns 
 */
function generateArray(MonthlyEMI, TenureInMonth, LoanAmount, MonthlyInterest) {

  const data_array = [];
  let OutstandingBalance = LoanAmount;
  for (let i = 0; i < TenureInMonth; i++) {

    console.log(typeof (MonthlyEMI));
    let ClosingBalance = OutstandingBalance - (+MonthlyEMI - (+OutstandingBalance * MonthlyInterest)).toFixed()
    if (i == TenureInMonth - 1) {
      if (ClosingBalance < 0) { ClosingBalance = 0 }
      else {
        ClosingBalance = 0
      }
    }
    const my_object = {

      "Month": i + 1,
      "OpeningBalance": OutstandingBalance,
      "MonthlyEMI": (+MonthlyEMI).toFixed(),
      "PrinciplePaid": (+MonthlyEMI - (+OutstandingBalance * MonthlyInterest)).toFixed(),
      "InterestPaid": (+OutstandingBalance * MonthlyInterest).toFixed(),
      "ClosingBalance": ClosingBalance
    };
    OutstandingBalance = +OutstandingBalance - my_object.PrinciplePaid;

    data_array.push(my_object);
  }
  console.table(data_array);
  return data_array;
}

/**
 * This function to create table  based on given variables
 */
function Table() {
  const MonthlyPayment = getMonthlyEMI().toFixed();
  const TenureInMonth = getTenureMonth();
  const LoanAmount = getLoanAmount();
  const MonthlyInterest = getMonthlyInterestRate(getLoanInterestRate());
  let a = generateArray(MonthlyPayment, TenureInMonth, LoanAmount, MonthlyInterest);
  let table = "<table>";
  table += "<tr>";
  table += "<th>" + "Month " + "</th>";
  table += "<th>" + "OpeningBalance " + "</th>";
  table += "<th>" + "MonthlyEMI " + "</th>";
  table += "<th>" + "PriciplePaid " + "</th>";
  table += "<th>" + "InterestPaid " + "</th>";
  table += "<th>" + "ClosingBalance " + "</th>";
  table += "</tr>";
  table += "<tr>";
  for (let i = 0; i < a.length; i++) {
    table += "<tr>";
    for (j in a[i]) {
      table += "<td>" + a[i][j] + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("fetch").innerHTML = table;
}
