function Person(name) {
    this.name = name;
    this.saysHI = function() {
        console.log(this.name + " says hi")
    }
}

function Employee(name, role, salary) {
    this.role = role;
    // this.salary = salary;
    let _salary = salary;


    // GETTERS(recuperar) AND SETTERS(atribuir)

    this.getSalary = function() {
        return _salary;
    }

    this.setSalary = function(value) {
        if (typeof value === 'number') {
            _salary = value;
        }
    }

    this.raise = function() {
        const newSalary = _salary * 1.1;
        _salary = newSalary;
    }
    
    this.showRole = function() {
        console.log(this.role)
    } 
    
    Person.call(this, name);
}

function Intern(name) {
    Employee.call(this, name, "Intern", 2000)

    this.raise = function() {
        const newSalary = this.getSalary() * 1.07;
        this.setSalary(newSalary);
    }
    
}


function Manager(name) {
    Employee.call(this, name, "Manager", 10000);

    this.raise = function() {
        const newSalary = this.getSalary() * 1.15;
        this.setSalary(newSalary);
    }
    
}


const employee1 = new Employee("Sabrina", "UX/UI Designer", 4000);
const employee2 = new Intern("Felipe");
const employee3 = new Manager("John");

employee1.raise();
console.log(employee1.getSalary());

employee2.raise();
console.log(employee2.getSalary());

employee3.raise();
console.log(employee3.getSalary());