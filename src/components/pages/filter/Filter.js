import React from 'react';
import Select from "./Select";
import FilterButton from "./FilterButton";

const Filter = () => {
    const data = [{
        id:1,
    }, {
        id:2,
    }, {
        id:3,
    }]

    return (
        <div className='filters-panel'>
            <div className="filters-panel-selects">
                {data.map(item =>
                <Select data={item} key={item.id}/>)}
            </div>
            <FilterButton/>
        </div>
    );
};

export default Filter;