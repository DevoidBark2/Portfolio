import React from "react";
import './HardSkill.css'
import data from '../../data/hard_skill.json'
import HardSkillItem from "./HardSkillItem/HardSkillItem";

const HardSkill = () =>{
    return(
        <div className="hard-skill">
            <h1>Hard Skill</h1>
            <div className="hard-skill-content">
                {
                    data.map(item => (
                        <HardSkillItem item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default HardSkill