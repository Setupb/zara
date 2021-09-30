import React from 'react';

const Select = ({ data }) => {
    return (
        <div>
            <select className='filters-panel__select'>
                <option value="0">Filter {data.id}</option>
                <option value="1">item 1</option>
                <option value="2">item 2</option>
                <option value="3">item 3</option>
                <option value="4">item 4</option>
            </select>
        </div>
    );
};

export default Select;