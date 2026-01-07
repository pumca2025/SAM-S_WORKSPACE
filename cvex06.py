import cv2
im=cv2.imread("img.jpg")
img=cv2.cvtColor(im,cv2.COLOR_BGR2RGB)
ret,thresh1=cv2.threshold(img,120,255,cv2.THRESH_BINARY)
cv2.imshow("Binary Threshold",thresh1)
cv2.waitKey(0)
cv2.destroyAllWindows()
