# Base class
class Book:
    def __init__(self, title, author, price):
        self.title = title
        self.author = author
        self.price = price

    def display_info(self):
        print(f"Title: {self.title}")
        print(f"Author: {self.author}")
        print(f"Price: ₹{self.price}")


class EBook(Book):
    def __init__(self,title,author,price,fileSize,Type):
        super().__init__(title,author,price)
        self.fileSize=fileSize
        self.format=Type
    def display(self):
        super().display_info()
        print(f"FileSize : {self.fileSize}")
        print(f"Format   : {self.format}")

b1=Book("The Alchemist","Paulo Coelho",350)
b2=EBook("Python","Guido Van Rossum",500,2,"PDF")
print("Phyical Book ")
b1.display_info()
print("EBook Book ")
b2.display()
