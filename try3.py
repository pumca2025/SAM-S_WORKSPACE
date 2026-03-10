import cv2
img=cv2.resize(cv2.imread("img.jpg"),(600,300))
rotation_matrix=cv2.getRotationMatrix2D((img.shape[1]/2,img.shape[0]/2),30,1)
rotated_img=cv2.warpAffine(img,rotation_matrix,(img.shape[1],img.shape[0]))
cv2.imshow("Resized Image",img)
cv2.imshow("Rotated image",rotated_img)
cv2.waitKey(0)
cv2.destroyAllWindows()