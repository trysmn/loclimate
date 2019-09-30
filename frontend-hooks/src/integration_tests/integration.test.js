import React, {useState} from 'react';
import {render, getByTestId, fireEvent, getByText} from '@testing-library/react';
import Submit from "../ViewHeader/Submit/Submit";
import App from "../App";
import Dropdown from "../ViewHeader/Dropdown/Dropdown";

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


});