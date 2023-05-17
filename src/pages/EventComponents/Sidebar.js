import React from 'react';
import "../../css Files/sidebar.css";

const Sidebar = ({id}) => {
  return (
    <div class="sidenav">
      <div class="profile">
      <a href="https://www.google.com"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/></a>
      </div>
      <a href="https://www.google.com">{id}</a>
      <a href="https://www.google.com"><i>"Khubaib is the best"</i></a>

      <a class="logout" href='https://www.google.com'>
        <h2>logout</h2>
        </a>
      
    </div>
    
  );
};

export default Sidebar;
