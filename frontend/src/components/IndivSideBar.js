import React, { useState } from "react";
import "./AdminSidebar.css";
import { useParams } from "react-router-dom";


const IndivSideBar = () => {
    const{id}=useParams();
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
        {
			text: "Home",
			icon: "/icons/grid.svg",
            href: `./${id}`
		},
		{
			text: "My Courses",
			icon: "/icons/grid.svg",
            href: `./viewMyCourses/${id}`
		},
		{
			text: "My instructors",
			icon: "icons/user.svg",
            href: `./Yarab/${id}`
		},
		{
			text: "Report Problem",
			icon: "icons/message.svg",
            href: `./ReportProbindv/${id}`
		},
		{
			text: "Previous Problem",
			icon: "icons/pie-chart.svg",
            href: `./ViewReportsindv/${id}`
		},
		{
			text: "Follow Up My Problems",
			icon: "icons/folder.svg",
            href: `./Followupsindv/${id}`
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
            href: `./ChangePassIndiv/${id}`
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
					{menuItems.map(({ text, icon,href }) => (
						<a
							className={isExpanded ? "menu-items" : "menu-items menu-items-NX"}
							href={href}
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
							<p className="nav-footer-user-position">IndividualTrainee</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default IndivSideBar;