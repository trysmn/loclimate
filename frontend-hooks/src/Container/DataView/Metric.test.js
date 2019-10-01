import React from 'react';
import {render, getByTestId} from '@testing-library/react'
import Metric from "./Metric";

describe("Metric", () => {
    it("should exist", () => {
        const {container} = render(<Metric />);
        expect(getByTestId(container, "test-metric-id")).toBeTruthy();
    });

    it("should have a title", () => {
        const metricTitle = `Max temp (\u00B0C)`;
        const {container} = render(<Metric metricTitle = {metricTitle}/>);
        expect(getByTestId(container, "test-metric-title-id")).toBeTruthy();
    });

    it("should have a value", () => {
        const metricValue = "23";
        const {container} = render(<Metric metricValue = {metricValue}/>);
        expect(getByTestId(container, "test-metric-value-id")).toBeTruthy();
    })
});