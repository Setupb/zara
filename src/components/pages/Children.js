import React, {useState, useEffect} from "react";
import axios from "axios";
import Test from "./Users";


const Children=()=>{
    return (
        <div className="page-heading">
            <Test/>
            </div>
    )
}

export default Children;
// --------------
// import React from "react";
// // import User from "./test"

// const UrlPhoto = "https://jsonplaceholder.typicode.com/photos"

// let mas = []
// export default class Children extends React.Component{
//     state = {
//         loading: true,
//     }
  

//     async componentDidMount(){
        
//         const url = "https://jsonplaceholder.typicode.com/users";
//         const response = await fetch(url);
//         const data = await response.json();
//         data.forEach(element => {
//             console.log(element.name,"here")
//             console.log(Object.keys(element))
//             // mas=Object.keys(element)
//             mas = element.name
//         });
//         console.log(mas,"here222")

//     }

//     render(){
//         return (<div>
//            {/* <a>{console.log(Object.keys(element))}</a> */}
//         </div>
//         );
//     }

// }
