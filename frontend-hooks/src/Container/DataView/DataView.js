import React from "react";
import Metric from "./Metric";

function DataView(props) {
    const parameters = {
        max_temp: "Max temp (°C)",
        min_temp: "Min temp (°C)",
        mean_temp: "Mean temp (°C)",
        total_rainfall: "Total Rainfall (mm)",
        total_sunshine: "Total Sunshine (hrs)"
    };

    return (
        <div>
            {props.isSubmitClicked && <div data-testid="data-view">
                {Object.keys(parameters).map((name) => (<Metric key={name} parameterTitle={parameters[name]} parameterValue={props.parametersObject[name]} />))}
            </div>}
        </div>
    )
}

export default DataView;