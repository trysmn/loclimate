import React, {useContext, useState} from 'react'
import { DropdownContext } from "../../contexts/DropdownContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const [value, setValue] = useState(props.title);
    const climateJson = require('../../climate_data');
    const months = Object.keys(climateJson[Object.keys(climateJson)[0]]);
    // const years = Object.keys(climateJson);
    const { isDropdownOpen, handleClick } = useContext(DropdownContext);

    return (
        <div>
            <button value={value} onClick={handleClick}>{props.title}</button>
            {isDropdownOpen
                ? <FontAwesomeIcon icon={faAngleDown} />
                : <FontAwesomeIcon icon={faAngleUp} />
            }
            {isDropdownOpen && months.map((item) =>
                (<button key={item} onClick={() => setValue(item)}>{item}</button>))
            }
        </div>
    )
}

export default Dropdown