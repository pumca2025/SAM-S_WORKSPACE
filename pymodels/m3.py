class Student:
    def display(self):
        print("""UG Courses :""")
        print("""
        1.B.Sc Computer Science
        2.BCA
        3.B.Sc Physics
        4.B.Sc Chemistry
        5.B.Sc Botany
        6.B.A English
        7.B.Com
""")
class PGStudent(Student):
    def display(self):
        print("""PG Courses :""")
        print("""
        1.M.Sc Computer Science
        2.MCA
        3.M.Sc Physics
        4.M.Sc Chemistry
        5.M.Sc Botany
        6.M.A English
        7.M.Com
""")
print("""
--------------------------------------------------------------
                 WELCOME TO PERIYAR UNIVERSITY
--------------------------------------------------------------
""")
name=input("""Enter Your Name              :""")
mobile=input("""Enter Your Mobile NUmber :""")
level=input("Enter the program type you wish to explore (UG/PG) :").lower()
if(level=='ug'):
    obj=Student()
elif(level=='pg'):
    obj=PGStudent()
obj.display()
