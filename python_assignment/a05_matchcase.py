a=float(input("Enter A value"))
b=float(input("Enter B value"))
c=input("Operation:")
match c:
    case '+':
        print("Addition :",a+b)
    case '-':
        print("Subtraction :",a-b)
    case '*':
        print("Multiplication :",a*b)
    case '/':
        if(b==0):
            print("Cannot Divide by 0")
        else:
            print("Division Result :",a/b)
    case '//':
        if(b==0):
            print("Cannot Divide by 0")
        else:
            print("Floor Division Result :",int(a//b))
    case '%':
        if(b==0):
            print("Cannot Divide by 0")
        else:
            print("Remainder :",a%b)
    case '**':
        print("Exponent :",a**b)
    case _:
        print("Invalid Input")
