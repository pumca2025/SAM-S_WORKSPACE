a=[]
for i in range(5):
    a.append(int(input(f"Enter Number {i+1} :")))
p=0
n=0
z=0
for i in a:
    if i > 0:
        print(f"Number {i} is positive")
        p=p+1
    elif i < 0:
        print(f"Number {i} is Neative")
        n=n+1
    else:
        print(f"Number {i} is Zero")
        z=z+1
print(f"""
Total number of positive numbers : {p}
Total number of negative numbers : {n}
Total Zeros :{z}
""")
