import React, {useContext} from "react";
import NavBar from "./NavBar/NavBar";
import {DataContext} from "./contexts/DataContext";
import DropdownOptionContextProvider from "./contexts/DropdownOptionContext";
import ViewHeader from "./ViewHeader/ViewHeader";
import DataView from "./DataView/DataView";

function Container(props) {
    const { parametersObject } = useContext(DataContext);

    return (
        <div className="Container">
            <NavBar />
            <DropdownOptionContextProvider>
                <ViewHeader isSubmitClicked={props.isSubmitClicked} setIsSubmitClicked={props.setIsSubmitClicked} />
                <DataView isSubmitClicked={props.isSubmitClicked} parametersObject={parametersObject} />
            </DropdownOptionContextProvider>
        </div>
    );
}

export default Container;