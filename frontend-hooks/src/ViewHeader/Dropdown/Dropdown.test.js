import {fireEvent, getByTestId, getAllByTestId, render} from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";
import DropdownContextProvider from "../../contexts/DropdownContext";

describe("Dropdown", () => {
    describe("for months", () => {
        it("should exist", () => {
            const months = ["1", "2", "3"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select month" months={months} /></DropdownContextProvider>);
            // When
            getByTestId(container, "dropdown");
        });

        it("should render a list of options to choose from", () => {
            const months = ["1", "2", "3"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select month" months={months} /></DropdownContextProvider>);
            // When
            const dropdown = getByTestId(container, "dropdown");
            fireEvent.click(dropdown);
            const optionsList = getAllByTestId(container, "options-list");
            // Then
            expect(optionsList.length).not.toBe(0);
        });

        it("should populate select month button with month selected", () => {
            const months = ["1", "2", "3"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select month" months={months} /></DropdownContextProvider>);
            // When
            const dropdown = getByTestId(container, "dropdown");
            fireEvent.click(dropdown);
            const optionsList = getAllByTestId(container, "options-list");
            fireEvent.click(optionsList[0]);
            expect(dropdown.textContent).toBe("1");
        });
    });

    describe("for years", () => {
        it("should exist", () => {
            const years = ["1971", "1972", "1973"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select year" years={years} /></DropdownContextProvider>);
            // When
            getByTestId(container, "dropdown");
        });

        it("should render a list of options to choose from", () => {
            const years = ["1971", "1972", "1973"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select year" years={years} /></DropdownContextProvider>);
            // When
            const dropdown = getByTestId(container, "dropdown");
            fireEvent.click(dropdown);
            const optionsList = getAllByTestId(container, "options-list");
            // Then
            expect(optionsList.length).not.toBe(0);
        });

        it("should populate select year button with year selected", () => {
            const years = ["1971", "1972", "1973"];
            // Given
            const { container } = render(<DropdownContextProvider><Dropdown title="select year" years={years} /></DropdownContextProvider>);
            // When
            const dropdown = getByTestId(container, "dropdown");
            fireEvent.click(dropdown);
            const optionsList = getAllByTestId(container, "options-list");
            fireEvent.click(optionsList[0]);
            expect(dropdown.textContent).toBe("1971");
        });
    })
});