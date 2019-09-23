import React from 'react'
import { create } from 'react-test-renderer';
import { NavBar } from './NavBar'

describe("NavBar", () => {
    it("renders the app title", () => {
        // Given
        const navBar = create(<NavBar />)
        // When
        const instance = navBar.root
        const h1 = instance.findByType("h1")
        // Then
        expect(h1.props.children).toBe("loclimate")
    })
})