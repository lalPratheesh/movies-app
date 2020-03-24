import React from 'react';

import SpinnerGif from './Spinner.gif';

function Spinner() {
    return (
        <div>
            <img
                src={SpinnerGif}
                style={{ display: 'block', margin: 'auto', width: '200px' }}
                alt="Loading..."
            />
        </div>
    )
}

export default Spinner;
