import cv2
import numpy as np
img = cv2.imread('leaf.jpg')
img = cv2.resize(img, (500, 500))
imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
flo = np.float32(imgGray)
himg = cv2.cornerHarris(flo, blockSize=2, ksize=3, k=0.04)
himg = cv2.dilate(himg, None)
corner = himg > 0.09 * himg.max()
out = img.copy()
out[corner] = [0, 0,255]  
cv2.imshow("Harris", out)
cv2.waitKey(0)
cv2.destroyAllWindows()
