import React, {createContext} from 'react';

export const DropdownOptionContext = createContext({});

function DropdownOptionContextProvider(props) {
    const climateJson = require('../../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const years = Object.keys(climateJson);

    return (
        <DropdownOptionContext.Provider value={ { months: months, years: years } }>
            { props.children }
        </DropdownOptionContext.Provider>
    )
}

export default DropdownOptionContextProvider;