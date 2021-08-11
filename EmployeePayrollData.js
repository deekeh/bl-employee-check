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
        super(...params.slice(0,3));
        this.gender = params[3];
        this.startDate = params[4];
        this.phone = params[5];
        this.mail = params[6];
    }

    get eGender() {
        return this.gender;
    }
    get eStartDate() {
        return this.startDate;
    }
    get eMail() {
        return this.mail;
    }
    get ePhone() {
        return this.phone;
    }

    set eGender(gender) {
        this.gender = gender;
    }
    set eStartDate(startDate) {
        this.startDate = startDate;
    }
    set eMail(mail) {
        this.mail = mail;
    }
    set ePhone(phone) {
        this.phone = phone;
    }

    checkEmployeeDetails() {
        const errors = [];
        const emailRegex = /^([a-zA-Z0-9]+[a-zA-Z0-9._]+[a-zA-Z0-9])(@)([a-zA-Z0-9]+)([.])([a-zA-Z]{2,})([.][a-zA-Z]{2,})*$/;
        const nameRegex = /^([A-Z][a-z]{2,})$/;
        const genderRegex = /^([mf]|male|female)$/;
        const phoneRegex = /^[9][1][ ][0-9]{10}$/;
        if (!nameRegex.test(this.name)) errors.push('name');
        if (!emailRegex.test(this.mail)) errors.push('email');
        if (!phoneRegex.test(this.phone)) errors.push('phone');
        if (!genderRegex.test(this.gender)) errors.push('gender');
        return errors.length===0 ? "Details verified successfully": new Error(`Errors found in ${errors}`);
    }
};

const niraj = new NewEmployeePayrollData(1, 'Niraj', 16_000, 'male', '20 Jul 2021', '91 9809099899', 'niraj@email.com');

niraj.eStartDate = '21 Jul 2021';

console.log('New Employee details:');
console.log(`Name: ${niraj.eName}, ID: ${niraj.eId}, Salary: ${niraj.eSalary}, Gender: ${niraj.eGender}, Start date: ${niraj.eStartDate}, Mail: ${niraj.eMail}, Phone: ${niraj.ePhone}`);

try {
    console.log(niraj.checkEmployeeDetails());
}
catch(err) {
    console.error(err);
}
