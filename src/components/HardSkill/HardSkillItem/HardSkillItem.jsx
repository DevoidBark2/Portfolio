import React from "react";
import './HardSkillItem.css'

const HardSkillItem = ({item}) =>{
    console.log(item.image)
    return(
        <div className="skill-card">
            <img src={item.image} className="card-img"/>
            <h2 className="card-title">{item.title}</h2>
        </div>
    )
}

export default HardSkillItem