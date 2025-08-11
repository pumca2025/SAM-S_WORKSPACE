c=input("Enter something :")
def isfloat(c):
    try:
        float(c)
        return True
    except ValueError:
        return False
def isnum(c):
    try:
        int(c)
        return True
    except ValueError:
        return False
if(isnum(c)):
    if(int(c)%2==1):
        print("You Entered an Odd Number")
    else:
        print("You Entered an Even Number")
elif(isfloat(c)):
    print("You Entered a Float Value")
elif(c.isspace()):
    print(f"You Entered {len(c)} Space(s)")
elif(len(c)==1):
    if(c.isalpha()):
        if c.lower() in ['a','e','i','o','u']:
            print("You Entered a vowel")
        else:
            print("You Entered a consonant")
    else:
        print("You Entered a special Symbol")
else:
    print("You Entered a sequence of characters")
