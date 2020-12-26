import React from 'react';
// import Modal from '../Modal'
import './item.css';
const Item = (props) => {

  // const [isOpenModalWindow, setOpenModalWindow] = useState(false);
  
    return (
      
          <div className="item">
            <img src={props.picture} alt='#'/>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Balance: {props.balance}</p>
          </div>
        
        );
  }

  export default Item;