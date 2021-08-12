import React, { useEffect, useState, useRef } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './header.scss'
import { NavLink } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useMediaQuery } from '@material-ui/core';

const Header = () => {

    const [showMenuLateral, setShowMenuLateral ] = useState(false);
    const navbar = useRef();
    const matches = useMediaQuery('(min-width:768px)')

    const getMenuIcon = () => {

        if(!matches){

            return <div className="header__icons">
                        <NavLink to="#">
                            <MenuIcon className={"header__open-icon"} onClick={()=> setShowMenuLateral(true)}/>
                        </NavLink>
                        
                    </div>

        }

        return null;

    }

    const getCloseIcon = () => {

        if(!matches){

            return <li className="header__close">
                        <NavLink exact activeClassName="header__link" to="#">
                            <CloseIcon className={"header__close-icon"} onClick={()=> setShowMenuLateral(false)}/>
                        </NavLink>
                        
                    </li>

        }

        return null;

    }

    const menuIcon = getMenuIcon();
    const closeIcon = getCloseIcon();
    
    useEffect(() => {
        
        const setMenuLateral = (event) => {
            
            if(showMenuLateral && !event.target.closest('.header__navbar')){
                
                setShowMenuLateral(false)
            }
        }


        window.addEventListener('click', setMenuLateral)

        return () => {
           
            window.removeEventListener('click', setMenuLateral)
        }
    }, [showMenuLateral])

    return (
        <header className="header">
            
            {menuIcon}
            <nav ref={navbar} className={`header__navbar ${ showMenuLateral?"header--active":""}`}>
                    
                    <ul className="header__list">
                        
                        {closeIcon}
                        <li className="header__li">
                            <NavLink exact activeClassName="header__link" to="/">Inicio</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink exact activeClassName="header__link" to="/aboutme" >Acerca de mi</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink exact activeClassName="header__link" to="/featured">Opciones</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink exact activeClassName="header__link" to="/portfolio">Portafolio</NavLink>
                        </li>
                        <li className="header__li">
                            <NavLink exact activeClassName="header__link" to="/contact">Contacto</NavLink>
                        </li>
                    </ul>
                           
            </nav>
        </header>
    )
}

export default Header
