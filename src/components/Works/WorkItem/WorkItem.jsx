import React, {useState} from "react";
import './WorkItem.css'
import {BsArrowRight} from 'react-icons/bs';
const WorkItem = ({work}) =>{

    const [openCard,setOpenCard] = useState(false);
    const handleModal = () =>{
        setOpenCard(true);
    }

    return(
         <div className="work-item">
             {
                 openCard
                     ? <div onClick={() => setOpenCard(false)}>{work.description}</div>
                     :
                     <div>
                         <div>
                             <img src={work.image} className="work-item-img" alt="work-image"/>
                         </div>
                         <div>
                             <p>{work.title}</p>
                         </div>
                         <div onClick={() => handleModal()} className="open-more">
                             <p>Раскрыть</p>
                             <BsArrowRight fill="#bdbcbc"/>
                         </div>
                     </div>
             }
         </div>
    )
}
export default WorkItem