import React, {useState} from 'react';
import Location from "./Location/Location";
import DropdownContextProvider from "../contexts/DropdownContext";
import Dropdown from "./Dropdown/Dropdown";
import Submit from "./Submit/Submit";

function ViewHeader(props) {
    const [monthValue, setMonthValue] = useState("select month");
    const [yearValue, setYearValue] = useState("select year");
    const climateJson = require('../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const years = Object.keys(climateJson);

    return (
        <div>
            <Location />
            <DropdownContextProvider>
                <Dropdown title="select month" months={months} value={monthValue} setValue={setMonthValue} />
            </DropdownContextProvider>
            <DropdownContextProvider>
                <Dropdown title="select year" years={years} value={yearValue} setValue={setYearValue} />
            </DropdownContextProvider>
            <Submit isSubmitClicked={props.isSubmitClicked} setIsSubmitClicked={props.setIsSubmitClicked} month={monthValue} year={yearValue} />
        </div>
    )
}

export default ViewHeader;