import React from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({ title, classes, custom }) => {
  return (
    <div class={classes}>
      <button class= {`button ${custom}`}>{title}</button>
    </div>
  )
}

CustomButton.defaultProps = {
  title: "No Title",
  classes: "",
}

CustomButton.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.string,
}

export default CustomButton