import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar1() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/VC">VC's Message</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Administration'>Administration</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <NavLink to='/Admissions'>Admissions</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Academics'>Academics</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Facilities'>Facilities</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Library'>Library</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/ContactUs'>ContactUs</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/Careers'>Careers</NavLink>
    </nav>
  );
}

export default Navbar1;