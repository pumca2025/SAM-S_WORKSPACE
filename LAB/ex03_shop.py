products=["Keyboards","Mouse","Desktop Speakers","Wifi Adapters","Mouse pads"]
price=[1000,200,300,250,100]
totalBill=0.0
totalQuantity=0
invoice=[]
def displayItems():
    print("1.Keyboard          - 1000\n2.Mouse             - 200\n3.Desktop Speakers  - 300\n4.Wifi Adapter      - 250\n5.Mouse pad         - 100")
    a=int(input("What Do you want to choose :"))
    b=int(input(f'How many {products[a-1]} do you want : '))
    invoice.append([
        products[a-1],
        price[a-1],
        b,
        price[a-1]*b
        ])
    return([a,b])
def addItems():
    global totalBill,totalQuantity
    orderlist=displayItems()
    totalQuantity=totalQuantity+orderlist[1]
    totalBill+=(price[orderlist[0]-1]*orderlist[1])
    ch=input("Want to add item ??? (yes to continue any other key to stop)")
    if(ch.strip().lower()=="y" or ch.strip().lower()=="yes"):
        addItems()
    else:
        print("Here is the invoice of your purchase")
addItems()
print("\n\n\nINVOICE")
print("-----------------------------------------------------------------------------")
print("Product Name\t\tPrice \t\t     Quantity\t\t\tTotal")
print("-----------------------------------------------------------------------------")
for i in invoice:
    for j in i:
        print(str(j).ljust(20),end="\t")
    print("\n")
print("Number of Products   :",len(invoice))
print("Total Quantity :",totalQuantity)
print("Total Bill :",totalBill)


