import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE


// STYLES
import "./AdminSideBarMans.css";


export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [wallet, setWallet] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  const{id}=useParams();
  console.log(id)
  const [isExpanded, setExpendState] = useState(false);
  useEffect(() => {
    const fetchWallet = async () => {
      const data = await axios.get(`/indiviualtrainee/wallet/${id}`);
      setWallet(data.data);
      console.log(data.data);
    };
    fetchWallet();
  }, []);
  const menuItems = [
    {
        text: "Home",
        icon: "/icons/grid.svg",
        href: `/individualtrainee/${id}`
    },
      {
          text: "My Courses",
          icon: "/icons/grid.svg",
          href: `/individualtrainee/viewMyCourses/${id}`
      },
      {
          text: "My instructors",
          icon: "icons/user.svg",
          href: `/individualtrainee/Yarab/${id}`
      },
      {
          text: "Report Problem",
          icon: "icons/message.svg",
          href: `/individualtrainee/ReportProbindv/${id}`
      },
      {
          text: "Previous Problem",
          icon: "icons/pie-chart.svg",
          href: `/individualtrainee/ViewReportsindv/${id}`
      },
      {
          text: "Follow Up",
          icon: "icons/folder.svg",
          href: `/individualtrainee/Followupsindv/${id}`
      },
      {
        text: `Wallet: ${wallet}`,
        icon: "icons/folder.svg",
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
          icon: "icons/settings.svg",
          href: `/individualtrainee/ChangePassIndiv/${id}`
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

            {menuItems.map(({ text, icon,href }) => (
                <li  className={"nav-text"}>
						<a
							
							href={href}
						>
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