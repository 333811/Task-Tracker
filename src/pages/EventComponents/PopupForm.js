import React, { useState } from 'react';
import Popup from '../../GlobalComponents/Popup.js';
import AddEvent from './AddEvent.js';

import "../../css Files/popup.css";

function PopupForm() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div className='position'>
        
        <input value="Add Event +" type="button" className="pbtn" onClick={togglePopup}/>
        {isOpen && <Popup
            content={<> <AddEvent />
            </>}
            handleClose={togglePopup}
        />}
    </div>
}

export default PopupForm;