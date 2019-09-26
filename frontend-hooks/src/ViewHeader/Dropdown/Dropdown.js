import React, {useContext, useState} from 'react'
import { DropdownContext } from "../../contexts/DropdownContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const [value, setValue] = useState(props.title);
    const { isDropdownOpen, handleClick } = useContext(DropdownContext);
    const dataItems = props.title === "select month" ? props.months : props.years;

    return (
        <div>
            <button value={value} onClick={handleClick} data-testid="dropdown">{value}</button>
            {isDropdownOpen
                ? <FontAwesomeIcon icon={faAngleDown} />
                : <FontAwesomeIcon icon={faAngleUp} />
            }
            {isDropdownOpen && dataItems.map((item) =>
                (<button key={item} data-testid="options-list" onClick={() => setValue(item)}>{item}</button>))
            }
        </div>
    )
}

export default Dropdown