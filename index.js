console.log("Welcome to Employee Wage Computation"); // uc1

// uc2
let empchk = Math.floor(Math.random() * 10) % 2;
if (empchk) console.log("employee is present");
else console.log("employee is absent");

// uc3
const fulltime = 8, parttime = 4;
let hrs;
let empCase = Math.floor(Math.random() * 10) % 2;

switch (empCase) {
  case 0:
    hrs = parttime;
    break;
  case 1:
    hrs = fulltime;
    break;
}

console.log("Employee wage:", hrs*20);
