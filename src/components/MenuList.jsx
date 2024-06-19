import React from 'react'
import Drawer from "@mui/material/Drawer"
import { Link } from "react-router-dom";
import { useState } from "react";
const MenuList = () => {

  return (

    <div class="menuList">
      
            <div><Link to="/"><div class="menuName">Home</div></Link></div>
          
            <div><Link to="/works"><div class="menuName">Works</div></Link></div>
    </div>

  )
}

export default MenuList