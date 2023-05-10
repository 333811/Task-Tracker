import React from 'react'

const Decorator = ({custom}) => {
  return (
    <div class={`logoContainer col-5 sticky ${custom}`}>
      <div class="logo center">Task Tracker</div>
    </div>
  )
}

export default Decorator