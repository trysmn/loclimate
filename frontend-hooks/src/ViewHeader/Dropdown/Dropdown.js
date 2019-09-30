import React, {useContext} from 'react'
import { DropdownContext } from "../../contexts/DropdownContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const { isDropdownOpen, handleClick } = useContext(DropdownContext);
    const dataItems = props.title === "select month" ? props.months : props.years;
    const title = `dropdown-${props.title}`

    return (
        <div>
            <button data-testid={title} value={props.value} onClick={handleClick} >{props.value}</button>
            {isDropdownOpen
                ? <FontAwesomeIcon icon={faAngleDown} />
                : <FontAwesomeIcon icon={faAngleUp} />
            }
            {isDropdownOpen && dataItems.map((item) =>
                (<button key={item} data-testid="options-list" onClick={() => props.setValue(item)}>{item}</button>))
            }
        </div>
    )
}

export default Dropdown