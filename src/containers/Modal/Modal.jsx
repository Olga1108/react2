import React from 'react';
import './modal.css';

const Modal = ({props, handeModal}) => {
    const closeWindow = (e) => {
        if (e.target.classList.contains("modal")) {
            handeModal();
        }
    }

    return (
        <div className="modal_window" onClick={closeWindow}>
            <span className="close" onClick={handeModal}>X</span>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Balance: {props.balance}</p>
            <p>Company: {props.company}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>Address: {props.address}</p>
            <p>Registered: {props.registered}</p>
            <p>Eye color: {props.eyeColor}</p>
            <p>{props.isActive}</p>
        </div>
    )
}

export default Modal;