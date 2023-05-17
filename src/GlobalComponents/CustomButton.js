import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({ title, classes, custom, type, onClick }) => {
  const navigate = useNavigate();
  return (
    <div class={classes}>
      <button class={`button ${custom}`}
        onClick={onClick}
        type={type}>{title}</button>
    </div>
  )
}

CustomButton.defaultProps = {
  title: "No Title",
  classes: "",
  type: "submit",
}

CustomButton.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
}

export default CustomButton