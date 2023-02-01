import React from "react";
import './HardSkill.css'
import data from '../../data/hard_skill.json'
import HardSkillItem from "./HardSkillItem/HardSkillItem";
import { useNav } from "../../hooks/useNav";

const HardSkill = () =>{

    const hardskillRef = useNav("HardSkill")

    return(
        <div ref={hardskillRef} className="hard-skill" id="hardskill">
            <h1 className="hard-skill-title">Hard Skill</h1>
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