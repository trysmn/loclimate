import React from "react";
import Metric from "./Metric";

function DataView(props) {
    return (
        <div>
            {props.isSubmitClicked && <div data-testid="data-view">
                <Metric />
            </div>}
        </div>
    )
}

export default DataView;