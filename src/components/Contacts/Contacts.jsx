import React from "react";
import "./Contacts.css";
import {useNav} from "../../hooks/useNav";

const Contacts = () =>{
    const contactsRef = useNav("Contacts")
    return(
        <div ref={contactsRef} className="contacts" id="contacts">
            Contacts
        </div>
    )
}
export default Contacts;