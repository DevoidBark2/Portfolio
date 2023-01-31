import React from 'react'
import './About.css'
import photo from '../../images/photo.jpg'
import {AiOutlineCode} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
const About = () =>{  
    return(
        <div className="about">
            <h1 className="about-title">Обо мне</h1>
            <div className="about-content">
                <div className="content-photo">
                    <img src={photo} alt="Photo"/>
                </div>
                <div className="content-desc_1">
                   <div className="content-desc">
                       <div className="block">
                           <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                               <AiOutlineCode size={30}/>
                               <b style={{fontSize:'30px'}}>5 лет</b>
                               <p style={{fontSize:'15px'}}>в программировании</p>
                           </div>
                       </div>
                       <div className="block">
                           <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                               <IoLogoJavascript size={30}/>
                               <b style={{fontSize:'30px'}}>2 года</b>
                               <p style={{fontSize:'15px'}}>в Frontend</p>
                           </div>
                       </div>
                   </div>
                    <div style={{marginTop:'50px',maxWidth:'500px'}}>
                        Занимаюсь программированием около 5 лет,в Fronted примерно 2 года. Создаю веб-приложения на <strong>React</strong> и мобильные 
                        приложения на <strong>React Native</strong>. Имеется базовый опыт в <strong>Python</strong> и работал с некоторыми модулями(OpenCV,requests,beautifulsoup)
                    </div>
                    <div className="download_btn">
                        <a href='#'>Скачать PDF</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About