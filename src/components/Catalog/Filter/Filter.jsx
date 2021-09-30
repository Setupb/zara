import React from 'react';
import FilterButton from "./FilterButton";
import SelectSorting from "./SelectSorting";
import FilterGender from "./FilterGender";
import FilterPrice from "./FilterPrice";

const Filter = ({  onChange ,filterGender, filterPrice, applyFilters}) => {


    return (
        <div className='filters-panel'>
            <div className="filters-panel-selects">
                <SelectSorting  onChange = {onChange}/>
                <FilterGender onChange = {filterGender}/>
                <FilterPrice onChange = {filterPrice}/>
            </div>
            <FilterButton applyFilters = {applyFilters}/>
        </div>
    );
};

export default Filter;