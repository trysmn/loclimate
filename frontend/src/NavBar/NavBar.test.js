import React from 'react'
import { create } from 'react-test-renderer';
import { NavBar } from './NavBar'

describe("NavBar", () => {
    it("renders the app title", () => {
        // Given
        const navBar = create(<NavBar />);
        // When
        const instance = navBar.root;
        const div = instance.findByType("div");
        // Then
        expect(div.props.children).toBe("loclimate")
    })
})