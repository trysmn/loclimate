import React from 'react';

function Metric() {
    return (
        <div data-testid={"test-metric-id"}>
            <h3 data-testid={"test-metric-title-id"}>Max temp (°C)</h3>
            <h1 data-testid={"test-metric-value-id"}>23</h1>
        </div>
    )
}

export default Metric;