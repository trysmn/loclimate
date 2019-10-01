import React from 'react';
import {render, getByTestId, fireEvent, getByText, queryByTestId} from '@testing-library/react';
import App from "../../App";

describe("Submit", () => {
    it("should render the DataView when the submit button is clicked", () => {
        const { container } = render(<App />);
        const selectMonth = getByTestId(container, "dropdown-select month");
        fireEvent.click(selectMonth);
        const anotherOption = getByText(container, "2");
        fireEvent.click(anotherOption);
        const selectYear = getByTestId(container, "dropdown-select year");
        fireEvent.click(selectYear);
        const aDifferentOption = getByText(container, "1976");
        fireEvent.click(aDifferentOption);
        const submit = getByTestId(container, "test-submit-id");
        fireEvent.click(submit);
        const dataView = getByTestId(container, "data-view");
        expect(dataView).toBeTruthy()
    });

    it("should not render the DataView when neither dropdown is selected", () => {
        const { container } = render(<App />);
        const submit = getByTestId(container, "test-submit-id");
        fireEvent.click(submit);
        const dataView = queryByTestId(container, "data-view");
        expect(dataView).toBeFalsy()
    });

    it("should not render the DataView when month dropdown is not selected", () => {
        const { container } = render(<App />);
        const selectYear = getByTestId(container, "dropdown-select year");
        fireEvent.click(selectYear);
        const aDifferentOption = getByText(container, "1976");
        fireEvent.click(aDifferentOption);
        const submit = getByTestId(container, "test-submit-id");
        fireEvent.click(submit);
        const dataView = queryByTestId(container, "data-view");
        expect(dataView).toBeFalsy()
    });

    it("should not render the DataView when year dropdown is not selected", () => {
        const { container } = render(<App />);
        const selectMonth = getByTestId(container, "dropdown-select month");
        fireEvent.click(selectMonth);
        const anotherOption = getByText(container, "2");
        fireEvent.click(anotherOption);
        const submit = getByTestId(container, "test-submit-id");
        fireEvent.click(submit);
        const dataView = queryByTestId(container, "data-view");
        expect(dataView).toBeFalsy()
    });
});