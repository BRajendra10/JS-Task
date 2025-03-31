// 6. Static Methods & Properties
// Scenario: You are building a movie rating system where users can rate movies. The system should also track the total number of ratings given.

// TODO:
// Create a Movie class with properties: title and ratings (array).
// Add a static property totalRatingsCount.
// Implement a method addRating(rating) that updates both instance ratings and the static count.

class Movie{
    totalRatings = [];
    totalRatingCount;

    addRating(title, rating){
        this.title = title;
        this.rating = rating;
        this.totalRatings.push([title, rating]);
        this.totalRatingCount = this.totalRatings.length;
    }

    output(){
        for(let i  of this.totalRatings){
            document.writeln(`Movie: ${i[0]} <br>`);
            document.writeln(`Rating: ${i[1]} <br> <br>`);
        }

        document.writeln(`Total Rating Count: ${this.totalRatingCount} <br>`);
    }
}

const movie = new Movie();

movie.addRating('transporters2', 8.9);
movie.addRating('Titanic', 9.9);

movie.output();
