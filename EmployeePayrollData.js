const EmployeePayrollData = class {
    constructor(id=0, name='User', salary=0) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get eId() {
        return this.id;
    }
    get eName() {
        return this.name;
    }
    get eSalary() {
        return this.salary;
    }

    set eName(name) {
        this.name = name;
    }
    set eSalary(salary) {
        this.salary = salary;
    }
};

const dk = new EmployeePayrollData(0, 'Aditya', 15_000);

dk.eName = 'Aditya Uphade';
dk.eSalary = 17_000;

console.log('Employee details:');
console.log(`Name: ${dk.eName}, ID: ${dk.eId}, Salary: ${dk.eSalary}`);

console.log('\n----- extended employee data -----\n');

const NewEmployeePayrollData = class extends EmployeePayrollData {
    // constructor(id=0, name='User', salary=0, gender='female', startDate='10 Aug 2021') {
    constructor(...params) {
        super(...params.slice(0,2));
        this.gender = params[3];
        this.startDate = params[4];
    }

    get eGender() {
        return this.gender;
    }
    get eStartDate() {
        return this.startDate;
    }

    set eGender(gender) {
        this.gender = gender;
    }
    set eStartDate(startDate) {
        this.startDate = startDate;
    }
};

const niraj = new NewEmployeePayrollData(1, 'Niraj', 16_000, 'male', '20 Jul 2021');

niraj.eStartDate = '21 Jul 2021';

console.log('New Employee details:');
console.log(`Name: ${niraj.eName}, ID: ${niraj.eId}, Salary: ${niraj.eSalary}, Gender: ${niraj.eGender}, Start date: ${niraj.eStartDate}`);
