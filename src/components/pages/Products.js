import React from "react";
import '../../style/Catalog/buttonCatalogmodules.css'
import "../../style/Catalog/catalogmodules.css"
import CatalogButton from "./CatalogButton";

const Products =function({products}){
    return(
        <div className='product-position'>
            <h3>{products.typeProduct}</h3>
            <img src={products.foto} alt='foto prod'/>
            <h4>{products.name}</h4>
            <p className='product-position-description'>{products.description}</p>
            <div className='product-position-price'>
                <p>Price:</p>
                
                <p className='product-position-price'>{products.price}</p>
            </div>
            <CatalogButton/>
        </div>
    )

}
export default Products;