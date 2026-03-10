import cv2
import numpy as np
img1=cv2.imread("img.jpg")
img2=cv2.imread("img.jpg")
mean=cv2.blur(img1,(9,9))
gaussian=cv2.GaussianBlur(img2,(9,9),0)
cv2.imshow("Mean blur",np.hstack((img1,mean)))
cv2.imshow("Gaussian blur",np.hstack((img2,gaussian)))
cv2.waitKey(0)
cv2.destroyAllWindows()