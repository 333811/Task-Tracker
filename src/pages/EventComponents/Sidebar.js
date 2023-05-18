import React from 'react';
import "../../css Files/sidebar.css";
import CustomButton from '../../GlobalComponents/CustomButton';

const Sidebar = ({id}) => {
  return (
    <div class="sidenav">
      <div class="profile">
      <a href="https://www.google.com"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/></a>
      </div>
      <a href="https://www.google.com">{id}</a>

      <CustomButton title={"Logout⇝"} classes={"col-6 logout"} custom={"logout"} onClick={event =>  window.location.href='/LoginSignup'}/>
    </div>
    
  );
};

export default Sidebar;
