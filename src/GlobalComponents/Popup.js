import React from "react";
import "../css Files/popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={props.handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            stroke="black"
            stroke-width="2"
            class="react-datetime-picker__clear-button__icon react-datetime-picker__button__icon"
          >
            <line x1="4" x2="15" y1="4" y2="15"></line>
            <line x1="15" x2="4" y1="4" y2="15"></line>
          </svg>
        </button>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
