// 2. Inheritance (Tricky Question with All Types)
// Scenario: You are working on a vehicle rental system. Different types of vehicles share some common properties, but there are multiple levels and categories of vehicles.

// TODO:
// Create a Vehicle class with properties brand and year.
// Create a Car class that extends Vehicle and adds a fuelType property.
// Create a Bike class that extends Vehicle and adds a hasGear property.
// Add another class ElectricCar that extends Car and adds a batteryCapacity property.
// Implement a getDetails() method in Vehicle and override it in different subclasses.

class Vehicle{
    brand;
    engine;
    year;

    constructor(brand, engine, year){
        this.brand = brand;
        this.engine = engine;
        this.year = year;
    }

    output(){
        document.writeln(`Brand: ${this.brand} <br>`);
        document.writeln(`Engine: ${this.engine} <br>`);
        document.writeln(`Year: ${this.year} <br>`);
    }
}

class Car extends Vehicle{
    fuel;

    constructor(brand, engine, year, fuel){
        super(brand, engine, year);
        this.fuel = fuel;
    }

    output(){
        super.output();
        document.writeln(`Fuel Type: ${this.fuel} <br>`);
        document.writeln('<br>');
    }
}

class ElectricCar extends Vehicle{
    batteryCapacity;

    constructor(brand, engine, year, battery){
        super(brand, engine, year);
        this.batteryCapacity = battery;
    }

    output(){
        super.output();
        document.writeln(`Battery Capacity: ${this.batteryCapacity} <br>`);
        document.writeln('<br>');
    }
}

class Bike extends Vehicle{
    hasGear;

    constructor(brand, engine, year, hasGear){
        super(brand, engine, year);
        this.hasGear = hasGear;
    }

    output(){
        super.output();
        document.writeln(`has Gear: ${this.hasGear} <br>`);
        document.writeln('<br>');
    }
}

const car = new Car('Ford Mustang', 'v8', 1969, 'petrol');
const bike = new Bike('Harley Davidson', 'v9', 2025, true);
const electricCar = new ElectricCar('Tesla modal s', 'Elictric Motor', 2023, 100);

car.output();
bike.output();
electricCar.output();