import React from "react";
import './HardSkillItem.css'

const HardSkillItem = ({item}) =>{
    return(
        <div className="skill-card">
            <img src={item.image} className="card-img" alt={item.title}/>
            <div className="overlay">
                <h2 className="card-title">{item.title}</h2>
                <ul style={{marginLeft:'40px'}}>
                    {item.skill.map(i => (
                        <li key={i.id}>{i.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HardSkillItem