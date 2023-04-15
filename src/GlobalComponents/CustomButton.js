import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({ title, classes, custom, link}) => {
  const navigate= useNavigate();
  return (
    <div class={classes}>
      <button class= {`button ${custom}`} 
              onClick={() => navigate(`${link}`)}>{title}</button>
    </div>
  )
}

CustomButton.defaultProps = {
  title: "No Title",
  classes: "",
  link: "/",
}

CustomButton.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
}

export default CustomButton