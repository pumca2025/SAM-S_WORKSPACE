#hgghghf
import random
randomNumber=random.randint(1,10)
def guess_the_number(guess):
    if(guess==randomNumber):
        print("Congradulation... You Won")
    else:
        print("Wrong Guess!!!")
print("Guess the Number Game...")
guess=int(input("Guess the Number (from 1 to 10) : "))
guess_the_number(guess)
