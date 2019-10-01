import React, {useContext} from 'react';
import Location from "./Location/Location";
import DropdownContextProvider from "../contexts/DropdownContext";
import Dropdown from "./Dropdown/Dropdown";
import Submit from "./Submit/Submit";
import {DropdownOptionContext} from "../contexts/DropdownOptionContext";
import {DataContext} from "../contexts/DataContext";

function ViewHeader(props) {
    const { months, years } = useContext(DropdownOptionContext);
    const { monthValue, setMonthValue, yearValue, setYearValue } = useContext(DataContext);

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