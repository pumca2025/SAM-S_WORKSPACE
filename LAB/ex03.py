#program using Functions
def square(s):
    return size**2
def rectangle(l,w):
    return l*w
def triangle(b,h):
    return 0.5*b*h
def circle(r):
    return 3.14*r*r
while True:
    s=int(input("\n Select The Shape \n1.Square \n2.rectangle \n3.Triangle \n4.Circle"))
    match s:
        case 1:
            size=float(input("Enter the size of side :"))
            print(square(size))
            break
        case 2:
            l=float(input("Enter the length :"))
            b=float(input("Enter the width  :"))
            print(rectangle(l,b))
            break
        case 4:
            size=float(input("Enter the radius ofcircle :"))
            print(circle(size))
            break
        case 3:
            l=float(input("Enter the base :"))
            b=float(input("Enter the height  :"))
            print(triangle(l,b))
            break
        case _:
            print("Invalid Choice")
            break
            
            

