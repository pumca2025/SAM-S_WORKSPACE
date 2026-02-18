import cv2
import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage
# Read image
img = cv2.imread("img.jpg", cv2.IMREAD_GRAYSCALE)
if img is None:
    print("Image not found")
    exit()
# Add noise
noise = img.astype(np.float32) + 20 * np.random.randn(*img.shape)
noise = np.clip(noise, 0, 255).astype(np.uint8)
# Median filter
denoise = ndimage.median_filter(noise, size=3)
# ---------------- HARRIS CORNER DETECTION ----------------
denoise_f = np.float32(denoise)
harris = cv2.cornerHarris(denoise_f, 2, 3, 0.04)
harris_img = denoise.copy()
harris_img[harris > 0.01 * harris.max()] = 255
plt.figure(figsize=(5,5))
plt.title("Harris Corner Output")
plt.imshow(harris_img, cmap='gray')
plt.axis('off')
plt.show()
# ---------------- SIFT FEATURE DETECTION ----------------
sift = cv2.SIFT_create()
kp, des = sift.detectAndCompute(denoise, None)
sift_img = cv2.drawKeypoints(denoise, kp, None)
plt.figure(figsize=(5,5))
plt.title("SIFT Keypoints Output")
plt.imshow(sift_img, cmap='gray')
plt.axis('off')
plt.show()
