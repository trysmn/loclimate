import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import Submit from "./Submit";

describe("Submit", () => {
    it("should exist", () => {
        //given
        const { container } = render(<Submit />);
        //when
        expect(getByTestId(container, "test-submit-id")).toBeTruthy();
    })
});