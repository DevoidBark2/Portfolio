import React from "react";
import './WorkItem.css'

const WorkItem = ({work}) =>{
    console.log(work)
    return(
        <div className="work-item">
            <img src={work.image} className="work-item-img" alt="work-image"/>
            <p>{work.title}</p>
        </div>
    )
}
export default WorkItem