// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.





//Input: length,moral lessons,age group, 
//Process: datermine class, determine methods to achieve output
//Output: Stories being passed down from generation to generation,translation into different languages, oral stories

class Story {
  constructor(name, length, moralLessons, ageGroup, language) {
      this.name = name;
      this.length = length;
      this.moralLessons = moralLessons;
      this.ageGroup = ageGroup;
      this.language = language;
  }

  displayProperties() {
      return `Story name: ${this.name}, Story length: ${this.length}, Language: ${this.language}, Age Group: ${this.ageGroup.join('-')} and Moral lessons: ${this.moralLessons}`;
  }
}

class StoryTeller extends Story {
  constructor(length, moralLessons, ageGroup) {
      super('', length, moralLessons, ageGroup, '');
      this.length = length;
      this.moralLessons = moralLessons;
      this.ageGroup = ageGroup;
  }

  isAppropriate(age) {
      if (age >= this.ageGroup[0] && age <= this.ageGroup[1]) {
          return "Is appropriate to hear";
      } else {
          return "Inappropriate to hear";
      }
  }

  gaugeAttentionSpan(maxLength) {
      if (maxLength >= this.length) {
          return "The audience can be attentive throughout the story";
      } else {
          return "The audience will get bored";
      }
  }

  appropriateMoralLesson(lesson) {
      if (lesson === this.moralLessons) {
          return "Is appropriate to hear";
      } else {
          return "Inappropriate to hear";
      }
  }
}

class Translator extends Story {
  constructor(name, length, moralLessons, ageGroup, language) {
    super(name, length, moralLessons, ageGroup, language);
  }

  translateStory(audienceLanguage) {
      if (audienceLanguage !== this.language) {
          return "Translate story";
      } else {
          return "No need to translate";
      }
  }
}

let story1 = new Story("Blood", 400, "sex education", [14, 18], "English");
console.log(story1.displayProperties());

let person1 = new StoryTeller(200, "religion", [5, 10]);
console.log(person1.appropriateMoralLesson("patience"));
console.log(person1.isAppropriate(17));
console.log(person1.gaugeAttentionSpan(300));

let audience1 = new Translator("Kiluhya");
console.log(audience1.translateStory("French"));



// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.



// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to create classes
// to model species,predator,prey etc and think about how these classes might relate to each other via inheritance

// input: name,diet,lifespan of the animal
// output:hunting migration
// process: determine classes 

class Species {
  constructor(name, diet, typicalLifespan) {
    this.name = name;
    this.diet = diet;
    this.typicalLifespan = typicalLifespan;
  }

  calculateMortalityYear(birthYear) {
    const mortalityYear = birthYear + this.typicalLifespan;
    return mortalityYear;
  }

  getDiet() {
    return `${this.name} is a ${this.diet}.`;
  }

  displayInfo() {
    console.log(`Species: ${this.name}`);
    console.log(`Diet: ${this.diet}`);
    console.log(`Typical Lifespan: ${this.typicalLifespan} years`);
  }
}

class Predator extends Species {
  constructor(name, diet, lifespan, huntingMethod) {
    super(name, diet, lifespan);
    this.huntingMethod = huntingMethod;
  }



  predictMigration(season) {
    if (season === 'dry') {
      return 'Migration will occur.';
    } else if (season === 'wet') {
      return 'No migration will occur.';
    } else {
      return 'Unable to predict migration.';
    }
  }

  displayInfo() {
    console.log('--- Predator ---');
    console.log(`Species: ${this.name}`);
    console.log(`Diet: ${this.diet}`);
    console.log(`Typical Lifespan: ${this.typicalLifespan} years`);
    console.log(`Migration Patterns: ${this.migrationPatterns}`);
  }
}

class Prey extends Species {
  constructor(name, diet, lifespan, migrationPattern) {
    super(name, diet, lifespan);
    this.migrationPattern = migrationPattern;
  }

  predictMigration(season) {
    if (season === 'wet') {
      return 'No migration will occur.';
    } else if (season === 'dry') {
      return 'Migration will occur.';
    } else {
      return 'Unable to predict migration.';
    }
  }

