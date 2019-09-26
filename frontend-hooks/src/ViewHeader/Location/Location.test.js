import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import Location from "./Location";

describe("Location", () => {
    it("should have a name", () => {
       //given
       const name = "Wisley";
       const { container } = render(<Location />);
       // when
       const siteName = getByTestId(container, "site-name")
       expect(siteName.textContent).toBe(name);
    })
})