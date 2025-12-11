def linear(list0,value,index):
    if index>=len(list0):
        return 'Not'
    if list0[index]==value:
        return index
    return linear(list0,value,index+1)
List=[]
length=int(input("Enter the size of the list :"))
for i in range(length):
    ele=int(input(f'Enter element {i+1} :'))
    List.append(ele)
print("The list Elements :")
print(List)
search=int(input("Enter the element to be searched :"))
res=linear(List,search,0)
if(res!='Not'):
    print(f"The Search Element {search} is in index {res}")
else:
    print(f"The search element {search} is not in the list")
