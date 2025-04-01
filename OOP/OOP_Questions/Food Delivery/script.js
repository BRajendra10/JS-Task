// 5. Constructor & Object Creation
// Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.

// TODO:
// Create a Restaurant class with properties: name, cuisineType, and rating.
// Instantiate 3 restaurant objects with different values.

class Restaurant{
    name;
    cuisineType;
    rating;

    constructor(name, cuisineType, rating){
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }

    output(){
        document.writeln(`Restaurant: ${this.name} <br>`);
        document.writeln(`Cuisine: ${this.cuisineType} <br>`);
        document.writeln(`Rating: ${this.rating} <br> <br>`);
    }
}

const restaurant1 = new Restaurant('Pizza Hut', 'Italian', 4.5);
const restaurant2 = new Restaurant('Ramen', 'Japanese', 5.0);
const restaurant3 = new Restaurant("Tandoori Flame", "Indian", 4.8);

restaurant1.output();
restaurant2.output();
restaurant3.output();