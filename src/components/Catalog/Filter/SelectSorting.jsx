import React from 'react';

const SelectSorting = ({items, onChange}) => {
    // console.log(items)
    return (
        <select onChange={event => onChange(event.target.value)}>
            <option disabled value="">сортування</option>
            <option  value="price">по цінах</option>
            <option  value="name">по назві</option>
        </select>
    );
};

export default SelectSorting;