import cv2
img1=cv2.imread("rect1.jpg")
img2=cv2.imread("rect2.jpg")
res=cv2.addWeighted(img1,0.5,img2,0.5,0)
cv2.imshow("addition",res)
cv2.waitKey(0)
cv2.destroyAllWindows()