# Data Processing Utilities
# Helper functions for analytics and data visualization

import pandas as pd
import numpy as np
from pathlib import Path
import json
from datetime import datetime, timedelta

def generate_sample_data(n_rows=100, seed=42):
    """
    Generate sample data for testing and visualization.
    
    Args:
        n_rows: Number of rows to generate
        seed: Random seed for reproducibility
    
    Returns:
        pd.DataFrame: Sample dataset
    """
    np.random.seed(seed)
    
    dates = pd.date_range(start='2026-01-01', periods=n_rows, freq='D')
    data = {
        'date': dates,
        'metric_a': np.random.normal(100, 15, n_rows),
        'metric_b': np.random.normal(150, 20, n_rows),
        'metric_c': np.random.normal(75, 10, n_rows),
        'category': np.random.choice(['A', 'B', 'C', 'D'], n_rows),
        'value': np.random.rand(n_rows) * 1000
    }
    
    return pd.DataFrame(data)

def calculate_growth(df, column, period=7):
    """
    Calculate growth metrics.
    
    Args:
        df: DataFrame with time series data
        column: Column name to calculate growth for
        period: Time period for growth calculation
    
    Returns:
        pd.Series: Growth percentages
    """
    return df[column].pct_change(periods=period) * 100

def export_to_csv(df, filename='output.csv'):
    """Export DataFrame to CSV."""
    output_path = Path('data') / filename
    output_path.parent.mkdir(exist_ok=True)
    df.to_csv(output_path, index=False)
    print(f"✅ Exported to {output_path}")

def export_to_json(df, filename='output.json'):
    """Export DataFrame to JSON."""
    output_path = Path('data') / filename
    output_path.parent.mkdir(exist_ok=True)
    df.to_json(output_path, orient='records', indent=2, date_format='iso')
    print(f"✅ Exported to {output_path}")

# Example usage
if __name__ == "__main__":
    print("📊 Data Processing Utilities")
    print("="*40)
    
    # Generate sample data
    df = generate_sample_data(365)
    print(f"✅ Generated {len(df)} rows of sample data")
    
    # Display first few rows
    print("\n📈 Sample Data (first 5 rows):")
    print(df.head())
    
    # Calculate growth
    df['growth_a'] = calculate_growth(df, 'metric_a', period=7)
    print("\n📊 Growth Metrics (first 10 rows):")
    print(df[['date', 'metric_a', 'growth_a']].head(10))
    
    # Export
    export_to_csv(df)
    export_to_json(df.head(10))
