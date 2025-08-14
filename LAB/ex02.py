#Program Using Conditional Branches and loops
import random
userName="Enter user Name : "
randomNumber =random.randint(1,10)
print("Guess The Number from 1 to 10 ")
chance=int(input("How many chances do you need :"))
total=chance
while True:
    if(chance<=0):
        print("you Lose !!!!!!!!!")
        print("Correct Answer :",randomNumber)
        break
    elif(int(input(f"Chance {total+1-chance} :"))==randomNumber):
        print("You Won !!!!!!!!!!!")
        print("Score :",chance)
        break
    else:
        print("Wrong Answer")
        chance=chance-1
        
