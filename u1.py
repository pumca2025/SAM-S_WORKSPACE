import cv2, numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage
org=cv2.imread("medimg.jpg")
img = cv2.imread("medimg.jpg", 0)
noise = img.astype(np.float32) + 20*np.random.randn(*img.shape)
denoise = ndimage.median_filter(noise, 3)
harris = cv2.cornerHarris(np.float32(denoise), 2, 3, 0.04)
harris_img = denoise.copy()
harris_img[harris > 0.01 * harris.max()] = 255
denoise_u8 = np.clip(denoise, 0, 255).astype(np.uint8)
sift = cv2.SIFT_create()
kp, des = sift.detectAndCompute(denoise_u8, None)
sift_out = cv2.drawKeypoints(denoise_u8, kp, None)
plt.title("Harris Corners")
plt.imshow(harris_img, cmap='gray')
plt.show()
plt.title("SIFT Keypoints")
plt.imshow(sift_out, cmap='gray')
plt.show()
