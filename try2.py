import cv2
img=cv2.resize(cv2.imread("leaf.jpg",cv2.IMREAD_COLOR),(300,350))
val=img[10,20,:]
print("Accessing",val)
for i in range(11,55):
    img[10,i,2]=255
    img[i,10,2]=255
val=img[10,20,:]
print("After modification",val)
cv2.imshow("Modification",img)
cv2.waitKey(0)
cv2.destroyAllWindows()