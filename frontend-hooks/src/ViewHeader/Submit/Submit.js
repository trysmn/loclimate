import React from 'react';

function Submit(props) {
    const areDropdownsSelected = props.month !== "select month" && props.year !== "select year";

    const handleClick = () => areDropdownsSelected && props.setIsSubmitClicked(true);

    return (
        <div>
            <button onClick={handleClick} data-testid="test-submit-id">submit</button>
        </div>
    )
}

export default Submit