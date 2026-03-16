import cv2
img=cv2.imread('black.jpg',cv2.IMREAD_COLOR)
Value=img[10,10,:]
print("Accessing Pixel Values :",Value)
for j in range (10,50):
    for i in range(11,55):
        img[j,i,0]=255
Value=img[10,11,:]
print("Modifying Pixel",Value)
cv2.imshow("image",img)
cv2.waitKey(0)
cv2.destroyAllWindows()
