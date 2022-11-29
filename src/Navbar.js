import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
        <a href='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </a>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <a href='#' className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </a>
          </li>

          <li className='nav-text'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-text'>
            <a href='#'>About</a>
          </li>
          <li className='nav-text'>
            <a href='#'>Contact</a>
          </li>
          <li className='nav-text'>
            <a href='#'>Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
