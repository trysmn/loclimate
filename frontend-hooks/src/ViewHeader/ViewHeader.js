import React from 'react';
import Location from "./Location/Location";
import DropdownContextProvider from "../contexts/DropdownContext";
import Dropdown from "./Dropdown/Dropdown";

function ViewHeader () {
    return (
        <div>
            <Location />
            <DropdownContextProvider title="select month">
                <Dropdown />
            </DropdownContextProvider>
        </div>
    )
}

export default ViewHeader;