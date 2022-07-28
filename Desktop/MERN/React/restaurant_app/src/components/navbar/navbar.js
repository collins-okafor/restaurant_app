import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <GiHamburgerMenu />
        <h3>My Food</h3>
        <h3>Mail</h3>
    </div>
  );
}
export default Navbar
