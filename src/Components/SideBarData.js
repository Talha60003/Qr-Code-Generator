import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
export const SidebarData=[
{
title:"Home" ,
path:"/Home",
icon:<AiIcons.AiFillHome/>,
cName:"nav-text"
    
    
},
{
title:"Entry" ,
 path:"/Entry",
icon:<AiIcons.AiOutlineUserAdd/>,
cName:"nav-text"
        
        
},
{
title:"Verify" ,
path:"/Verify",
 icon:<BiIcons.BiScan/>,
cName:"nav-text"
},
{
    title:"Logout" ,
    path:"/Login",
     icon:<FiIcons.FiLogOut/>,
    cName:"nav-text"
}]
