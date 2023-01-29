import React, {useState} from "react";
import './Header.css'
import {AiFillGithub} from 'react-icons/ai'

const Header = () =>{
    return(
        <div className="header">
            <div className="github-content">
                <a href="https://github.com/DevoidBark2" className="github-link">
                    <AiFillGithub size={25}/>
                    <p className="github_name">DevoidBark2</p>
                </a>
            </div>
            
            <nav className="header-nav">
                <a href="#" className="header-link">Главная</a>
                <a href="#" className="header-link">Обо мне</a>
                <a href="#" className="header-link">Soft skill</a>
                <a href="#" className="header-link">Hard skill</a>
                <a href="#" className="header-link">Контакты</a>
            </nav>
        </div>
    )
}

export default Header