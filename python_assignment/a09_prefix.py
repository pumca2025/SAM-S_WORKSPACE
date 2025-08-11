inp=input("Enter the Elements separated by comma").split(",")
min_str=inp[0]
for i in range(1,len(inp)):
    if(len(inp[i])<len(min_str)):
        min_str=inp[i]
prefix=min_str
for i in inp:
    for j in range(len(prefix)):
        if(i.startswith(prefix)):
            break
        prefix=prefix[:len(prefix)-1]
if(prefix!=""):
    print(f"The Longest commom prefix is : {prefix}")
else:
    print("There is no commom prefix ")
