import React from "react";

const InputField = ({ type, inputname, classes, placeholder, icon, value, onChange }) => {


    const handleInputChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };

    return (
        <div class="form-group">
            <input name={inputname}
                type={type}
                class={classes}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}>
            </input>
            <i class={`${icon} input-icon`}></i>
        </div>
    )
}

export default InputField