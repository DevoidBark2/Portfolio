﻿import React from "react";
import './Main.css'
import profile_photo from '../../images/photo.jpg'
import {BsTelegram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaHandPeace} from 'react-icons/fa'

const Main = () => {
    return(
        <div className="main-content">
            <div className="main-links">
                <a href="https://github.com/DevoidBark2">
                    <AiFillGithub size={35} className="social-link"/>
                </a>
                <a href="https://t.me/devoidbark">
                    <BsTelegram size={35} className="social-link"/>
                </a>
                <a href="mailto:petros_9002@mail.ru">
                    <AiOutlineMail size={35} className="social-link"/>
                </a>
            </div>
            <div className="main-desc">
                <div className="desc-info">
                    <div className="top-desc-info">
                        <h1 style={{fontSize:'35px'}}>Петров Иван Михайлович <FaHandPeace fill="#e9aa17"/></h1>
                        <p style={{textDecoration:'underline',fontSize:'20px'}}>Junior Fronted Developer</p>
                    </div>
                    <p className="small-desc">
                        Я начинающий fronted-разработчик из Ярославля и поэтому я хочу показать свое портфолио в виде сайта.
                        Займет это у вас пару минут, но узнаете обо мне почти все.
                    </p>
                </div>
                <div className="btn-link">
                    <a href="https://t.me/devoidbark">Напиши мне</a>
                </div>
            </div>
            <div className="main-photo">
                <img src={profile_photo} alt="Profile photo" className="profile-photo"/>
            </div>
        </div>
    )
}

export default Main