#polymorphism
class LandAnimal:
    def __init__(self,name):
        self.name=name
    def display(self):
        print(f"{self.name} lives on land ")
        return ""
class Aquatic:
    def __init__(self,name):
        self.name=name
    def display(self):
        print(f"{self.name} lives in Water ")
        return ""
class Amphibians:
    def __init__(self,name):
        self.name=name
    def display(self):
        print(f"{self.name} lives on both land and water ")
        return ""
class Arboreal:
    def __init__(self,name):
        self.name=name
    def display(self):
        print(f"{self.name} lives on Trees ")
        return ""
class Aerial:
    def __init__(self,name):
        self.name=name
    def display(self):
        print(f"{self.name} Flies in air ")
        return ""
a1=LandAnimal("Lion")
a2=Aquatic("Shark")
a3=Amphibians("Aligator")
a4=Arboreal("Monkeys")
a5=Aerial("Humming Bird")
l=[a1,a2,a3,a4,a5]
for i in l:
    print(i.display())


