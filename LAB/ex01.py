print("Student Record")
studentName=input("Enter Student Name :")
registerNumber=input("Enter Register Number :")
marks=[] #list
grades=("First Class With Distinction ","First Class","Second Class") #tuple
studentRecord={} #dictionary
n=int(input("Enter the number of Subjects :"))
for i in range(n):
    sub=input("Enter Subject Name :")
    mark=(float(input(f"Enter {sub}  Mark  :")))
    marks.append(mark)
    studentRecord[sub]=mark
total=sum(marks)
avg=total/n
print("\nResult\n")
print("StudentName     : ",studentName)
print("Register Number :",registerNumber)
print("-------------------------------------------------------------------------------------------------------")
print("Subject \t\t\t\t\t\t Marks \t\t Result")
print("-------------------------------------------------------------------------------------------------------")
f=0
for i in studentRecord:
    res=""
    if(studentRecord[i]>=50):
        res="Pass"
    else:
        res="Re-Appear"
        f=f+1
    print(i.ljust(40),"\t\t",studentRecord[i],"\t\t",res)
print("\n")
if(f>0):
    print("You have Failed in this examination")
    print("No of Subjects passed:",n-f)
    print("No of Subjects Failed:",f)
else:
    print("Congradulations You have cleared all the subjects  this Examination ")
    print("Total \t:",total)
    print("Average \t:",avg)
    if(avg>=75):
        print("Grade :\t",grades[0])
    elif(avg>=60):
        print("Grade :\t",grades[1])
    elif(avg>=50):
        print("Grade :\t",grades[2])
    else:
        print("Fail")
