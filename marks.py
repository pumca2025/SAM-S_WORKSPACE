import pandas as pd

# Load CSV file
df = pd.read_csv("marks.csv")

MAX_PER_SUBJECT = 100  # fixed max mark

# Student-wise total & percentage
result = df.groupby(['reg_no', 'name']).agg(
    total_marks=('marks', 'sum'),
    subject_count=('marks', 'count')
).reset_index()

result['total_max'] = result['subject_count'] * MAX_PER_SUBJECT
result['percentage'] = (result['total_marks'] / result['total_max']) * 100
result['percentage'] = result['percentage'].round(2)

# Save result
result.to_csv("output_percentage.csv", index=False)

print("Percentage calculated for all students ✅")
print(result)
