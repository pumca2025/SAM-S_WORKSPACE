class Stack:
    def __init__(self,size):
        self.arr=[None]*size
        self.capacity=size
        self.top=-1
    def push(self,x):
        if self.isFull():
            print("Overflow .....!!!!!! Cannot insert.....")
        else:    
            print(f"Inserting {x} into the stack")
            self.top+=1
            self.arr[self.top]=x
            print("Element inserted successfully")
            print(f"Number of slots available {self.capacity-(self.top+1)}")
    def pop(self):
        if self.isEmpty():
            print("Stack is empty....")
            return None
        print(f'Removing Element {self.peek()}')
        ele=self.arr[self.top]
        self.top-=1
        return ele
    def peek(self):
        if self.isEmpty():
            print("Stack is empty ")
            return None
        else:
            return self.arr[self.top]
    def size(self):
        print(f"Total Capacity : {self.capacity}")
        print(f'Available Slots : {self.capacity-(self.top+1)}')
        return self.top+1
    def isEmpty(self):
        return self.top==-1
    def isFull(self):
        return self.top==self.capacity-1
    def diplay(self):
        for i in range(self.top,-1,-1):
            print(self.arr[i])
def main():
    stackSize=int(input("Enter the size of the stack :"))
    stack=Stack(stackSize)
    while True:
        print("\n\n")
        print("Enter the Operation")
        print("1.Push\n2.Pop\n3.Peek\n4.Size\n5.isEmpty\n6.isFull\n7.Display\n8.Exit")
        ch=int(input("Enter your choice :"))
        if(ch==1):
            x=input("Enter the element to be added :")
            stack.push(x)
        elif(ch==2):
            print(f"Popped Element{stack.pop()}")
        elif(ch==3):
            print(stack.peek())
        elif(ch==4):
            print(f"Current Size of the stack : {stack.size()}")
        elif(ch==5):
            if stack.isEmpty():
                print("Stack is Empty")
            else:
                print("Stack is not empty")
        elif(ch==6):
            if stack.isFull():
                print("Stack is Full")
            else:
                print("Stack is not full")
        elif(ch==8):
            print('Exiting......')
            break
        elif(ch==7):
            stack.diplay()
        else:
            print("Invalid Choice....")
            continue
if __name__=='__main__':
    main()
