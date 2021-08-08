const {
  fullTime: fulltime,
  halfTime: parttime,
  maxHours,
  maxDays,
  dailyWage,
} = require('./data');

class Employee {
  constructor() {
    console.log("Welcome to Employee Wage Computation"); // uc1
    this.attendance = [];
  }

  get randomAttendance() {
    return Math.floor(Math.random() * 3);
  }

  // uc2 - checking attendance as per day [under construction]
  checkAttendance(day = this.attendance.length - 1) {
    if (day >= this.attendance.length) return false;
    this.attendance[day] ? 'present' : 'absent';
  }

  // uc3 - generate daily wage of an employee based on random attendance
  static generateRandomDailyWage() {
    let hrs = 0;
    let empCase = this.randomAttendance();

    switch (empCase) {
      case 0: // working parttime
        hrs = parttime;
        break;
      case 1: // working fulltime
        hrs = fulltime;
        break;
      default: // on leave
        hrs = 0;
        break;
    }

    return hrs * dailyWage;
  }

  // uc4 - generate monthly wage of an employee based on 20 random attendances
  generateRandomMonthlyWage() {
    // setting initial values
    let monthlyPay = 0, hrs;

    // looping for 20 days
    for (let day = 0; day < maxDays; day++) {
      let empCase = this.randomAttendance;
      this.attendance.push(empCase);
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
    // console.log("Attendance:", this.attendance);
    // UNCOMMENT THE ABOVE LINE (67) TO PRINT THE ARRAY OF ATTENDANCE
    // 0 - PARTTIME
    // 1 - FULLTIME
    // 2 - LEAVE
    return monthlyPay;
  }

  getRestrictedWage() {
    this.generateRandomMonthlyWage();
    // setting initial values
    let monthlyPay = 0, workingHours = 0, workingDays = 0, monthDays = 0;

    // loop through 20 days of the month
    for (let a of this.attendance) {
      if (workingHours > maxHours && monthDays > maxDays) break;

      monthDays += 1;
      let currentWorking = 0;
      const currentWorkingHours = a;

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
}

const dk = new Employee();

const restrictedWage = dk.getRestrictedWage();
console.log(`Monthly pay: ${restrictedWage.monthlyPay}\nWorking hours: ${restrictedWage.workingHours}/160\nWorking days: ${restrictedWage.workingDays}/20`);
