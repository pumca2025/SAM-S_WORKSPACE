import cv2
import numpy as np
from matplotlib import pyplot as plt
img=cv2.imread("img.jpg")
new_image=cv2.blur(img,(9,9))
plt.subplot(121)
plt.imshow(cv2.cvtColor(img,cv2.COLOR_BGR2RGB))
plt.title("Original")
plt.subplot(122)
plt.imshow(cv2.cvtColor(new_image,cv2.COLOR_BGR2RGB))
plt.title("Mean Filter")
plt.show()

img=cv2.imread("img.jpg")
dst=cv2.GaussianBlur(img,(9,9),cv2.BORDER_REFLECT_101)
cv2.imshow('Gaussian Blur Image',np.hstack((img,dst)))
cv2.waitKey(0)
cv2.destroyAllWindows()
