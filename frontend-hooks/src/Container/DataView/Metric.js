import React from 'react';

function Metric(props) {
    return (
        <div data-testid={"test-metric-id"}>
            <h3 data-testid={"test-metric-title-id"}>{props.parameterTitle}</h3>
            <h1 data-testid={"test-metric-value-id"}>{props.parameterValue}</h1>
        </div>
    )
}

export default Metric;