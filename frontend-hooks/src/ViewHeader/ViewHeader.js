import React from 'react';
import Location from "./Location/Location";
import DropdownContextProvider from "../contexts/DropdownContext";
import Dropdown from "./Dropdown/Dropdown";

function ViewHeader () {
    const climateJson = require('../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const years = Object.keys(climateJson);

    return (
        <div>
            <Location />
            <DropdownContextProvider>
                <Dropdown title="select month" months={months} />
            </DropdownContextProvider>
            <DropdownContextProvider>
                <Dropdown title="select year" years={years} />
            </DropdownContextProvider>
        </div>
    )
}

export default ViewHeader;