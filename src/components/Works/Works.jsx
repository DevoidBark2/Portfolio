import React from "react";
import './Works.css'
import data from '../../data/db.json'
import WorkItem from "./WorkItem/WorkItem";
import {useNav} from "../../hooks/useNav";

const Works = () => {
    const worksRef = useNav("Works");

    return(
        <div ref={worksRef} className="block-works" id="works">
            <h1 className="works-title">Мои работы</h1>
            <hr style={{marginTop:'50px',marginBottom:'70px',border:"none",color:'rgb(169,169,169)',backgroundColor:'rgb(169,169,169)',height:'1px'}}/>
            <div className="categories-block">
                <ul className="categories-nav-menu">
                    <li className="categories-item">Все</li>
                    <li className="categories-item">Веб-приложения</li>
                    <li className="categories-item">Десктопные приложения</li>
                </ul>
            </div>
            <div className="work-items">
                {
                    data.map(work =>(
                        <WorkItem work={work}/>
                    ))
                }
            </div>
            {/*<Modal*/}
            {/*isOpened={true}*/}
            {/*/>*/}
        </div>
    )
}
export default Works