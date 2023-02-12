import React from "react";
import "./Modal.css";

const Modal = ({isOpened}) =>{
    return(
        <div className={`modal-wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal-body">
                <div className="modal-close">*</div>
                <h2>Title</h2>
                <hr/>
                dsdsdd
            </div>
        </div>
    )
}

export default Modal;