import React from "react";
// import './style/header.css';
import '../../style/main.css';
import '../../style/footer.css';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Footer from '../Footer';
import Main from "../Main";
import Header from "../Header";
// import Home from "../components/pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Children from "../pages/Children";
import Catalog from "../pages/Catalog";
import Navbar from "../navbar/Navbar";


const Home=()=>{
    return (
        <div className="page-heading">
            <h1>Home</h1>
            <Main/>
            </div>

    )
}

export default Home;