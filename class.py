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

class Ancestral_Stories:
    def __init__(self):
        
 
 
 
 
 
#    Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
#  Create multiple objects of the Product class and calculate their total values.

# input: name,price,quantity
# output: total value of the product
# process: class product, methods such as calculate total value


class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity
        
    def calculateTotalValue(self):
        value = self.price*self.quantity
        return f"the value of {self.name} is {value}"


product1= Product("sugar",200,5)
product2=Product("book",50,6)
product3= Product("rice",150,3)
product4= Product("pencil",10,93)
product5=Product("candy",20,17)
product6=Product("rice",70,3)
product7=Product("chewing gum",2,30)


product1.calculateTotalValue()
product2.calculateTotalValue()
product3.calculateTotalValue()
product4.calculateTotalValue()
product5.calculateTotalValue()
product6.calculateTotalValue()
product7.calculateTotalValue()     



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

class Artist:
    def __init__(self,name, country,genre,musicalStyle,instruments):
      self.name = name
      self.country = country
      self.genre=genre
      self.musicalStyle=musicalStyle
      self.instruments=instruments
      
      
      
artist1 = Artist("Elani", "Kenya","love songs")
artist2 =  Artist("Imo", "South Sudan","pop")
print (artist1)
print (artist2)


class Performance:
    def __init__(self,artist, beginTime, endTime):
      self.artist = artist
      self.beginTime = beginTime
      self.endTime = endTime

    def perform(self):
        return f"{self.artist} started performing at {self.beginTime} and finished at {self.endTime}")
   
performance1 =  Performance("Grace", "11:06 pm", "3:20 am")
performance2 =  Performance("Ariana", "11:06 am", "1:20 pm")
print(performance1)
print (performance2)
  
class Stage:
    def __init__(self,stageName, capacity):
      self.stageName = stageName
      self.capacity = capacity
      self.performances = ""
    
    def theStage(self):
        return f"The performance took place in ${self.stageName} and had a capacity of ${self.capacity}"
    
  
    def addPerformance(self,performance):
      self.performances.append(performance)
    
  
    def performanceSchedule(self):
        
        
stage1 = Stage("Kasarani", 7000)
stage1.theStage()
stage1.addPerformance(performance1)
stage1.addPerformance(performance2)
  
print(stage1.performanceSchedule())