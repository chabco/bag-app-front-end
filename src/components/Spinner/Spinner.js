import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Spinner.css';
library.add(faSpinner);

export default()=>{
    return(
        <div className="spinner-wrapper">
            <FontAwesomeIcon icon="spinner" size="10x" spin />
        </div>
    )
}