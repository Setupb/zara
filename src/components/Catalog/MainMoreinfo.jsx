import React from "react";
import '../../style/mainMoreInfo.modules.scss';
import MainItemMoreInfo from "../Home/MainItemMoreInfo";

const morePosts = [
    {
        id: 1, title: 'Discount for men ',
        discount:'-40%' ,
        foto:'https://sites.google.com/site/modnodag/_/rsrc/1458201904817/home/cholovichyi-odyah.jpg?height=400&width=270',
        text: `Check out unique men's clothing, shoes and accessories at special prices.
         Fashionable offers in many styles that will provide you with optimal comfort 
         and convenience. Discover the biggest men's trends this season and take 
         advantage of exceptionally attractive prices.`},
    {
        id: 2, title: 'Discount for Kids',
        discount:'-65%' ,
        foto:'https://s3.eu-central-1.amazonaws.com/listmusor/production/144843/gallery/big/5a08393807390.jpg?1316609607',
        text: `Combine the latest clothes and accessories from the basic baby boys
         collection with seasonal accessories to create an interesting and fashionable 
         styling. Choose from a variety of proposals that perfectly complement the 
         boy's wardrobe. Basic clothes made of 100% cotton provide maximum comfort 
         and are perfect for everyday use.`},
    {
        id: 3, title: 'Discount for women',
        discount:'-70%' ,
        foto:'https://cdn.lbtq.io/productImage/resize/1200x1600_40cd750bba9870f18aada2478b24840a/20190922/144/20190922144224_003912514_1.jpg',
        text: `Shop the latest clothing trends with our weekly 
        edit of what’s new in online at zara. From our latest woman collection and 
        trf lines, we have dresses, jeans, shoes, bags and more to suit every 
        woman and every occasion. Explore the latest fashion trends here and now with us.`}
        



]
const MainMoreInfo = ({ styles }) => {
    return (
        <div style={styles.div} className='container'>
            {/*  <div className='more-info'>
                <img src="https://adminpn.tm-modus.com/images/pages/20170427133844440_min.png" alt="suit" />
                <div className='more-info-description'>
                    <h3>Discounts on women's suits up to 70%</h3>
                </div>
    </div>*/}
            <div className='more-info'>
                {morePosts.map(item => <MainItemMoreInfo posts={item} key={item.id} />)}
            </div>
        </div>
    )
}
export default MainMoreInfo;