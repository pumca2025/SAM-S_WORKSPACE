class Student:
    def __init__(self,name,HSC,ugcourse):
        self.name=name
        self.hsc=HSC
        self.ugcourse=ugcourse
    def display(self):
        print("""Name      :""",self.name)
        print("""HSC %     :""",self.hsc)
        print("""UG Course :""",self.ugcourse)
class PGStudent(Student):
    def __init__(self,name,hsc,ugcourse,ugp,pgcourse):
        super().__init__(name,hsc,ugcourse)
        self.ugp=ugp
        self.pgcourse=pgcourse
    def display(self):
        super().display()
        print("""UG %      :""",self.ugp)
        print("""PG Course :""",self.pgcourse)
obj=PGStudent('Sam',95,'B.Sc Computer Science',80,'MCA')
print("PG Student")
print('-------------------------------------------------------\n')
obj.display()
print('-------------------------------------------------------\n')
obj1=Student('Sarath',88,'BCA')
print("UG Student")
print('-------------------------------------------------------\n')
obj1.display()
print('-------------------------------------------------------\n')        
