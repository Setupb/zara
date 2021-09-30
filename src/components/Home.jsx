import React from "react";
import MainHeading from "./Home/MainHeading";
import MainItem from "./Home/MainItem";
import MainButton from "./Home/MainButton";
import { useState, useContext } from "react";

import '../style/header.css';
import '../style/main.css';
import '../style/footer.css';
import { Context } from "../Context";
import MainMoreInfo from "./Catalog/MainMoreinfo";

function Home() {
    const [change,setChange]=useState('none');
    const post= [
        {id:1, title: 'Men',
            text: `Check out unique men's clothing, shoes and accessories at special prices.
             Fashionable offers in many styles that will provide you with optimal comfort 
             and convenience. Discover the biggest men's trends this season and take 
             advantage of exceptionally attractive prices.`},
        {id:2, title: 'Kids',
            text: `Combine the latest clothes and accessories from the basic baby boys
             collection with seasonal accessories to create an interesting and fashionable 
             styling. Choose from a variety of proposals that perfectly complement the 
             boy's wardrobe. Basic clothes made of 100% cotton provide maximum comfort 
             and are perfect for everyday use.`},
        {id:3, title: 'Women',
            text: `Shop the latest clothing trends with our weekly 
            edit of what’s new in online at zara. From our latest woman collection and 
            trf lines, we have dresses, jeans, shoes, bags and more to suit every 
            woman and every occasion. Explore the latest fashion trends here and now with us.`}
    ]
    const styles={
        div:{
            display:change,
            textAlign:'center'
        }
    };
    return (
        <Context.Provider value={{
            change,setChange,
        }}>
        <main>
            <div className="container">
                <MainHeading/>
                <div className="main-cards">
                    {post.map(item => <MainItem post={item} key={item.id}/>)}
                </div>
                <MainMoreInfo styles={styles}/>
                <MainButton props={setChange}/>
            </div>
        </main>
        </Context.Provider>
    );
}

export default Home;
