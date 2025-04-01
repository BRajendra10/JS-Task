// 8. Composition (Object Inside Object - Clearer Explanation)
// Scenario: You are developing a company employee management system where each department has multiple employees.

// TODO:
// Create an Employee class with properties name and position.
// Create a Department class that contains an array of Employee objects.
// Implement a method in Department to return the names of all employees in that department.

// Example:
// let hr = new Department("HR");
// hr.addEmployee(new Employee("Alice", "Manager"));
// hr.addEmployee(new Employee("Bob", "Recruiter"));
// console.log(hr.listEmployees()); // Output: ["Alice", "Bob"]

class Employee{
    constructor(name, age, role){
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

class Department{
    Employees = [];
    addEmplyoee(name, age, role){
        let employee = new Employee(name, age, role);

        this.Employees.push(name);
    }

    EmployeeList(){
        for(let i of this.Employees){
            document.writeln(`${i} <br>`);
        }
    }
}

const department = new Department();
department.addEmplyoee('Rajendra', 18, 'Front-end developer');
department.addEmplyoee('Rohit', 19, 'Front-end developer');
department.addEmplyoee('Swapnil', 18, 'Front-end developer');

department.EmployeeList();
