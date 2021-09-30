import React from 'react';

const FilterGender = ({onChange}) => {
    return (
        <select onChange={event => onChange(event.target.value)}>
            <option value="men">Men</option>
            <option value="women">woman</option>
            <option value="kids">Kids</option>
        </select>
    );
};

export default FilterGender;