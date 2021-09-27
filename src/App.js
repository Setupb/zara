// import './style/header.css';
import './style/main.css';
import './style/footer.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Footer from './components/Footer';
import Main from "./components/Main";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Children from "./components/pages/Children";
import Catalog from "./components/pages/Catalog";
import Navbar from "./components/navbar/Navbar";





function App() {
  return (
    // <div className="container">
    //   <Router>
    //   <Navbar />
    //     <Switch>
    //     <Route path="/" exact component={Home}/>
    //     <Route path="/men" component={Men}/>
    //     <Route path="/women" component={Women}/>
    //     <Route path="/children" component={Children}/>
    //     <Route path="/catalog" component={Catalog}/>
    //     </Switch>
    //   </Router>
    // </div>
    <div className="App">
        <Header/>
        {/* <Main/> */}
        <Footer/>
    </div>
  );
}

export default App;