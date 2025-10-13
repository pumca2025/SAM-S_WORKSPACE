import matplotlib.pyplot as plt
# Sample data
students = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
marks = [85, 72, 90, 66, 95]
# --- 1. BAR CHART ---
plt.figure(figsize=(6,4))
plt.bar(students, marks, color='skyblue')
plt.title('Student Marks - Bar Chart')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.show()
# --- 2. LINE CHART ---
plt.figure(figsize=(6,4))
plt.plot(students, marks, color='green', marker='o', linestyle='dashed')
plt.title('Student Marks - Line Chart')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.show()
# --- 3. SCATTER PLOT ---
plt.figure(figsize=(6,4))
plt.scatter(students, marks, color='red')
plt.title('Student Marks - Scatter Plot')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.show()
