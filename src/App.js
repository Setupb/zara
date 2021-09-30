import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Catalog from './components/Catalog';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import './style/header.css';
import './style/main.css';
import './style/footer.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App ">
            <Header/>
            <Route path='/home' component={Home}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
