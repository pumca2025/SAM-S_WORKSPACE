import re
pattern='^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}$'
def validateEmail(email):
    if(re.match(pattern,email)!= None):
        return "This Email is Valid"
    return "This  Email is invalid"
print("E mail Validation")
print("-----------------")
email=input("Enter the Email Address : ")
print(validateEmail(email))

