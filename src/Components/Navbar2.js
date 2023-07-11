import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar2() {
  return (
    <nav>
        <NavLink to='/'>Overview</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/Vision">Vision</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Mission'>Mission</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <NavLink to='/History'>History</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Socities'>Societies</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Minhas Art Gallery'>Minhas Art Gallery</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
  );
}

export default Navbar2;