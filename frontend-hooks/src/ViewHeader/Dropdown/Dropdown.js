import React, { useContext } from 'react'
import { DropdownContext } from "../../contexts/DropdownContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const climateJson = require('../../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    const years = Object.keys(climateJson);
    const { isDropdownOpen, handleClick } = useContext(DropdownContext);

    return (
        <div>
            <button onClick={handleClick}>{props.title}</button>
            {isDropdownOpen
                ? <FontAwesomeIcon icon={faAngleDown} />
                : <FontAwesomeIcon icon={faAngleUp} />
            }
            {isDropdownOpen && <ul>
                {props.title === "select month" ? months.map((item) =>
                    (<li key={item}>{item}</li> )) : years.map((item) =>
                    (<li key={item}>{item}</li> ))
                }
            </ul>}
        </div>
    )
}

export default Dropdown