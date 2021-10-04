import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
// import   from './components/Catalog';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import { useState } from "react";

import './style/header.css';
import './style/main.css';
import './style/footer.css';
import './App.css';
import { Context } from "./Context";
import React,{useState, useEffect} from "react";
import axios from "axios";
import Catalog from "./components/Catalog"
import Items from "./Items";


function App() {
  const [valueInput,setvalueInput]=useState('');
  const [items,setItems] =useState(Items);

//   const [items,setItems]=useState([])
//   async function fetchData() {
//     const response = await axios.get("http://localhost:8888/download");
//     const itemsList = await response.data;
//     console.log("fetchData",itemsList);
//     setItems(itemsList)
//   }
//   useEffect(() => {
//     fetchData();
// }, []); //This will run only once 


  return (
    <Context.Provider value={{
      valueInput,setvalueInput,
      items,setItems

    }}>
    <BrowserRouter>
        <div className="App ">
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Footer/>
        </div>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