  displayInfo() {
    console.log('--- Prey ---');
    console.log(`Species: ${this.name}`);
    console.log(`Diet: ${this.diet}`);
    console.log(`Typical Lifespan: ${this.typicalLifespan} years`);
    console.log(`Migration Patterns: ${this.migrationPatterns}`);
  }
}

const lion = new Predator('Lion', 'carnivore', 10, 'Seasonal migration');
lion.displayInfo();
console.log(lion.predictMigration('dry'));
console.log(`Mortality Year: ${lion.calculateMortalityYear(2010)}`);

const zebra = new Prey('Zebra', 'herbivore', 20, 'No migration');
zebra.displayInfo();
console.log(zebra.predictMigration('wet'));
console.log(`Mortality Year: ${zebra.calculateMortalityYear(2015)}`);


// class Species {
//   constructor(name, diet, typical_lifespan) {
//     this.name = name;
//     this.diet = diet;
//     this.typical_lifespan = typical_lifespan;
//     this.migration_patterns = '';
//   }

//   calculate_mortality_age(birth_year) {
//     const death_age = birth_year + this.typical_lifespan;
//     return death_age;
//   }

//   predict_migration(season) {
//     if (season === 'dry') {
//       this.migration_patterns = 'Migration will occur';
//       return this.migration_patterns;
//     } else if (season === 'wet') {
//       this.migration_patterns = 'No migration will occur';
//       return this.migration_patterns;
//     } else {
//       return 'Unable to predict migration';
//     }
//   }

//   is_extinct() {
//     const current_year = new Date().getFullYear();
//     const expected_extinction_year = this.calculate_mortality_age(current_year);
//     if (expected_extinction_year <= current_year) {
//       return `${this.name} is extinct.`;
//     } else {
//       return `${this.name} is not extinct.`;
//     }
//   }
// }

// class Predator extends Species {
//   constructor(name, diet, typical_lifespan, migration_patterns) {
//     super(name, diet, typical_lifespan);
//     this.migration_patterns = migration_patterns;
//   }

//   calculate_mortality_age(birth_year) {
//     super.calculate_mortality_age(birth_year);
//   }

//   predict_migration(season) {
//     super.predict_migration(season);
//   }
// }

// class Prey extends Species {
//   constructor(name, diet, typical_lifespan, migration_patterns) {
//     super(name, diet, typical_lifespan);
//     this.migration_patterns = migration_patterns;
//   }

//   calculate_mortality_age(birth_year) {
//     super.calculate_mortality_age(birth_year);
//   }

//   predict_migration(season) {
//     super.predict_migration(season);
//   }
// }

// const species1 = new Species('Lion', 'carnivore', 8);
// console.log(species1.is_extinct());

// const predator1 = new Predator('Tiger', 'carnivore', 10, 'No migration');
// console.log(predator1.is_extinct());
// console.log(predator1.calculate_mortality_age());
// console.log(predator1.predict_migration("wet"));

// const prey1 = new Prey('Deer', 'herbivore', 5, 'No migration');
// console.log(prey1.is_extinct());



  

// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

//input: name,country,genre,capacity,musical Instruments, musical style
//output: management of schedules,stage arrangements
//process: determine classes and methods to use

// class Artist {
//     constructor(name, country,genre,musicalStyle,instruments) {
//       this.name = name;
//       this.country = country;
//       this.genre=genre;
//       this.musicalStyle=musicalStyle;
//       this.instruments=instruments;
//     }
//   }
  
//   const artist1 = new Artist("Elani", "Kenya","love songs");
//   const artist2 = new Artist("Imo", "South Sudan","pop");
//   console.log(artist1);
//   console.log(artist2);

//   class Performance {
//     constructor(artist, beginTime, endTime) {
//       this.artist = artist;
//       this.beginTime = beginTime;
//       this.endTime = endTime;
//     }
//     perform(){
//         console.log(`${this.artist} started performing at ${this.beginTime} and finished at ${this.endTime}`);
//     }
//   }

//   const performance1 = new Performance("Grace", "11:06 pm", "3:20 am");
//   const performance2 = new Performance("Ariana", "11:06 am", "1:20 pm");
//   console.log(performance1);
//   console.log(performance2);
  
