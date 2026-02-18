import cv2
img1=cv2.imread('rect1.jpg',0)
img2=cv2.imread('img.jpg')
img1=cv2.resize(img1,(600,300))
img2=cv2.resize(img2,(600,300))
res=cv2.addWeighted(img1,0.5,img2,0.5,0)
cv2.imshow("Combined",res)
cv2.waitKey(0)
cv2.destroyAllWindows()
