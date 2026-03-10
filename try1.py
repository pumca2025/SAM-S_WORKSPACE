import cv2
import matplotlib.pyplot as plt
img=cv2.imread("leaf.jpg",0)
img=cv2.resize(img,(300,400))
cv2.imshow("Image",img)
plt.hist(img.ravel(),256,[0,256])
plt.show()
cv2.imwrite('C:/Users/Lenovo/Desktop/newimg.jpg',img)
cv2.waitKey(0)
cv2.destroyAllWindows()