# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.


# Input: length,moral lessons,age group, 
# Process: datermine class, determine methods to achieve output
# Output: Stories being passed down from generation to generation,translation into different languages, oral stories

# from fnmatch import translate


# class AncestralStories:
#   def __init__(self,title,length,moral_lesson,age_group,content):
#     self.title = title
#     self.length = length
#     self.moral_lesson = moral_lesson
#     self.age_group = age_group
#     self.content = content
    
# class Stories(AncestralStories):
#   def __init__(self,title,length,moral_lesson,age_group,content):
#     super().__init__(length,title,moral_lesson,age_group,content)
    
#   def story_records(self):
#     return f"${self.title} is a book best suited for ${self.age_group},has ${self.length} pages and the moral lesson is ${self.moral_lesson}"
  
# class Translator(AncestralStories):
#   def __init__(self,title,length,moral_lesson,age_group,content ,language):
#     super().__init__(length,title,moral_lesson,age_group,content)
#     self.language = language
    
#   def translate(self ,story):
#     translated_content = translate(self.content, self.language)
#     translated_story = AncestralStories(self.title, translated_content, story.age_group)
#     return translated_story
  
# story = AncestralStories("Born a crime",346,"work hard","youth","Kingdomship")
# print(story)

# stories = Stories("Born a crime",346,"work hard","youth","Kingdomship")
# print(stories.story_records())

# translate = Translator("Born a crime",346,"work hard","youth","Kingdomship","kiswahili")
# print(translate.translate("The frog and the man"))
    
    
      
 
class Recipe:
   def __init__(self,name,preparation_time, cooking_method, nutritional_information) :
       self.name=name
       self.ingredients=[]
       self.preparation_time=preparation_time
       self.cooking_method=cooking_method
       self.nutritional_information=nutritional_information


  
class MoroccanRecipe(Recipe):
   def __init__(self, name, preparation_time, cooking_method, nutritional_information):
       super().__init__(name, preparation_time, cooking_method, nutritional_information)


   def display_properties(self):
       return f"The {self.name}recipe has the following ingredients:{self.ingredients}.It is rich in {self.nutritional_information},takes {self.preparation_time} to prepare and is cooked by {self.cooking_method}."
  
   def suggestCombination(self):
       return f"{self.name} best goes with milk."
   def checkSpicyness(self):
       if ("chillie" in self.ingredients):
           return f"{self.name} dish is spicy."
       else:
           return f"{self.name} dish is not spicy."
      
   def addingredients(self,ingredient):
      return self.ingredients.append(ingredient)


class EthiopianRecipe(Recipe):
   def __init__(self, name, preparation_time, cooking_method, nutritional_information):
       super().__init__(name, preparation_time, cooking_method, nutritional_information)


   def display_properties(self):
       return f"The {self.name}recipe has the following ingredients:{self.ingredients}.It is rich in {self.nutritional_information},takes {self.preparation_time} to prepare and is cooked by {self.cooking_method}."
  
   def suggestCombination(self):
       return f"{self.name} best goes with juice."
   def checkSpicyness(self):
       if ("chillie" in self.ingredients):
           return f"{self.name} dish is spicy."
       else:
           return f"{self.name} dish is not spicy."


   def addingredients(self,ingredient):
      return self.ingredients.append(ingredient)     




class NigerianRecipe(Recipe):
   def __init__(self, name, preparation_time, cooking_method, nutritional_information):
       super().__init__(name, preparation_time, cooking_method, nutritional_information)


   def display_properties(self):
       return f"The {self.name}recipe has the following ingredients:{self.ingredients}.It is rich in {self.nutritional_information},takes {self.preparation_time} to prepare and is cooked by {self.cooking_method}."
  
   def suggestCombination(self):
       return f"{self.name} best goes with juice."
   def checkSpicyness(self):
       if ("chillie" in self.ingredients):
           return f"{self.name} dish is spicy."
       else:
           return f"{self.name} dish is not spicy."


   def addingredients(self,ingredient):
      return self.ingredients.append(ingredient)
      


dish=MoroccanRecipe("Harira","20 minutes","boiling","calcium")  
print(dish.checkSpicyness()) 
print(dish.suggestCombination())
print(dish.addingredients("onions"))
print(dish.display_properties())
   

  
      
      
   
    
    
  
  
  

 
#    Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
#  Create multiple objects of the Product class and calculate their total values.

# input: name,price,quantity
# output: total value of the product
# process: class product, methods such as calculate total value


# class Product:
#     def __init__(self,name,price,quantity):
#         self.name=name
#         self.price=price
#         self.quantity=quantity
        
#     def calculateTotalValue(self):
#         value = self.price*self.quantity
#         return f"the value of {self.name} is {value}"


# product1= Product("sugar",200,5)
# product2=Product("book",50,6)
# product3= Product("rice",150,3)
# product4= Product("pencil",10,93)
# product5=Product("candy",20,17)
# product6=Product("rice",70,3)
# product7=Product("chewing gum",2,30)


# product1.calculateTotalValue()
# product2.calculateTotalValue()
# product3.calculateTotalValue()
# product4.calculateTotalValue()
# product5.calculateTotalValue()
# product6.calculateTotalValue()
# product7.calculateTotalValue()     



# **African Music Festival:** You're in charge of organizing a Pan-African music
#  festival. Many artists from different countries, each with their own musical style
#  and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
#  how you might use inheritance if there are different types of performances or
# stages.

