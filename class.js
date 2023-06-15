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

class AncestralStrories{
    constructor(length,moralLesson,ageGroup,language){
        this.length=length;
        this.moralLesson=moralLesson;
        this.ageGroup=ageGroup;
        this.language=language;

    }
    story(story){
        console.log(`The Story in of length ${this.length} appropriate for ${this.ageGroup} of ${this.language} language and the moral lesso is ${this.moralLesson}`);
        
    }
    storyTeller(){


    }
    translator(story, language){
        if(story!=language){
            console.log(`translate into ${this.language}`);
        }
        else{
            console.log(`{story} is in ${this.language}`);
        }
    }
}


class Story extends AncestralStrories{
    constructor(length,moralLesson,ageGroup,language){
        super(length,moralLesson,ageGroup,language);
    }
}


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
    constructor(name, diet, lifespan,migration) {
      this.name = name;
      this.diet = diet;
      this.lifespan = lifespan;
      this.migration=migration;
    }
  }
  
  class Predator extends Species {
    constructor(name, diet, lifespan, huntingMethod) {
      super(name, diet, lifespan);
      this.huntingMethod = huntingMethod;
    }
  
    hunt(prey) {
      console.log(`${this.name} is hunting ${prey.name}`);
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, lifespan, migrationPattern) {
      super(name, diet, lifespan);
      this.migrationPattern = migrationPattern;
    }
  
    migrate() {
      console.log(`${this.name} is migrating`);
    }
  }
  
  const lion = new Predator("Tiger", "Carnivore", 10, "Stalking");
  const zebra = new Prey("Zebra", "Herbivore", 20, "Seasonal");
  
  lion.hunt(zebra);
  zebra.migrate();
  

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

class Artist {
    constructor(name, country,genre,musicalStyle,instruments) {
      this.name = name;
      this.country = country;
      this.genre=genre;
      this.musicalStyle=musicalStyle;
      this.instruments=instruments;
    }
  }
  

  const artist1 = new Artist("Elani", "Kenya","love songs");
  const artist2 = new Artist("Imo", "South Sudan","pop");
  console.log(artist1);
  console.log(artist2);


  class Performance {
    constructor(artist, beginTime, endTime) {
      this.artist = artist;
      this.beginTime = beginTime;
      this.endTime = endTime;
    }
    perform(){
        console.log(`${this.artist} started performing at ${this.beginTime} and finished at ${this.endTime}`);
    }
  }

  const performance1 = new Performance("Grace", "11:06 pm", "3:20 am");
  const performance2 = new Performance("Ariana", "11:06 am", "1:20 pm");
  console.log(performance1);
  console.log(performance2);
  
  class Stage {
    constructor(stageName, capacity) {
      this.stageName = stageName;
      this.capacity = capacity;
      this.performances = [];
    }
    theStage(){
        console.log(`The performance took place in ${this.stageName} and had a capacity of ${this.capacity}"`);
    }
  
    addPerformance(performance) {
      this.performances.push(performance);
    }
  
    performanceSchedule() {
      return this.performances.sort((x, y) => x.beginTime - y.beginTime);
    }
  }
  
  const stage1 = new Stage("Kasarani", 7000);
  stage1.theStage()
  stage1.addPerformance(performance1);
  stage1.addPerformance(performance2);
  
  console.log(stage1.performanceSchedule());
  

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











// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

//input:
//output:
// process:






// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

//input: number of books, category, titles
//process: determine class,determine methods
//output:add new books,search for books,keep track of available copies,diplay book details


class LibraryCatalog{
    constructor(numberOfBooks,categories,titles,author,year){

        this.numberOfBooks=numberOfBooks;
        this.categories=categories;
        this.titles=titles;
        this.author=author;
        this.year=year;
        this.books=[];

    }
    addNewBooks(book){
        this.books.push(book);

    }
    searchForBooks(){


    }
    keepTrackOfCopies(){


    }
    diplayBookDetails(){
        console.log(`${this.title} is written by ${this.author}  and was published in the year ${this.year}`);

    }


}

library=new LibraryCatalog(234,13,)