
import React from "react";
import '../../style/Catalog/buttonCatalog.modules.scss'
import CatalogButton from "./CatalogButton";
import '../../style/Catalog/catalog-cd.css'

const CatalogItem =function({product, setItem}){
   
    return(
        <div className='product-position'>
            <h3>{product.typeProduct}</h3>
            <img src={product.foto} alt='foto prod'/>
            <h4>{product.name}</h4>
            <p className='product-position-description'>{product.description}</p>
            <div className='product-position-price'>
                <p>Price:</p>
                <p className='product-position-price'>{product.price}</p>
            </div>
            <button className="view-but" onClick={()=>setItem(product)}>View</button>
        </div>
    )
}

export default CatalogItem;