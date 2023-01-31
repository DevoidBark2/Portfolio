import React from "react";
import './HardSkillItem.css'

const HardSkillItem = ({item}) =>{
    console.log(item)
    return(
        <div className="skill-card">
            <img src={item.image} className="card-img" alt={item.title}/>
            <div className="overlay">
                <h2 className="card-title">{item.title}</h2>
                <ul>
                    {item.skill.map(i => (
                        <li>{i.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HardSkillItem