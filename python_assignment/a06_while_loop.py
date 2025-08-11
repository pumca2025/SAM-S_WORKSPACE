def reverse(num):
    rev=0
    while num>0:

        rev=(rev*10)+(num%10)
        num=num//10
    return rev
print("Reverse a number")
a=int(input("Enter a Number :"))
rev=reverse(a)
print(f"The Reverse of the number {a} is : {rev}")
if(a==rev):
    print("Pallindrome")
else:
    print("NOT a Pallindrome")
