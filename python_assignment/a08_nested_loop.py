inp=input("Enter the String :")
f=False
for i in range(0,len(inp)):
    if(f):
        break
    for j in range(0,i+1):
        b=inp[j:len(inp)-(i-j)]
        if(b==b[::-1]):
            print(f"The longest pallindrome Substring is {b}")
            f=True
            break
