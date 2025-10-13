import pandas as pd
import matplotlib.pyplot as plt
import requests

# Step 1: Fetch data from Wikipedia with headers to avoid 403 error
url = "https://en.wikipedia.org/wiki/COVID-19_pandemic_by_country_and_territory"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/141.0.0.0 Safari/537.36"
}

print("Fetching data from Wikipedia...")
response = requests.get(url, headers=headers)
response.raise_for_status()  # Raise error if request fails

# Step 2: Read all HTML tables from the page
tables = pd.read_html(response.text)
df = tables[0]  # The first table contains global data by country

# Step 3: Preview raw data
print("\n=== Preview of Raw Data ===")
print(df.head(5))

# Step 4: Rename columns safely (Wikipedia’s structure changes sometimes)
if len(df.columns) >= 4:
    df.columns = ['Country', 'Cases', 'Deaths', 'Recoveries', *df.columns[4:]]
else:
    print("⚠️ Warning: Table structure may have changed. Check column names.")
print("\nRenamed Columns:")
print(df.columns.tolist())

# Step 5: Data Cleaning – remove symbols and convert to numbers
for col in ['Cases', 'Deaths', 'Recoveries']:
    if col in df.columns:
        df[col] = (
            df[col].astype(str)
            .str.replace(r'[^0-9]', '', regex=True)
            .replace('', '0')
            .astype(float)
        )

# Step 6: Drop missing values (if any)
df = df.dropna(subset=['Cases', 'Deaths'])
print("\nAfter Cleaning:")
print(df[['Country', 'Cases', 'Deaths']].head())

# Step 7: Sorting – get Top 5 countries by cases
top5 = df.sort_values(by='Cases', ascending=False).head(5)
print("\n=== Top 5 Countries by COVID-19 Cases ===")
print(top5[['Country', 'Cases', 'Deaths']])

# Step 8: Add new derived column – Death Rate %
df['Death Rate (%)'] = (df['Deaths'] / df['Cases']) * 100
print("\nAdded 'Death Rate (%)' column:")
print(df[['Country', 'Cases', 'Deaths', 'Death Rate (%)']].head())

# Step 9: Filtering – countries with > 10 million cases
high_case_countries = df[df['Cases'] > 10_000_000]
print(f"\nCountries with > 10 million cases: {len(high_case_countries)} found")
print(high_case_countries[['Country', 'Cases']].head())

# Step 10: Summary statistics
print("\n=== Descriptive Statistics ===")
print(df[['Cases', 'Deaths', 'Death Rate (%)']].describe())

# Step 11: Save cleaned data
df.to_csv("covid_data_cleaned.csv", index=False)
print("\n✅ Cleaned data saved to 'covid_data_cleaned.csv'")
