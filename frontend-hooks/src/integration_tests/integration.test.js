import React from 'react';
import {render, getByTestId, fireEvent} from '@testing-library/react';
import Submit from "../ViewHeader/Submit/Submit";
import App from "../App";

describe("Submit", () => {
    it("should render the DataView when given a valid month and year", () => {
        const { container } = render(<App />);
        const submit = getByTestId(container, "test-submit-id");
        fireEvent.click(submit);
        const dataView = getByTestId(container, "data-view");
        expect(dataView).toBeTruthy()
    })
})