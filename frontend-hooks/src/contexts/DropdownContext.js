import React, {createContext, useState} from 'react'

export const DropdownContext = createContext();

function DropdownContextProvider(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownTitle = props.title;

    const handleClick = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <DropdownContext.Provider value={ { dropdownTitle: dropdownTitle, isDropdownOpen: isDropdownOpen, handleClick: handleClick } }>
            { props.children }
        </DropdownContext.Provider>
    )
}

export default DropdownContextProvider;