import pandas as pd
import json


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


def convert_to_json(csv_file_path):
    climate_data = pd.read_csv(csv_file_path)
    climate_dict = {}
    column_names = climate_data.columns[0:5]
    row_index = 0
    while row_index < len(climate_data):
        year = climate_data['year'][row_index]
        year_data = {}
        month = climate_data['month'][row_index]
        month_data = {}
        for metric in column_names:
            month_data[metric] = climate_data.loc[row_index][metric]
        year_data[str(month)] = month_data
        row_index += 1
        if str(year) in climate_dict.keys():
            climate_dict[str(year)][str(month)] = month_data
        else:
            climate_dict[str(year)] = year_data
    return climate_dict


def write_to_json(climate_dict):
    with open('../../../climate_data.json', 'w') as json_file:
        json.dump(climate_dict, json_file)


def main():
    climate_dict = convert_to_json("climate_data_csv.csv")
    write_to_json(climate_dict)


if __name__ == '__main__':
    main()
