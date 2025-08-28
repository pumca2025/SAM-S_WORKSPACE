products=["Keyboards","Mouse","Desktop Speakers","Wifi Adapters","Mouse pads"]
price=[1000,200,300,250,100]
totalBill=0.0
def displayItems():
    print("1.Keyboard          - 1000\n2.Mouse             - 200\n3.Desktop Speakers  - 300\n4.Wifi Adapter      - 250\n5.Mouse pad         - 100")
    a=int(input("What Do you want to choose :"))
    b=int(input(f'How many {Products[a-1]} do you want : '))
    return([a,b])
while True:
    orderlist=displayItems()
    
print(displayItems())

