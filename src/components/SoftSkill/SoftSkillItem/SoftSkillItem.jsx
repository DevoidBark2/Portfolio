import React from "react";
import './SoftSkillItem.css';

const SoftSkillItem = ({skill}) =>{
    return(
        <div className="soft-skill-item">
            <img src={skill.img} alt="target" className="soft-skill-img"/>
            <h3 className="soft-skill-item-title">{skill.title}</h3>
        </div>
    )
}

export default SoftSkillItem;