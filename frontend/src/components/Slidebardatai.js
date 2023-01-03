import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoIconss from "react-icons/io5";
import * as ricons from "react-icons/rx"



  
export const SidebarData = [
  { 
    title: "Home",
    path: `/Instructor/`,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "My Courses",
    path: "/instructor/viewmycourses/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title:"Create Course",
    path: "/CreateCourses/", 
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "My Ratings & Reviews",
    path: "/instructor/ViewMyRatings/",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "My Reports",
    path: "/ViewReportsi/",
    icon: <ricons.RxQuestionMark />,
    cName: "nav-text"
  },
 
  
];