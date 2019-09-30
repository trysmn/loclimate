import React, {createContext} from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
    const climateJson = require('../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const years = Object.keys(climateJson);

    return (
        <DataContext.Provider value={ { months: months, years: years } }>
            { props.children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;