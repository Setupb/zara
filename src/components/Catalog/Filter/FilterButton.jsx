import React from 'react';

const FilterButton = ({applyFilters}) => {
    return (
        <button className='filter__button' onClick={() => applyFilters()}>Apply</button>
    );
};

export default FilterButton;