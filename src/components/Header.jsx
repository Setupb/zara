import React, {useState} from "react";


const Header = ()=>{
    const [navbarItem]  = useState([
        {title: "MEN'S", url: "#", cName: "nav-links"},
        {title: "WOMAN'S", url: "#", cName: "nav-links"},
        {title: "CHILDREN'S", url: "#", cName: "nav-links"},
    ])

    return(
        <header className='header'>
            <div className="container">
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">ZARA</h1>
                    <ul className="nav-menu">

                        {navbarItem.map((item, index)=>{
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.ul}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header
