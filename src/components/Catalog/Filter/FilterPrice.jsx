import React from 'react';

const FilterPrice = ({onChange}) => {
    return (
        <select onChange={event => onChange(event.target.value)}>
            <option value="1000">1000-1999</option>
            <option value="2000">2000-2999</option>
            <option value="3000">3000-3999</option>
        </select>
    );
};

export default FilterPrice;