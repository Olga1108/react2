import React from 'react';
import './button.css';

const Button = ({clear}) => {

  return (
      
      <button className="clear" onClick={clear}>Clear</button>    
        
        );
  }

  export default Button;