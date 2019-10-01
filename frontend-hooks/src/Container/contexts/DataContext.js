import React, {createContext, useState} from 'react';

export const DataContext = createContext({});

function DataContextProvider(props) {
    const [monthValue, setMonthValue] = useState("select month");
    const [yearValue, setYearValue] = useState("select year");
    const climateJson = require('../../climate_data');
    const parametersObject = props.isSubmitClicked && climateJson[yearValue][monthValue];

    return (
        <DataContext.Provider value={ { monthValue,  setMonthValue, yearValue, setYearValue, parametersObject } }>
            { props.children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;