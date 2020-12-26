import React from 'react';
import './select.css';

const Select = ({name, handleSortAge}) => {
    return (
        <select name={name} onChange={(e) => handleSortAge(e.target.value)}>
                    <option value="default">default</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
    )
}

export default Select;
