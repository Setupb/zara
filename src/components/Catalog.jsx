import React, {useState} from "react";
// import Products from "./Products";
import '../style/Catalog/catalog.modules.scss'
import "../style/Catalog/catalog-cd.css"
import CatalogItem from "./Catalog/CatalogItem";
import Filter from "./Catalog/Filter/Filter";
// import Cart from "./Cart";


const CatalogList = props => {
        const {setItem} = props
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
        typeProduct: 'Sleeveless boots',
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
    },
    {
        id:4,
        typeProduct: "Men's coat",
        foto: 'https://static.zara.net/photos///2021/I/0/2/p/5838/104/704/2/w/405/5838104704_6_1_1.jpg?ts=1631620417725',
        name: 'Coat with zipper',
        description: 'Trench coat made of elastic cotton knit. Collar with flaps and a heel. Long sleeve. Pockets with lapels at hip height.',
        gender: 'men',
        price: 2890,
    },
    {
        id:5,
        typeProduct: "Kid's t-shirt",
        foto: 'https://static.zara.net/photos///2021/I/0/3/p/2335/304/712/2/w/563/2335304712_6_1_1.jpg?ts=1630401557538',
        name:'Combined t-shirt-blouse',
        description: 'Loose-fitting blouse with embroidered flowers, round collar and long sleeves. Elastic band at the edges.',
        gender: 'kids',
        price: 499
    },
    {
        id:6,
        typeProduct: "Kid's sneakers",
        foto: 'https://static.zara.net/photos///2021/I/1/3/p/8333/830/102/2/w/563/8333830102_6_1_1.jpg?ts=1631213377139',
        name: 'Solid color sneakers',
        description: 'Solid color sneakers with inserts. Laces on the instep, a loop for easier putting on at the back and a massive rubber sole.',
        gender: 'kids',
        price: 1299
    },
    {
        id:7,
        typeProduct: "Men's jacket",
        foto: 'https://static.zara.net/photos///2021/I/0/2/p/5843/579/737/2/w/241/5843579737_6_1_1.jpg?ts=1629191819564',
        name: 'Double-breasted  jacket',
        description: 'Elastic double-breasted jacket with sharp lapels and long sleeves. It is fastened with buttons on the front.',
        gender: 'men',
        price: 3699
    }
]
    return (
        <main>
            <div className='container-cat'>
                <Filter/>
                <div className='products'>
                    {items.map(item => <CatalogItem product={item} key={item.id} setItem={setItem} />)}
                </div>
            </div>
        </main>
    )
}


const Cart = (props)=>{
    const {item,setItem}=props
    console.log(item)
    return (
        <div>asdasd</div>
    )
    
}


const CatalogDitale = (props)=>{
    const {item,setItem}=props
    return(
        <>   
         <button className="but-cd" onClick={()=>setItem(undefined)}>Back to catalog</button> 
         <div className="div-cd1">
        <div className="div-cd2" >
        <img className="img-cd" src={item.foto} alt='foto prod'/> 
        </div>

        <div className="div-cd2 div-cd3">
            <h2 className="name-cd"> {item.name}</h2>
            <h2 className="desc-cd"> {item.description}</h2>
            <h2 className="price-cd"> {item.price}</h2> 
            <button className="but2-cd" onClick={()=>{<Cart key={item.id} setItem={setItem} item={item}/>}}>BUY</button> 
        </div>
        </div>
        
        </>
    )
}



const Catalog=()=>{
    const [item,setItem]=useState(undefined)
    if(!item){      
        return <CatalogList setItem={setItem}/>
    }else{    
        return <CatalogDitale item={item} setItem={setItem}/>
    }
}


export default Catalog;

