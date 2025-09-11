#numpy
import numpy as np
def normal():
    while True:
        print('''
1.Addition
2.Subtraction
3.Multiplication
4.Division
5.Exponential
6.Remainder
7.Exit
'''     )
        ch=int(input("What doyou want to do... :"))
        if(ch==7):
            print("Exiting ........")
            break
        a=float(input("Enter a value"))
        b=float(input("Ente b value"))
        match ch:
            case 1:
                print(f"Addition : {np.add(a,b)}")
            case 2:
                print(f"Subtraction : {np.subtract(a,b)}")
            case 3:
                print(f"Multiplication : {np.multiply(a,b)}")
            case 4:
                if(b==0):
                    print("Cannot divide by zero")
                else:
                    print(f"Division : {np.divide(a,b)}")
            case 5:
                print(f"Exponent : {np.power(a,b)}")
            case 6:
                if(b==0):
                    print("Cannot divide by zero")
                else:
                    print(f"Remainder : {np.mod(a,b)}")
            case _:
                print("invalid")

def scientific():
    while True:
        print('''
1.Square root
2.Log
3.Sin
4.Cos
5.Tan
6.Exit
'''     )
        ch=int(input("What doyou want to do... :"))
        if(ch==6):
            print("Exiting .....")
            break
        a=float(input("Enter a value"))
        match ch:
            case 1:
                print(f"SQuare root : {np.sqrt(a)}")
            case 2:
                print(f"Log : {np.log(a)}")
            case 3:
                print(f"Sin : {np.sin(np.deg2rad(a))}")
            case 4:
                print(f"Cos : {np.cos(np.deg2rad(a))}")
            case 5:
                print(f"Tan : {np.tan(np.deg2rad(a))}")
            case _:
                print("invalid")

print("Calculator")
print(""""
1.Normal Mode
2.Scientific Mode
""")
ch=int(input("In which mode do you want to open??"))
if(ch==1):
    normal()
elif(ch==2):
    scientific()    
