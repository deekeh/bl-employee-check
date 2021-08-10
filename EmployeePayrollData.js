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
