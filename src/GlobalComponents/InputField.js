import React from 'react'

const InputField = ({type , classes, placeholder, icon,value, onChange}) => {
    
    return (
        <div class="form-group">
            <input type={type} class={classes} placeholder={placeholder} value={value} onChange={onChange}></input>
            <i class= {`${icon} input-icon`}></i>
        </div>
    )
}

export default InputField