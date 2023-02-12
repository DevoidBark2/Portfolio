import React, {useContext} from "react";
import './Header.css'
import { NavContext } from "../../context/navContext";

const Header = () =>{

    const {activeLinkId} = useContext(NavContext)

    const navLinks = ["Main","About","Hard Skill","Soft Skill","Works","Contacts"]

    const renderNavLink = (content) =>{
        const scrollId = `${content.replace(/\s/g, '').toLowerCase()}`;

        const handleClickNav = () => {
            document.getElementById(scrollId).scrollIntoView({behavior:'smooth'})
        }

        return (
            <p key={content} className={activeLinkId === content ? "header-link activeClass" : "header-link"} onClick={handleClickNav}>
                {content}
            </p>
        )
    }
    return( 
        <div className="header">
            <div className="github-content">
                <a href="https://github.com/DevoidBark2" className="github-link">
                    <img src="/images/github.png" alt="github" width={50} height={50} className="github_logo"/>
                    <p className="github_name">DevoidBark2</p>
                </a>
            </div>
            
            <nav className="header-nav">
                {navLinks.map(nav => renderNavLink(nav))}
            </nav>
        </div>
    )
}

export default Header