//   class Stage {
//     constructor(stageName, capacity) {
//       this.stageName = stageName;
//       this.capacity = capacity;
//       this.performances = [];
//     }
//     theStage(){
//         console.log(`The performance took place in ${this.stageName} and had a capacity of ${this.capacity}"`);
//     }
  
//     addPerformance(performance) {
//       this.performances.push(performance);
//     }
  
//     performanceSchedule() {
//       return this.performances.sort((x, y) => x.beginTime - y.beginTime);
//     }
//   }
  
//   const stage1 = new Stage("Kasarani", 7000);
//   stage1.theStage()
//   stage1.addPerformance(performance1);
//   stage1.addPerformance(performance2);
  
//   console.log(stage1.performanceSchedule());
  




class Artist {
  constructor(country, name, musicalStyle, instruments) {
    this.country = country;
    this.name = name;
    this.musicalStyle = musicalStyle;
    this.instruments = instruments;
  }

  displayArtist() {
    return `Artist Name: ${this.name}, Country: ${this.country}, Musical style: ${this.musicalStyle}`;
  }
}

class Performance extends Artist {
  constructor(country, name, musicalStyle, instruments) {
    super(country, name, musicalStyle, instruments);
  }

  listsMusician() {
    return `${this.name} plays this kind of music: ${this.musicalStyle}`;
  }

  performanceByMusic() {
    if (this.musicalStyle === "rocky") {
      return `${this.name} will perform last`;
    } else {
      return `${this.name} will perform in the early hours`;
    }
  }
}

class Stage extends Artist {
  constructor(country, name, musicalStyle, instruments, capacity) {
    super(country, name, musicalStyle, instruments);
    this.capacity = capacity;
  }

  stageCapacity(capa) {
    if (capa < this.capacity) {
      return 'The stage is yet to get full';
    } else if (capa === this.capacity) {
      return 'The stage is at its full capacity';
    } else {
      return 'The stage is beyond its capacity';
    }
  }

  findCompatibleStyles(instrument) {
    const styles = {
      guitar: ["Rock", "Blues", "Jazz", "Pop"],
      piano: ["Classical", "Jazz", "Pop", "R&B"],
      drums: ["Rock", "Pop", "Metal", "Funk"],
      violin: ["Classical", "Baroque", "Folk", "Jazz"],
      saxophone: ["Jazz", "Blues", "Funk", "R&B"]
    };

    if (instrument in styles) {
      return styles[instrument];
    } else {
      return [];
    }
  }
}

const artist1 = new Artist("Kenya", "Nikita", "R&b", ["Guitar","Violin","Piano"]);
const performance1 = new Performance("Morocco", "Ahmed", "rocky", ["Guitar","Violin","Piano"])
const stage1 = new Stage("Nigeria", "Lagos Stadium", "Afro-beats", ["Guitar"], 1000);


stage1.displayArtist();                                          
console.log(stage1.stageCapacity(800));                           
console.log(stage1.findCompatibleStyles("guitar"));               
console.log(stage1.findCompatibleStyles("violin")); 
console.log(performance1.performanceByMusic());              
  




 

//   Create a class called Product with attributes for name, price, and quantity.
//   Implement a method to calculate the total value of the product (price * quantity).
//   Create multiple objects of the Product class and calculate their total values.

//input: name,price,quantity
//output: total value of the product
//process: class product, methods such as calculate total value

class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;

    }
    calculateTotalValue(){
        let value = this.price*this.quantity;
        console.log(`the value of ${this.name} is ${value}`);
    }
}

product1=new Product("sugar",200,5);
product2=new Product("book",50,6);
product3=new Product("rice",150,3);
product4=new Product("pencil",10,93);
product5=new Product("candy",20,17);
product6=new Product("rice",70,3);
product7=new Product("chewing gum",2,30);


product1.calculateTotalValue();
product2.calculateTotalValue();
product3.calculateTotalValue();
product4.calculateTotalValue();
product5.calculateTotalValue();
product6.calculateTotalValue();
product7.calculateTotalValue();




// 6
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverageGrade() {
    const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
    const mean = totalGrades / this.grades.length;
    return mean;
  }

  displayStudentInformation() {
    return `Name: ${this.name}, Age: ${this.age}, Grades: ${this.grades}`;
  }

  hasPassed() {
    const mean = this.calculateAverageGrade();

    if (mean <= 60) {
      return `${this.name} has passed with ${mean}`;
    } else {
      return `${this.name} has not passed`;
    }
  }
}

