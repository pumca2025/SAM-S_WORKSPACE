import cv2
import matplotlib.pyplot as plt
imgObj=cv2.imread('img.jpg')
plt.axis("off")
plt.title("Original Image")
plt.imshow(cv2.cvtColor(imgObj,cv2.COLOR_BGR2RGB))
plt.show()
blue=cv2.calcHist([imgObj],[0],None,[256],[0,256])
red=cv2.calcHist([imgObj],[1],None,[256],[0,256])
green=cv2.calcHist([imgObj],[2],None,[256],[0,256])
plt.title("Histogram of RGB Image")
plt.hist(blue,color='blue')
plt.hist(red,color='red')
plt.hist(green,color='green')
plt.show()
plt.title("Histogram of Grayscale Image")
plt.hist((cv2.cvtColor(imgObj,cv2.COLOR_BGR2GRAY)).ravel(),256,[0,256])
plt.show()

