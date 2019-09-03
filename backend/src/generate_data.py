import pandas as pd


def convert_to_dict(csv_file_path):
    climate_data = pd.read_csv(csv_file_path)
    climate_array = []
    column_names = climate_data.columns
    row_index = 0
    while row_index < len(climate_data):
        month_data = {}
        for metric in column_names:
            month_data[metric] = climate_data.loc[row_index][metric]
        climate_array.append(month_data)
        row_index += 1
    return climate_array
