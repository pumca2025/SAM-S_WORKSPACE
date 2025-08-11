import sys
inp=input("Enter The Elements seperated by comma :\n").split(",")
inp=[int(d) for d in inp]
print(inp)
maxNum=inp[0]
secondMax=float('-inf')
if len(inp)<=1:
    print("List in insufficient")
    sys.exit(1)
for i in range(1,len(inp)):
    if(inp[i]>maxNum):
        secondMax=maxNum
        maxNum=inp[i]
    elif(inp[i]>secondMax):
        secondMax=inp[i]
print(secondMax)
        
    
