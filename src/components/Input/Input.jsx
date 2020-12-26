import React from 'react';
import './input.css';

const Input = (props) => {
    return (
        <input 
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => {props.handleSearchName(e.target.value)}}
        />
    )
}

export default Input;