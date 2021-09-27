import React from "react";
import {MenuList} from "./MunuList";
import "../../style/header.css"
import "./Navbar.css"


const Navbar=()=>{
    const menuList = MenuList.map(({url, title},index)=>{
        return(
            <li key={index}>
                <a href={url} activeClassName="active">{title}</a>
            </li>
        )
    })
    return (
        <nav className="nav-bar">
            <ul className="menu-list">
            <div className="zara-logo">ZARA</div>
            {menuList}
            </ul>
            
        </nav>

    )
}

export default Navbar;