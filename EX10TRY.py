import cv2
import os
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
data = []
labels = []
dataset_path = "dataset"
# Load images
for label in os.listdir(dataset_path):
    folder = os.path.join(dataset_path, label)
    for img_name in os.listdir(folder):
        img_path = os.path.join(folder, img_name)
        img = cv2.imread(img_path)
        img = cv2.resize(img, (50,50))
        img = img.flatten()
        data.append(img)
        labels.append(label)
data = np.array(data)
# Train KNN
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(data, labels)
# Test image
test_img = cv2.imread("dogtest.jpg")
cv2.imshow("Test-Image",test_img)
test_img = cv2.resize(test_img, (50,50))
test_img = test_img.flatten().reshape(1,-1)
prediction = knn.predict(test_img)
print("Predicted Class:", prediction[0])
