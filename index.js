const {
  fullTime: fulltime,
  halfTime: parttime,
  maxHours,
  maxDays,
  dailyWage,
} = require('./data');

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

console.log("Employee wage:", hrs * dailyWage);

// uc4
function getMonthlyWage() {
  let monthlyPay = 0;
  // const parttime = 4, fulltime = 8;
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
    monthlyPay += hrs * dailyWage;
  }
  return monthlyPay;
}

// uc5
console.log("Monthly pay:", getMonthlyWage());

// uc6
function getRestrictedWage() {
  // setting initial values
  let monthlyPay = 0, workingHours = 0, workingDays = 0, monthDays = 0;

  // loop through 20 days of the month
  while (workingHours <= maxHours && monthDays <= maxDays) {
    monthDays += 1;
    let currentWorking = 0;
    const currentWorkingHours = Math.floor(Math.random() * 10) % 3;

    // calculate daily pay as per attendance
    switch (currentWorkingHours) {
      case 0: // working parttime
        currentWorking = parttime;
        workingHours += parttime;
        workingDays++;
        break;
      case 1: // working fulltime
        currentWorking = fulltime;
        workingHours += fulltime;
        workingDays++;
        break;
      default: // on leave
        break;
    }
    monthlyPay += currentWorking * dailyWage;

  }
  // return result
  return {
    monthlyPay,
    workingHours,
    workingDays
  }
}

const restrictedWage = getRestrictedWage();
console.log(`Monthly pay: ${restrictedWage.monthlyPay}\nWorking hours: ${restrictedWage.workingHours}/160\nWorking days: ${restrictedWage.workingDays}/20`);
