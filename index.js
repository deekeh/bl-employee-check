const {fullTime: fulltime, halfTime: halftime} = require('./data');

console.log("Welcome to Employee Wage Computation"); // uc1

// uc2
let empchk = Math.floor(Math.random() * 10) % 2;
if (empchk) console.log("employee is present");
else console.log("employee is absent");

// uc3
// const fulltime = 8, parttime = 4;
let hrs = 0;
let empCase = Math.floor(Math.random() * 10) % 3;

switch (empCase) {
  case 0:
    hrs = parttime;
    break;
  case 1:
    hrs = fulltime;
    break;
  default:
    hrs = 0;
    break;
}

console.log("Employee wage:", hrs*20);

// uc4
function getMonthlyWage() {
  let monthlyPay = 0;
  const parttime = 4, fulltime = 8;
  let hrs;
  for (let day = 0; day<20; day++) {
    let empCase = Math.floor(Math.random() * 10) %3;
    switch (empCase) {
      case 0:
        hrs = parttime;
        break;
      case 1:
        hrs = fulltime;
        break;
      default:
        hrs = 0;
        break;
    }
    monthlyPay += hrs*20;
  }
  return monthlyPay;
}

// uc5
console.log("Monthly pay:", getMonthlyWage());

function getRestrictedWage() {

}
