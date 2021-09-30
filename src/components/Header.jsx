import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "./Catalog/Input";


const Header = ()=>{
    let [count, setCount] = useState(false)
    const pageActive = ({target}) => {
        const listLink = target.parentElement.querySelectorAll('a')
        listLink.forEach(item => item.classList.remove('active'))
        target.classList.add('active')
        setCount(target.textContent === 'Catalog')
    };

    return(
        <header className='header'>
            <div className="container">
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">ZARA</h1>
                    <ul className="nav-menu">
                        <Link to ='/home' onClick={pageActive} className='nav-links active'>Home</Link>
                        <Link to ='/catalog' onClick={pageActive}  className='nav-links'>Catalog</Link>
                        <Link to ='/cart'   onClick={pageActive} className='nav-links'>Cart</Link>
                    </ul>
                    <Input  count = {count}/>
                  
                
                </nav>
            </div>
        </header>
    )

}

export default Header