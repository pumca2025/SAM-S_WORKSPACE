import cv2
img=cv2.imread('img.jpg')
r=cv2.resize(img,(200,150))
rot=cv2.getRotationMatrix2D((img.shape[1]/2,img.shape[0]/2),90,1)
rotated=cv2.warpAffine(img,rot,(img.shape[1],img.shape[0]))
cv2.imshow('Risized',r)
cv2.imshow('rotated',rotated)
cv2.waitKey(0)
cv2.destroyAllWindows()
