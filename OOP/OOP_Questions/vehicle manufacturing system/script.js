// 10. Factory Pattern
// Scenario: You are developing a vehicle manufacturing system where cars and bikes are created dynamically based on input.

// TODO:
// Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
// Based on the type, return either a Car or Bike instance.

// Example:
// const myCar = VehicleFactory.createVehicle("car", "Toyota", 2023);
// const myBike = VehicleFactory.createVehicle("bike", "Yamaha", 2022);

class Car{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
        this.type = 'Car';
    }

    print(){
        document.writeln(`${this.type} - brand: ${this.brand}, Year: ${this.year} <br>`);
    }
}

class Bike{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
        this.type = 'Bike';
    }

    print(){
        document.writeln(`${this.type} - brand: ${this.brand}, Year: ${this.year} <br>`);
    }
}

class VehicleFactory{
    createVehicle(type, brand, year){
        switch(type){
            case 'car': return new Car(brand, year);
            case 'bike': return new Bike(brand, year);
            default: document.writeln(`${type} is not a vehicle`);
        }
    }

    print(){
        document.writeln(this.brand);
        document.writeln(this.year);
    }
}

const vehicle_factory = new VehicleFactory();
const car = vehicle_factory.createVehicle('car', 'Toyota', 2023);
const bike = vehicle_factory.createVehicle("bike", "Yamaha", 2022);
car.print();
bike.print();