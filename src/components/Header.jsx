import '../style/header.css';
import '../style/main.css';
import '../style/footer.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import Footer from './components/Footer';
// import Main from "./components/Main";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Children from "./pages/Children";
import Catalog from "./pages/Catalog";
import Navbar from "./navbar/Navbar";





function Header() {
  return (
    <div className="container">
      <Router>
      <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/men" component={Men}/>
        <Route path="/women" component={Women}/>
        <Route path="/children" component={Children}/>
        <Route path="/catalog" component={Catalog}/>
        </Switch>
      </Router>
    </div>
    // <div className="App">
    //     {/* <Header/>
    //     <Main/>
    //     <Footer/> */}
    // </div>
  );
}

export default Header;


// const Header = ()=>{
//     const navbarItem  = [
//         {title: "Home", url: "/", cName: "nav-links"},
//         {title: "MEN'S", url: "/mens", cName: "nav-links"},
//         {title: "WOMAN'S", url: "/womens", cName: "nav-links"},
//         {title: "CHILDREN'S", url: "/childrens", cName: "nav-links"},
//     ]

//     return(
//         <header className='header'>
        
//                 <nav className="NavbarItems">
//                     <h1 className="navbar-logo">ZARA</h1>
//                     <ul className="nav-menu">
//                         {navbarItem.map((item, index)=>{
//                             return (
//                                 <li key={index}>
//                                     <a className={item.cName} href={item.ul}>
//                                         {item.title}
//                                     </a>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </nav>
            
//         </header>
//     )

// }

// export default Header


