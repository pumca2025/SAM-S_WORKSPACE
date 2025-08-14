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
f=0
for i in studentRecord:
    res=""
    if(studentRecord[i]>=50):
        res="Pass"
    else:
        res="Re-Appear"
        f=f+1
        
if(avg>=75):
    studentRecord["Grade"]=grades[0]
elif(avg>=60):
    studentRecord["Grade"]=grades[1]
elif(avg>=50):
    studentRecord["Grade"]=grades[2]
else:
    print("Fail")
