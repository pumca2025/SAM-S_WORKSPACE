print("List Operations")
listElements=[]
def insert(ele):
    listElements.append(ele)
def modify(pos,ele):
    listElements[pos]=ele
while True:
    ch=int(input("Enter Your Choice 1.Add \n2.Remove \n3.Modify \n4.Insert at"))
    match ch:
        case 1:
            ele=input("Enter Element to be inserted :")
            insert(ele)
            print("Element Added")
            break
        case 2:
            print("list Elements : ",listElements)
            idx=int(input("Enter the index of the list which to be removed"))
            print("Element",listElements.pop(idx),"is Removed")
            break
        case 3:
            print("list Elements : ",listElements)
            pos=int(input("Enter the position of the element tobe modified"))
            ele=input("Enter the New Value")
            modify(pos,ele)
            print("List modified")
            break
        case 4:
            print("list Elements :",listElements)
            pos=int(input("Enter the position of the element to be inserted"))
            ele=input("Enter the Value")
            listElements.insert(pos,ele)
            print("List Updated")
            break
        case 5:
            listElements.sort()
            print("List Sorted",listElements)
            break
        

     
