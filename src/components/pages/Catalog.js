import React from "react";
import Products from "./Products";


import "../../style/Catalog/catalogmodules.css"

import CatalogItem from "./CatalogItem";

import Filter from "./filter/Filter";

const Catalog = () => {
    const items = [{
        id:0,
        typeProduct: "Women's jackets",
        foto: 'https://static.zara.net/photos///2021/I/0/1/p/8372/229/400/2/w/195/8372229400_6_1_1.jpg?ts=1629444511812',
        name: 'Gray jacket',
        description: 'Quilted jacket with lapels and long sleeves. fastens with buttons on the front. pockets with front trim and a belt of the same',
        price: `${1899} UAH`
    },
    {
        id:1,
        typeProduct: "Women's jackets",
        foto: 'https://static.zara.net/photos///2021/I/0/1/p/8372/729/800/2/w/195/8372729800_6_1_1.jpg?ts=1629444487513',
        name: 'Black jacket',
        description: 'Quilted jacket with lapels and long sleeves. fastens with buttons on the front. pockets with front trim and a belt of the same',
        price: `${1899} UAH`
    }, {
        id:2,
        typeProduct: 'Sleeveless boots Chorovichi',
        foto: 'https://static.zara.net/photos///2021/I/0/1/p/3046/243/800/2/w/195/3046243800_6_1_1.jpg?ts=1631863751053',
        name: 'Sleeveless',
        description: 'Vest with a high collar and hood. laces on the hood and zippered pockets on the front. fastens with metal buttons on the front',
        price: `${3699} UAH`
    },
    {   id:3,
        typeProduct: "Men's jackets",
        foto: 'https://static.zara.net/photos///2021/I/0/1/p/3046/036/712/2/w/199/3046036712_6_1_1.jpg?ts=1627976009614',
        name: 'Leather jacket',
        description: `We use tracking programs to ensure that our health, safety and quality standards are met.`,
        price: `${1699}  UAH`
    }]
    return (
        <main>
            <div className='container'>
                <Filter/>
                <div className='products'>
                    {items.map(item => <CatalogItem products={item} key={item.id} />)}
                </div>
            </div>
        </main>
    )
}



export default Catalog;

