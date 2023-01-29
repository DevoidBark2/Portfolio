import React from "react";
import './Works.css'
import data from '../../data/db.json'
import WorkItem from "../WorkItem/WorkItem";

const Works = () => {
    return(
        <div className="block-works">
            <h1>Мои работы</h1>
            {
                data.map(work =>(
                    <WorkItem name={work.name}/>
                ))
            }
        </div>
    )
}
export default Works