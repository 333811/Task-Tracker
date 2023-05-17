import React, { useState } from 'react';
import Popup from '../../GlobalComponents/Popup.js';
import AddEvent from './AddEvent.js';

import "../../css Files/popup.css";

function PopupForm({id}) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className='position'>
            <input value="Add Event +" type="button" className="pbtn" onClick={togglePopup}/>
            {isOpen && (
                <Popup
                    content={
                        <>
                            <AddEvent id={id}/>
                            <button onClick={handleClose}>Close</button> {/* Close button */}
                        </>
                    }
                    handleClose={handleClose}
                />
            )}
        </div>
    );
}

export default PopupForm;
