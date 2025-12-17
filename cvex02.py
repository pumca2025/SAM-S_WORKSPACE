import cv2
img=cv2.imread('black.jpg',cv2.IMREAD_COLOR)
Value=img[10,10,:]
print("Accessing Pixel Values :",Value)
for i in range(11,55):
    img[10,i,2]=255
Value=img[10,10,:]
print("Modifying Pixel",Value)
cv2.imshow("image",img)
cv2.waitKey(0)
cv2.destroyAllWindows()
