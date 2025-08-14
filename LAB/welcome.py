while True:
    print('')
    #Get User Choice
    ch=input("What do you want to do + , - , *, / , // , % (use ^ to exit) : ")
    if(ch == '^'):
        break
    #Get User Input
    try:
        a=eval(input("Enter a Number :"))
        b=eval(input("Enter a Number :"))
    except NameError:
        print("Invalid Input Only numbers are allowed")
        continue
    #divide by zero
    if(ch[0]=='/' and b==0):
        print("Cannot Divide by Zero")
        continue
    #Matching the User choice and performing the desired Operation
    match ch:
        case '+':
            print("Addition Result : ",a+b)
            continue
        case '-':
            print("Subtraction Result : ",abs(a-b))
            continue
        case '*':
            print("Multiplication Result : ", a*b)
            continue
        case '/':
            print("Division Result : ",a/b)
            continue
        case '//':
            print("Integer Division Result : ",a//b)
            continue
        case '%':
            print("Modulus Result :",a%b)
            continue
        case '**':
            print("Exponent Result :", a**b)
            continue
        case _:
            print("Invalid Operation")
            continue
            
