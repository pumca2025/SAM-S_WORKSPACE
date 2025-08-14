print("Student Marksheet")
#name=input("Enter Student Name :")
#regNumber=input("Enter Register Number :")
papers=int(input("Enter the NUmber of Subjects/papers :"))
marks=[]
for i in range(papers):
    print("Enter mark ",i+1,end=" ")
    marks.append(int(input()))
print(marks)
avg=sum(marks)/papers

