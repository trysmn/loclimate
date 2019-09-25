import React from 'react'
import { create } from 'react-test-renderer';
import { ViewHeader } from './ViewHeader'

describe("ViewHeader", () => {
    it("renders the location", () => {
        // Given
        const viewHeader = create(<ViewHeader />);
        // When
        const instance = viewHeader.root;
        const location = instance.findByType("h2");
        // Then
        expect(location.props.children).toBe("Wisley")
    })

    // it("renders the month", () => {
    //     // Given
    //     const viewHeader = create(<ViewHeader />)
    //     // When
    //     const instance = viewHeader.root
    //     const div = instance.findByType("div")
    //     // Then
    //     expect(div.props.children).toBe("loclimate")
    // })
    //
    // it("renders the year", () => {
    //     // Given
    //     const viewHeader = create(<ViewHeader />)
    //     // When
    //     const instance = viewHeader.root
    //     const div = instance.findByType("div")
    //     // Then
    //     expect(div.props.children).toBe("loclimate")
    // })
})