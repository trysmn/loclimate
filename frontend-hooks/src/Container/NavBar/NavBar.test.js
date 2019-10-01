import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import NavBar from "./NavBar";

describe("NavBar", () => {
    it("should have a title", () => {
        // Given
        const title = "loclimate";
        const { container } = render(<NavBar />);
        // When
        const appTitle = getByTestId(container, "app-title")
        // Then
        expect(appTitle.textContent).toBe(title);
    })
});