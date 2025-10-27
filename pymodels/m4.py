class Book:
    def __init__(self,name,author,price):
        self.name=name
        self.author=author
        self.price=price
    def display(self):
        print("Book Name :",self.name)
        print("Author :",self.author)
        print("Price :",self.price)
class EBook(Book):
    def __init__(self,name,author,price,fileSize):
        super().__init__(name,author,price)
        self.fileSize=fileSize
    def display(self):
        super().display()
        print("File Size :",self.fileSize)
obj=Book('Python Programming','Guido Van Rossum','3000')
obj.display()
obj1=EBook('Let Us C','Dennis Ritche and Ken Thompson','2500','300MB')
obj1.display()
