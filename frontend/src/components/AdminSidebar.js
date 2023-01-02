import React, { useState } from "react";
import "./AdminSidebar.css";


const AdminSidebar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
		},
		{
			text: "Admin Profile",
			icon: "icons/user.svg",
		},
		{
			text: "Reports",
			icon: "icons/message.svg",
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "File Manager",
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
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menus">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-items" : "menu-items menu-items-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name"></p>
							<p className="nav-footer-user-position">Admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default AdminSidebar;