import React,{useState} from 'react';
import Catalog from '../Catalog';

const Input = ({ count }) => {
    console.log(count)
    const classes = ['header-search', 'minOpacity']
    if(count){
        classes.pop()
    }
    return (
        <div className= {classes.join(' ')} >
            <span/>
            <input type="text"/>
        </div>
    );
};



export default Input;