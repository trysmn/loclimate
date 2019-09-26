import React from 'react';
import Location from "./Location/Location";
import DropdownContextProvider from "../contexts/DropdownContext";
import Dropdown from "./Dropdown/Dropdown";

function ViewHeader () {
    return (
        <div>
            <Location />
            <DropdownContextProvider>
                <Dropdown title="select month"/>
            </DropdownContextProvider>
            <DropdownContextProvider>
                <Dropdown title="select year"/>
            </DropdownContextProvider>
        </div>
    )
}

export default ViewHeader;