# input: name,country,genre,capacity,musical Instruments, musical style
# output: management of schedules,stage arrangements
# process: determine classes and methods to use

# class Artist:
#     def __init__(self,name, country,genre,musicalStyle,instruments):
#       self.name = name
#       self.country = country
#       self.genre=genre
#       self.musicalStyle=musicalStyle
#       self.instruments=instruments
      
      
      
# artist1 = Artist("Elani", "Kenya","love songs")
# artist2 =  Artist("Imo", "South Sudan","pop")
# print (artist1)
# print (artist2)


# class Performance:
#     def __init__(self,artist, beginTime, endTime):
#       self.artist = artist
#       self.beginTime = beginTime
#       self.endTime = endTime

#     def perform(self):
#         return f"{self.artist} started performing at {self.beginTime} and finished at {self.endTime}"
   
# performance1 =  Performance("Grace", "11:06 pm", "3:20 am")
# performance2 =  Performance("Ariana", "11:06 am", "1:20 pm")
# print(performance1)
# print (performance2)
  
# class Stage:
#     def __init__(self,stageName, capacity):
#       self.stageName = stageName
#       self.capacity = capacity
#       self.performances = ""
    
#     def theStage(self):
#         return f"The performance took place in ${self.stageName} and had a capacity of ${self.capacity}"
    
  
#     def addPerformance(self,performance):
#       self.performances.append(performance)
    
  
#     def performanceSchedule(self):
        
        
# stage1 = Stage("Kasarani", 7000)
# stage1.theStage()
# stage1.addPerformance(performance1)
# stage1.addPerformance(performance2)
  
# print(stage1.performanceSchedule())



class Species:
    def __init__(self, name, diet, typical_lifespan):
        self.name = name
        self.diet = diet
        self.typical_lifespan = typical_lifespan
        self.migration_patterns = ''

    def calculate_mortality_age(self, birth_year):
        death_age = birth_year + self.typical_lifespan
        return death_age

    def get_diet(self):
        return f'{self.name} is a {self.diet}'

    def predict_migration(self, season):
        if season == "dry":
            self.migration_patterns = "Migration will occur"
            return self.migration_patterns
        elif season == "wet":
            self.migration_patterns = "No migration will occur"
            return self.migration_patterns
        else:
            return "Unable to predict migration"


class Predator(Species):
    def __init__(self, name, diet, typical_lifespan, migration_patterns):
        super().__init__(name, diet, typical_lifespan)
        self.migration_patterns = migration_patterns

    def calculate_mortality_age(self, birth_year):
        super().calculate_mortality_age(birth_year)

    def predict_migration(self, season):
        super().predict_migration(season)


class Prey(Species):
    def __init__(self, name, diet, typical_lifespan, migration_patterns):
        super().__init__(name, diet, typical_lifespan)
        self.migration_patterns = migration_patterns

    def calculate_mortality_age(self, birth_year):
        super().calculate_mortality_age(birth_year)

    def predict_migration(self, season):
        super().predict_migration(season)


species1 = Species("Lion", "carnivore", 8)
print(species1.get_diet())




# 6

class Student:
   def __init__(self, name, age, grades):
       self.name = name
       self.age = age
       self.grades = grades


   def calculate_average_grade(self):
       total_grades = sum(self.grades)
       mean = total_grades / len(self.grades)
       return mean


   def display_student_information(self):
       return f"Name: {self.name}\nAge: {self.age}\nGrades: {self.grades}"

   def has_passed(self):
       sum = 0
       for n in self.grades:
           sum += n
           mean = sum / len(self.grades)   
          

       if mean <= 60:
           return f"{self.name} has passed with {mean}"
       else:
           return f"{self.name} has passed not passed"


student1 = Student("John", 17, [60, 80, 90])
student2 = Student("Jane", 19, [80, 70, 30])


print(student1.calculate_average_grade())
print(student2.calculate_average_grade())
print(student2.display_student_information())
print(student2.has_passed())
print(student1.has_passed())



class Book:
    def __init__(self, title, author, year, copies=1):
        self.title = title
        self.author = author
        self.year = year
        self.copies = copies


class LibraryCatalog:
    def __init__(self):
        self.books = []

    def add_new_book(self, title, author, year):
        book = Book(title, author, year)
        self.books.append(book)

    def search_for_books(self, query):
        return [book for book in self.books if query.lower() in book.title.lower() or query.lower() in book.author.lower()]

    def keep_track_of_copies(self, title, action):
        book = next(book for book in self.books if book.title == title), None)
        if book:
            if action == "add":
                book.copies += 1
            elif action == "remove":
                if book.copies > 0:
                    book.copies -= 1
                else:
                    print("No copies of this book are currently available.")
        else:
            print("Book not found in the library catalog.")

    def display_book_details(self, title):
        book = next((book for book in self.books if book.title == title), None)
        if book:
            print(f"{book.title} is written by {book.author} and was published in {book.year}.")
            print(f"Available Copies: {book.copies}")
        else:
            print("Book not found in the library catalog.")


library = LibraryCatalog()

library.add_new_book("Born a crime", "Trevor Noah", 2004)
library.add_new_book("1984", "George Orwell", 1949)
library.add_new_book("The originals", "Adam Grant", 1925)

print(library.search_for_books("mockingbird"))

library.keep_track_of_copies("Beloved", "add")
library.keep_track_of_copies("Little Women", "add")
library.keep_track_of_copies("Little Women", "remove")

library.display_book_details("Little Women")


