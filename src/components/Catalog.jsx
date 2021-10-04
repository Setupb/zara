import React, {useState, useContext, useEffect} from "react";
// import Products from "./Products";
import '../style/Catalog/catalog.modules.scss'
import "../style/Catalog/catalog-cd.css"
import CatalogItem from "./Catalog/CatalogItem";
import Filter from "./Catalog/Filter/Filter";
import { Context } from "../Context";
// import Items from "../Items"
import "../style/Catalog/catalog-cd.css"



const CatalogList = props => {
    

    const{items,setItems}=useContext(Context);
        const {setItem} = props
    

    const [newList, setNewList] = useState(items);
    const [selectedSort, setSelectedSort] = useState('')
    const  [listFilters, setListFilters] = useState({
        gender: null, price: null
    })
    const{valueInput,setVżalueInput} = useContext(Context);
    let count = [...items]

    const filterProduct= newList.filter(product => {
        if(product.name.toLowerCase().includes(valueInput.toLowerCase())){
            return product;
        }if(product.typeProduct.toLowerCase().includes(valueInput.toLowerCase())){
         return product;
         }if(product.description.toLowerCase().includes(valueInput.toLowerCase())){
             return product;
         }/*if(product.price.toLowerCase().includes(valueInput.toLowerCase())){
             return product;
         }*/
     })

    useEffect(() => {
        if (selectedSort){
            setNewList([...newList].sort((a,b) => {
                if  (typeof a[selectedSort] === 'number')
                    return a[selectedSort] - b[selectedSort]
                else return  a[selectedSort].localeCompare(b[selectedSort])
            }))
        }
    },[selectedSort])

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    const filterGender = (item) => {

        console.log(item)
        setListFilters(() =>{
            listFilters.gender = item.value.trim();
            return listFilters
        })
    }
    const filterPrice = (price) => {
        setListFilters(() =>{
            listFilters.price = price;
            return listFilters
        })
    }

    const applyFilters = () => {
        for (const key in listFilters) {
            if (key === 'gender' && listFilters[key]) {
                // console.log('gender')
                if(listFilters.price)
                    count = count.filter(item => item.gender === listFilters[key])
                else setNewList(items.filter(item => item.gender === listFilters[key]));
            }
            if(key === 'price' && listFilters[key] ){
                // console.log('price');
                setNewList(count.filter(item => {
                    return item.price > Number(listFilters[key]) && item.price < (Number(listFilters[key]) + 999)
                }));
            }
        }
    }

    const clearFilters = () => {
        let select  = document.querySelector('.filters-panel-selects')
        select.childNodes.forEach(item =>{
            if(item.tagName === 'select'.toUpperCase()){
                item.value = ''
            }
        })
        setNewList(items);
    }
    if(items.length===0){
        return (<div id="loader" class="loader">Loading...</div>)
    }
    return (
        <main>
            <div className='container'>
                <Filter
                    onChange = {sortPosts}
                    filterGender = {filterGender}
                    filterPrice = {filterPrice}
                    applyFilters = {applyFilters}
                    clearFilters = {clearFilters}
                />
               
                
                <div className='products'>
                    {filterProduct.length ?
                        filterProduct.map(item => <CatalogItem product={item} key={item.id} setItem={setItem} />)
                        : <h1>No products were found using these filters</h1>
                    }
                </div>
            </div>
        </main>
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
            <button className="but2-cd" >BUY NOW</button> 
        </div>
        </div>
        </>
    )
}

const Catalog =()=>{
    const [item,setItem]=useState(undefined)
    if(!item){      
        return <CatalogList setItem={setItem}/>
    }else{
        return <CatalogDitale item={item} setItem={setItem}/>
    }
}


export default Catalog;

