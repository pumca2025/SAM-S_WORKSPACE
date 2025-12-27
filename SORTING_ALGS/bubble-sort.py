def bubble_sort(arr):
    for i in range(0,len(arr)-1,1):
        for j in range(0,len(arr)-1-i,1):
            swap_count=0
            if arr[j]>arr[j+1]:
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swap+=1
        if(swap_count==0):
            break
    print("Sorted Array :",arr)        
arr_inp=input("Enter Elements Seperated by space :").split()
new_arr=[int(ele) for ele in arr_inp]
bubble_sort(new_arr)