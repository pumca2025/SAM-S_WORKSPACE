class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def display(self):
        print(f"Hello {self.name} !!!!!!! ")
class Student(Person):
    def __init__(self,name,age,grade):
        super().__init__(name,age)
        self.grade=grade
        if(self.grade=='A+' or self.grade=='A'):
            self.msg='Keep Rocking....'
        elif(self.grade=='B+' or self.grade=='B'):
            self.msg='Good.... Long way to go....'
        elif(self.grade=='C+' or self.grade=='C'):
            self.msg="Need improvement...."
        elif(self.grade=='FAIL'):
            self.msg="Need to work very hard"
        else:
            self.msg=" "
    def display(self):
        super().display()
        print("--------------------------------------")
        print("Name  :",self.name)
        print("Age   :",self.age)
        print("Grade :",self.grade)
        print("Remarks :",self.msg)
name=input("Enter Your Name :")
age=int(input("Enter Your Age :"))
grade=input("Enter Your Grade :").upper()
stu1=Student(name,age,grade)
stu1.display()
