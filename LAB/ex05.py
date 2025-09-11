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


# Derived class for Technical Books
class TechnicalBook(Book):
    def __init__(self, title, author, price, subject):
        super().__init__(title, author, price)
        self.subject = subject

    def display_info(self):
        super().display_info()
        print(f"Category: Technical")
        print(f"Subject: {self.subject}\n")


# Derived class for Story Books
class StoryBook(Book):
    def __init__(self, title, author, price, age_group):
        super().__init__(title, author, price)
        self.age_group = age_group

    def display_info(self):
        super().display_info()
        print(f"Category: Story")
        print(f"Recommended Age Group: {self.age_group}\n")


# Derived class for Novels
class Novel(Book):
    def __init__(self, title, author, price, genre):
        super().__init__(title, author, price)
        self.genre = genre

    def display_info(self):
        super().display_info()
        print(f"Category: Novel")
        print(f"Genre: {self.genre}\n")


# ---- Example Usage ----
tech = TechnicalBook("Python Programming", "Guido van Rossum", 550, "Computer Science")
story = StoryBook("The Jungle Book", "Rudyard Kipling", 300, "Children")
novel = Novel("Pride and Prejudice", "Jane Austen", 450, "Romantic Fiction")

tech.display_info()
story.display_info()
novel.display_info()
