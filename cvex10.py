import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import time
from sklearn.datasets import load_digits
digits = load_digits
print(digits.keys())
print("Label Data Shape",digits.target.shape)
x=digits.images
from sklearn.metrices import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.multiclass import OneVsRestClassifier
from sklearn.neighbours import KNeighborsClassifier
import seaborn as sns
X=digits.data
y=digits.target
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.25,random_state=0)
knn=OneVsRestClassifier(KNeighborsClassifier())
knn.fit(X_train,y_train)
predictions=knn.predict(X_test)
print('KNN Accuracy :%.3f % accuracy_score(y_test,predictions)')
plt.figure(figsize=(9,9))
sns.heatmap(cm,annot=True,fmt='.3f',linewidths=.5,square=True,cmap='Blue_r')
plt.ylabel('Actual label')
plt.xlabel("Predicted Label")
all_sample_title='Accuracy_Scjore:{0}'.format(accuracy_score(y_test,predictions))
plt.title(all_sample_title,size=15)

