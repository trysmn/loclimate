import React, { useContext } from 'react'
import { DropdownContext } from "../../contexts/DropdownContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
    const climateJson = require('../../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const { dropdownTitle, isDropdownOpen, handleClick } = useContext(DropdownContext);

    return (
        <div>
            <button onClick={handleClick}>{dropdownTitle}</button>
            <h3>{console.log(isDropdownOpen)}</h3>
            {isDropdownOpen
                ? <FontAwesomeIcon icon={faAngleDown} />
                : <FontAwesomeIcon icon={faAngleUp} />
            }
            {isDropdownOpen && <ul>
                {months.map((item) =>
                    (<li>{item}</li> ))
                }
            </ul>}
        </div>
    )
}

export default Dropdown