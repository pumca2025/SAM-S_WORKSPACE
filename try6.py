import cv2
img=cv2.imread("mri.jpg")
img=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
ret,thresh=cv2.threshold(img,120,455,cv2.THRESH_BINARY)
cv2.imshow("Binary Threshold",thresh)
cv2.waitKey(0)
cv2.destroyAllWindows()