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


def convert_to_json(csv_file_path):
    climate_data = pd.read_csv(csv_file_path)
    climate_hash = {}
    column_names = climate_data.columns[0:5]
    row_index = 0
    # sorted_multi_indexed_df = _get_sorted_multiindexed_df_for(climate_data)
    while row_index < len(climate_data):
        year = climate_data['year'][row_index]
        year_data = {}
        month = climate_data['month'][row_index]
        month_data = {}
        for metric in column_names:
            month_data[metric] = climate_data.loc[row_index][metric]
        year_data[month] = month_data
        row_index += 1
        if year in climate_hash.keys():
            climate_hash[year][month] = month_data
        else:
            climate_hash[year] = year_data
    return climate_hash


def _get_sorted_multiindexed_df_for(climate_data: pd.DataFrame):
    month_and_year_arrays = [list(climate_data['year']),list(climate_data['month'])]
    tuples = list(zip(*month_and_year_arrays))
    index = pd.MultiIndex.from_tuples(tuples, names=['year', 'month'])
    multi_indexed_df = pd.DataFrame(
        data=[
            [7.7, 2.4, 5.1, 88, 43.2],
            [6.8, 2.2, 4.5, 54.2, 36.3],
            [7.3, 0.5, 3.9, 17.8, 39.3],
            [9.4, 3.5, 6.5, 80.9, 44.5],
            [7.4, 3.5, 4.5, 80.5, 43.5]
        ],
        columns=["max_temp", "min_temp", "mean_temp", "total_rainfall", "total_sunshine"],
        index=index
    )
    return multi_indexed_df.sort_index()
