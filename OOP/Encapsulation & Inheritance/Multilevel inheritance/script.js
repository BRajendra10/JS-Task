// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

class Indian {
  adharNo;
  birthPlace;

  constructor(adharNo, birthPlace) {
    this.adharNo = adharNo;
    this.birthPlace = birthPlace;
  }

  output(){
    document.writeln(`Adhar No: ${this.adharNo} <br>`);
    document.writeln(`Birth Place: ${this.birthPlace} <br>`);
  }
}

class Person extends Indian {
  name;
  age;
  gender;

  constructor(name, age, gender, adharNo, birthPlace) {
    super(adharNo, birthPlace);
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  output(){
    document.writeln(`Name: ${this.name} <br>`);
    document.writeln(`Age: ${this.age} <br>`);
    super.output();
  }
}

class Employee extends Person{
  id;
  salary;
  role;

  constructor(name, age, gender, adharNo, birthPlace, id, salary, role) {
    super(name, age, gender, adharNo, birthPlace);
    this.id = id;
    this.salary = salary;
    this.role = role;
  }

  output(){
    super.output();
    document.writeln(`Id: ${this.id} <br>`);
    document.writeln(`salary: ${this.salary} <br>`);
    document.writeln(`roloe: ${this.role} <br> <br>`);
  }
}

const employee = new Employee('Rajendra', 18, 'Male', 299687846984, 'Odisha, India', 107, 300000, 'front-end developer');
employee.output();
