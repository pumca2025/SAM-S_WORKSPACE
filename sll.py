class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
class Sll:
    def __init__(self):
        self.head=None
        self.tail=None
    def addAtStart(self,data):
        newest=Node(data)
        if(self.head==None):
            self.head=newest
            self.tail=newest
            return
        newest.next=self.head
        self.head=newest
    def addAtEnd(self,data):
        newest=Node(data)
        if(self.head==None):
            self.head=newest
            self.tail=newest
            return
        self.tail.next=newest
        self.tail=newest
    def deleteAtStart(self):
        if(self.head==None):
            print("list is empty")
        elif(self.head.next==None):
            pop=self.head.data
            slef.head=self.tail=None
        else:
            pop=self.head.data
            self.head=self.head.next
            return pop
    def deleteAtEnd(self):
        if(self.head==None):
            print("list is empty")
        elif(self.head.next==None):
            pop=self.head.data
            slef.head=self.tail=None
        else:
            temp=self.head
            pop=self.tail.data
            while(temp):
                if(temp.next==self.tail):
                    tail=temp
                    break
                continue
            return pop
            
    def display(self):
        a=self.head
        while(a):
            print(a.data)
            a=a.next
        print("None")
a=Sll()
a.addAtStart(10)
a.addAtStart(20)
a.addAtEnd(30)
print(a.deleteAtStart())
a.display()
            
            
    
