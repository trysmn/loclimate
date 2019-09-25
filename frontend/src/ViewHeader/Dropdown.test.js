import React from 'react'
import { create } from 'react-test-renderer';
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
    it("has an option", () => {
        // Given
        const dropdown = create(<Dropdown />);
        // When
        const instance = dropdown.root;
        const dropdownMenu = instance.findByType("a");
        // Then
        expect(dropdownMenu.props.children).toBe("1971")
    })
})