const student1 = new Student("Janet", 17, [60, 80, 90]);
const student2 = new Student("Anna", 19, [80, 70, 30]);

console.log(student1.calculateAverageGrade());
console.log(student2.calculateAverageGrade());
console.log(student2.displayStudentInformation());
console.log(student2.hasPassed());
console.log(student1.hasPassed());











// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

//input:
//output:
// process: determine class 



// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

//input: number of books, category, titles
//process: determine class,determine methods
//output:add new books,search for books,keep track of available copies,diplay book details







class LibraryCatalog {
  constructor() {
    this.books = [];
  }

  addNewBook(title, author, year) {
    const book = {
      title: title,
      author: author,
      year: year,
      copies: 1,
    };

    this.books.push(book);
  }

  searchForBooks(query) {
    const results = this.books.filter((x) => {
      return (
        x.title.toLowerCase().includes(query.toLowerCase()) ||
        x.author.toLowerCase().includes(query.toLowerCase())
      );
    });

    return results;
  }

  keepTrackOfCopies(title, action) {
    const book = this.books.find((book) => book.title === title);

    if (book) {
      if (action === "add") {
        book.copies++;
      } else if (action === "remove") {
        if (book.copies > 0) {
          book.copies--;
        } else {
          console.log("No copies of this book are currently available.");
        }
      }
    } else {
      console.log("Book not found in the library catalog.");
    }
  }

  displayBookDetails(title) {
    const book = this.books.find((book) => book.title === title);

    if (book) {
      console.log(
        `${book.title} is written by ${book.author} and was published in ${book.year}.`
      );
      console.log(`Available Copies: ${book.copies}`);
    } else {
      console.log("Book not found in the library catalog.");
    }
  }
}


const library = new LibraryCatalog();

library.addNewBook("To Kill a Mockingbird", "Harper Lee", 1960);
library.addNewBook("1984", "George Orwell", 1949);
library.addNewBook("The originals", "Adam Grant", 1925);

console.log(library.searchForBooks("mockingbird"));

library.keepTrackOfCopies("To Kill a Mockingbird", "add");
library.keepTrackOfCopies("To Kill a Mockingbird", "add");
library.keepTrackOfCopies("To Kill a Mockingbird", "remove");

library.displayBookDetails("To Kill a Mockingbird");





// class FlightBooking {
//   constructor() {
//     this.flights = [];
//   }

//   searchFlights(destination, date) {
//     return this.flights.filter(flight => flight.destination === destination && flight.date === date);
//   }

//   reserveSeats(flightNumber, customerName, numSeats) {
//     const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
//     if (!flight) {
//       throw new Error("Flight not found.");
//     }

//     if (flight.availableSeats >= numSeats) {
//       flight.availableSeats -= numSeats;
//       flight.passengers.push({ name: customerName, seats: numSeats });
//       return true;
//     }

//     return false;
//   }

//   addFlight(flightNumber, destination, date, totalSeats) {
//     this.flights.push({
//       flightNumber,
//       destination,
//       date,
//       totalSeats,
//       availableSeats: totalSeats,
//       passengers: []
//     });
//   }

//   getBookingConfirmation(flightNumber, customerName) {
//     const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
//     if (!flight) {
//       throw new Error("Flight not found.");
//     }

//     const passenger = flight.passengers.find(passenger => passenger.name === customerName);
//     if (!passenger) {
//       throw new Error("Passenger not found.");
//     }

//     return {
//       flightNumber: flight.flightNumber,
//       destination: flight.destination,
//       date: flight.date,
//       customerName: passenger.name,
//       bookedSeats: passenger.seats
//     };
//   }
// }

// const flightBooking = new FlightBooking();
// flightBooking.addFlight("ABC123", "Singapore", "2023-07-10", 100);
// flightBooking.addFlight("XYZ456", "Italy", "2023-08-15", 150);
// console.log(flightBooking.searchFlights("New York", "2023-07-10"));
// console.log(flightBooking.reserveSeats("ABC123", "Anna Monroe", 2));
// console.log(flightBooking.getBookingConfirmation("ABC123", "Chris Daniels"));





