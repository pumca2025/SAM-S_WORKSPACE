import cv2, numpy as np
i1=cv2.imread("p2.jpeg"); #Read Left image
i2=cv2.imread("p1.jpeg")  # Read Right images
orb=cv2.ORB_create(5000)  # Detect ORB features
k1,d1=orb.detectAndCompute(i1,None)
k2,d2=orb.detectAndCompute(i2,None)
m=sorted(cv2.BFMatcher(cv2.NORM_HAMMING,True).match(d1,d2), key=lambda x:x.distance)[:40]  # Match descriptors
p1=np.float32([k1[x.queryIdx].pt for x in m]).reshape(-1,1,2)
p2=np.float32([k2[x.trainIdx].pt for x in m]).reshape(-1,1,2)
H,_=cv2.findHomography(p1,p2,cv2.RANSAC)  # Find homography
w=cv2.warpPerspective(i1,H,(i1.shape[1]*2,i1.shape[0]))  # Warp image 1
w[:i2.shape[0],:i2.shape[1]]=i2  # Paste image 2
cv2.imshow("Panorama",w); cv2.waitKey(0)  # Display panorama
