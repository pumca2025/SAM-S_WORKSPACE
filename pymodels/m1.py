class Student:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def display(self):
        print(self.name)
        print(self.age)
class UGStudent(Student):
    def __init__(self,name,age,grade):
        super().__init__(name,age)
        self.grade=grade
        if self.grade in ['A','A+']:
            self.remarks="Great Keep it up"
        elif self.grade in ['B','B+']:
            self.remarks="Good but try to get more marks"
        elif self.grade in ['Fail']:
            self.remarks="Try Hard  Mandaila irukura masala va use pannu da maramanda!!!!... "
    def display(self):
        super().display()
        print(self.grade)
        print(self.remarks)
print("Enter the student details")
name=input("Enter student's name :")
age=int(input("Enter student's age :"))
grade=input("Enter student's grade :")
obj=UGStudent(name,age,grade)
obj.display()
        
