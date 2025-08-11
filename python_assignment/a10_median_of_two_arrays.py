arr1=input("Enter array elememts separated by comma ").split(",")
arr2=input("Enter array elememts separated by comma ").split(",")
arr1.extend(arr2)
arr1=[int(d) for d in arr1]
arr1.sort()
mid=len(arr1)//2
if(len(arr1)%2==0):
    i=arr1[mid]+arr1[mid-1]
    i=float(i)/2
    print(f"The median of these two list is {i}")
else:
    print(arr1[mid])
