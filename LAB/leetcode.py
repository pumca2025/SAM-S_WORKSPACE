a="tssaass"
f=False
for i in range(0,len(a)):
    if(f):
        break
    for j in range(0,i+1):
        b=a[j:len(a)-(i-j)]
        if(b==b[::-1]):
            print(b)
            f=True
            break

