import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE

// STYLES
import "./Navbarr.css";


import * as IoIcons from "react-icons/io";
import { useParams } from "react-router-dom";
function Navbar (){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const{id}=useParams();
  const SidebarData = [

  {
    title: "Home",
    href: `/admin/${id}`,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  // {
  //   title: "Reports",
  //   href: `/admin/reports/${id}`,
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text"
  // },
  {
    title: "Create Users",
    href: `/admin/createusers/${id}`,
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Promotions",
    href: `/admin/setpromotion/${id}`,
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: " Requests",
    href: `/admin/courserequests/${id}`,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    href: `/admin/reports/${id}`,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbarr">
          
          <Link to='/' className='navbarr-logo' e>
            University Portal
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <Link to="#" className="menus-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       
       <li className='araf' >
         <Link to='/logout' className='araff'>
           Logut
         </Link>
         </li>
         </ul>
        </div>
        
        <nav className={sidebar ? "nav-menus active" : "nav-menus"}>
          <ul className="nav-menus-items" onClick={showSidebar}>
            <li className="navbarr-toggle">
              <Link to="#" className="menus-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            

            {SidebarData.map((item, index, href) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.href}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar