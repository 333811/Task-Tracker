import React from "react";
import "../css Files/popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-icon" onClick={props.handleClose}>x</button>
        {props.content}
        <button onClick={props.handleClose}>Close</button> {/* Close button */}
      </div>
    </div>
  );
};

export default Popup;
