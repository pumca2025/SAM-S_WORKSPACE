import cv2
import matplotlib.pyplot as plt
import numpy as np
img=cv2.imread('bt.jpg')
img=cv2.resize(img,(500,500))
imgGray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

flo=np.float32(imgGray)
himg=cv2.cornerHarris(flo,blockSize=2,ksize=3,k=0.04)
himg=cv2.dilate(himg,None)

corner=himg>0.01*himg.max()
out=imgGray.copy()
out[corner]=[0,0,255]
cv2.imshow("Harris",out)

a,b=cv2.threshold(imgGray,127,255,cv2.THRESH_BINARY)
cv2.imshow('Grey_Scale',imgGray)
cv2.imshow("Binary",b)
plt.hist(b.ravel(),256,[0,256])
plt.show()
cv2.waitKey(0)
cv2.destroyAllWindows()
cv2.imwrite('D:/image.jpg',imgGray)
