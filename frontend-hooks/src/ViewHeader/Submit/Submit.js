import React from 'react';

function Submit(props) {
    const handleClick = () => props.setIsSubmitClicked(true);

    return (
        <div>
            <button onClick={handleClick} data-testid="test-submit-id">submit</button>
        </div>
    )
}

export default Submit