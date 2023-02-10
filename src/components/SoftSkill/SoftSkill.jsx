import React from "react";
import './SoftSkill.css'
import {useNav} from "../../hooks/useNav";
import data from '../../data/soft_skill.json';
import SoftSkillItem from "./SoftSkillItem/SoftSkillItem";
const SoftSkill = () =>{
    const softskillRef = useNav("Soft Skill");

    return(
        <div ref={softskillRef} className="soft-skill" id="softskill">
            <h1 className="soft-skill-title">Soft Skill</h1>
            <hr style={{marginTop:'50px',marginBottom:'100px',border:"none",color:'rgb(169,169,169)',backgroundColor:'rgb(169,169,169)',height:'1px'}}/>
            <div className="soft-skill-items">
                    {data.map(skill => (
                        <SoftSkillItem skill={skill}/>
                    ))}
            </div>
        </div>
    )
}

export default SoftSkill