import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { useParams } from "react-router-dom";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE

// STYLES
import "./AdminSideBarMans.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { id } = useParams();
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Home",

      href: `/corporatetrainee/${id}`,
    },
    {
      text: "My Courses",

      href: `/corporatetrainee/viewMyCourses/${id}`,
    },
    {
      text: "My instructors",

      href: `/corporatetrainee/Yarab/${id}`,
    },
    {
      text: "Report Problem",

      href: `/corporatetrainee/ReportProbcor/${id}`,
    },
    {
      text: "Previous Problem",

      href: `/corporatetrainee/ViewReportscor/${id}`,
    },
    {
      text: "Follow Up",

      href: `/corporatetrainee/Followupscor/${id}`,
    },
    // {
    // 	text: "Orders",
    // 	icon: "icons/shopping-cart.svg",
    // },
    // {
    // 	text: "Saved Items",
    // 	icon: "icons/heart.svg",
    // },
    {
      text: "Settings",

      href: `/corporatetrainee/ChangePassCor/${id}`,
    },
  ];
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {menuItems.map(({ text, icon, href }) => (
              <li className={"nav-text"}>
                <a href={href}>
                  <img className="menu-item-icon" src={icon} alt="" srcset="" />
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}