import React from 'react';
import "D:/Task-Tracker/src/css Files/sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidenav">
      <div class="profile">
      <a><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar" /></a>
      </div>
      <a href="#">Khubaib Ahmad</a>
      <a href="#"><i>"Khubaib is the best"</i></a>

      <a class="logout" href='#'>
        <h2>logout</h2>
        </a>
      
    </div>
    
  );
};

export default Sidebar;
