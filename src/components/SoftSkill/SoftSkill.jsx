import React from "react";
import './SoftSkill.css'
import {useNav} from "../../hooks/useNav";
import data from '../../data/soft_skill.json';
const SoftSkill = () =>{
    const softskillRef = useNav("Soft Skill");

    return(
        <div ref={softskillRef} className="soft-skill" id="softskill">
            <h1 className="soft-skill-title">Soft Skill</h1>
            <div className="soft-skill-items">
                <ul>
                    {data.map(skill => (
                        <li className="soft-skill-item">{skill.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SoftSkill