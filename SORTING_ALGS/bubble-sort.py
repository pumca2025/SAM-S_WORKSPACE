def bubble_sort(arr):
    for i in range(0,len(arr),1):
        for j in range(0,len(arr)-1-i,1):
            swap=0
            if arr[j]>arr[j+1]:
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swap+=1
        if(swap==0):
            break
    print(arr)        
arr=input("Enter Elements Seperated by spaces :").split()
new_arr=[int(d) for d in arr]
bubble_sort(new_arr)