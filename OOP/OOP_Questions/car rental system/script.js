// 4. Abstraction (Hiding Implementation Details)
// Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.

// TODO:
// Create an abstract Car class with a method startEngine().
// Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.

class Car{
    constructor(brand){
        if(this.constructor === Car){
            document.writeln('StartEngine must be implement by child classes(car, bike).');
        }

        this.brand = brand;
    }
}

class PetrolCar extends Car{
    startEngine(){
        document.writeln(`${this.brand} enigen is starting by petrol Car <br>`);
    }
}

class ElectricCar extends Car{
    startEngine(){
        document.writeln(`${this.brand} enigen is starting by elictric Car <br>`);
    }
}

const petrolCar = new PetrolCar('Toyota');
const elictricCar = new ElectricCar('Tesla');

petrolCar.startEngine();
elictricCar.startEngine();