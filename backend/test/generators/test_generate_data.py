import pandas as pd

from generate_data import convert_to_dict, convert_to_json


def test_generate_data():
    test_data = "./test_csv.csv"

    expected = [
        {
            'max_temp': 7.7,
            'min_temp': 2.4,
            'mean_temp': 5.1,
            'total_rainfall': 88.0,
            'total_sunshine': 43.2,
            'month': 1,
            'year': 1973
        },
        {
            'max_temp': 6.8,
            'min_temp': 2.2,
            'mean_temp': 4.5,
            'total_rainfall': 54.2,
            'total_sunshine': 36.3,
            'month': 5,
            'year': 1986
        },
        {
            'max_temp': 7.3,
            'min_temp': 0.5,
            'mean_temp': 3.9,
            'total_rainfall': 17.8,
            'total_sunshine': 39.3,
            'month': 3,
            'year': 2008
        },
        {
            'max_temp': 9.4,
            'min_temp': 3.5,
            'mean_temp': 6.5,
            'total_rainfall': 80.9,
            'total_sunshine': 44.5,
            'month': 12,
            'year': 1998
        },
        {
            'max_temp': 7.4,
            'min_temp': 3.5,
            'mean_temp': 4.5,
            'total_rainfall': 80.5,
            'total_sunshine': 43.5,
            'month': 11,
            'year': 1998
        }
    ]

    result = convert_to_dict(test_data)

    assert result == expected


def test_generate_correct_json_structure():
    test_data = "./test_csv.csv"

    expected = {
        1973: {
            1: {
                'max_temp': 7.7,
                'min_temp': 2.4,
                'mean_temp': 5.1,
                'total_rainfall': 88.0,
                'total_sunshine': 43.2
            }
        },
        1986: {
            5: {
                'max_temp': 6.8,
                'min_temp': 2.2,
                'mean_temp': 4.5,
                'total_rainfall': 54.2,
                'total_sunshine': 36.3
            }
        },
        2008: {
            3: {
                'max_temp': 7.3,
                'min_temp': 0.5,
                'mean_temp': 3.9,
                'total_rainfall': 17.8,
                'total_sunshine': 39.3
            }
        },
        1998: {
            11: {
                'max_temp': 7.4,
                'min_temp': 3.5,
                'mean_temp': 4.5,
                'total_rainfall': 80.5,
                'total_sunshine': 43.5
            },
            12: {
                'max_temp': 9.4,
                'min_temp': 3.5,
                'mean_temp': 6.5,
                'total_rainfall': 80.9,
                'total_sunshine': 44.5
            }
        }
    }

    result = convert_to_json(test_data)

    assert result == expected
