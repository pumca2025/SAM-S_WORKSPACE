import random
print("Rock paper Scissor")
def indexing(num):
    if(num>2):
        return 0
    return num

c=["rock","paper","scissor"]
a=input("Enter your choice rock/paper/scissor :").strip().lower()
b=c[random.randint(0,2)]
if(a not in c):
    print("Invalid Choice")
elif(c.index(b)==indexing(c.index(a)+1)):
    print("Computer :",b)
    print("You Lose")   
elif(c.index(b)==c.index(a)):
    print("Computer :",b)
    print("Tied")
else:
    print("Computer :",b,"\nYou Won")
    
