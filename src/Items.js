
import React,{useState, useEffect} from "react";
import axios from "axios";
import Catalog from "./components/Catalog"


const Items=[]


axios.get("http://localhost:8888/download").then(res=>{

    const users= res.data

    users.forEach(element => {
        Items.push(element)

    });
  }).catch(err=>{
    console.log(err)
  })
    




// const Items =()=>{
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
// // console.log("print")


//   if(!items){      
//       return (<div class="loader">Loading...</div>)
//   }else{
//       return (<Catalog items={items} setItems={setItems}/>)
//   }
// }

// export default Items


    
  // const Items =()=>{
  //     const [items,setItems] = useState([])
  //     const Items = []
  //     if(!items){
  //       <div class ="loader">Loading...</div>
  //     }else{
  //         setItems(Items)
  //     }
  //     useEffect(async () => {
  //       try {
  //         axios.get("http://localhost:8888/download").then(res=>{
  //           console.log(res.data,"here")
  //           const users= res.data
  //           console.log(users[0],"here2")
  //           users.forEach(element => {
  //               Items.push(element)
  //               console.log(Items)
  //           });
  //         })
  //       } catch (e) {
  //           console.error(e);
  //       }
  //   }, []);

  //   return Items
  // }
  
// const Items =[
//     {
//     id:0,
//     typeProduct: "Women's jackets",
//     foto: 'https://static.zara.net/photos///2021/I/0/1/p/8372/229/400/2/w/195/8372229400_6_1_1.jpg?ts=1629444511812',
//     name: 'Gray jacket',
//     gender: 'women',
//     description: 'Quilted jacket with lapels and long sleeves. fastens with buttons on the front. pockets with front trim and a belt of the same',
//     price: 1899
// },
// {
//     id:1,
//     typeProduct: "Women's jackets",
//     foto: 'https://static.zara.net/photos///2021/I/0/1/p/8372/729/800/2/w/195/8372729800_6_1_1.jpg?ts=1629444487513',
//     name: 'Black jacket',
//     gender: 'women',
//     description: 'Quilted jacket with lapels and long sleeves. fastens with buttons on the front. pockets with front trim and a belt of the same',
//     price: 1899
// }, {
//     id:2,
//     typeProduct: 'Sleeveless boots Cholovichi',
//     foto: 'https://static.zara.net/photos///2021/I/0/1/p/3046/243/800/2/w/195/3046243800_6_1_1.jpg?ts=1631863751053',
//     name: 'Sleeveless',
//     gender: 'men',
//     description: 'Vest with a high collar and hood. laces on the hood and zippered pockets on the front. fastens with metal buttons on the front',
//     price: 3699
// },
// {   id:3,
//     typeProduct: "Men's jackets",
//     foto: 'https://static.zara.net/photos///2021/I/0/1/p/3046/036/712/2/w/199/3046036712_6_1_1.jpg?ts=1627976009614',
//     name: 'Leather jacket',
//     gender: 'men',
//     description: `We use tracking programs to ensure that our health, safety and quality standards are met.`,
//     price: 1699
// },
// {
//   id:4,
//   typeProduct: "Men's coat",
//     foto: 'https://static.zara.net/photos///2021/I/0/2/p/5838/104/704/2/w/405/5838104704_6_1_1.jpg?ts=1631620417725',
//   name: 'Coat with zipper',
//   description: 'Trench coat made of elastic cotton knit. Collar with flaps and a heel. Long sleeve. Pockets with lapels at hip height.',
//   gender: 'men',
//   price: 2890,
// },
// {
//   id:5,
//   typeProduct: "Kid's t-shirt",
//     foto: 'https://static.zara.net/photos///2021/I/0/3/p/2335/304/712/2/w/563/2335304712_6_1_1.jpg?ts=1630401557538',
//   name:'Combined t-shirt-blouse',
//   description: 'Loose-fitting blouse with embroidered flowers, round collar and long sleeves. Elastic band at the edges.',
//   gender: 'kids',
//   price: 499
// },
// {
//   id:6,
//   typeProduct: "Kid's sneakers",
//     foto: 'https://static.zara.net/photos///2021/I/1/3/p/8333/830/102/2/w/563/8333830102_6_1_1.jpg?ts=1631213377139',
//   name: 'Solid color sneakers',
//   description: 'Solid color sneakers with inserts. Laces on the instep, a loop for easier putting on at the back and a massive rubber sole.',
//   gender: 'kids',
//   price: 1299
// },
// {
//   id:7,
//   typeProduct: "Men's jacket",
//     foto: 'https://static.zara.net/photos///2021/I/0/2/p/5843/579/737/2/w/241/5843579737_6_1_1.jpg?ts=1629191819564',
//   name: 'Double-breasted suit jacket',
//   description: 'Elastic double-breasted jacket with sharp lapels and long sleeves. It is fastened with buttons on the front.',
//   gender: 'men',
//   price: 3699
// }]

export default Items
