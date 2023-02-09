import React from "react";
import './HardSkill.css'
import data from '../../data/hard_skill.json'
import HardSkillItem from "./HardSkillItem/HardSkillItem";
import { useNav } from "../../hooks/useNav";

const HardSkill = () =>{

    const hardskillRef = useNav("Hard Skill")

    return(
        <div ref={hardskillRef} className="hard-skill" id="hardskill">
            <h1 className="hard-skill-title">Hard Skill</h1>
            <hr style={{marginTop:'50px',marginBottom:'100px',border:"none",color:'rgb(169,169,169)',backgroundColor:'rgb(169,169,169)',height:'1px'}}/>
            <div className="hard-skill-content">
                {
                    data.map(item => (
                        <HardSkillItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default HardSkill