import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar-lateral.scss'


const NavbarLateral = () => {

    return (
        <nav className="navbar-lateral">
                    
            <div>
                <ul className="navbar-lateral__list">
                    <li>
                        <NavLink exact activeClassName="navbar-lateral--active" to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="navbar-lateral--active" to="/aboutme" >Acerca de mi</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="navbar-lateral--active" to="/featured">Opciones</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="navbar-lateral--active" to="/portfolio">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="navbar-lateral--active" to="/contact">Contacto</NavLink>
                    </li>
                </ul>
            </div>        
        </nav>
    )
}

export default NavbarLateral
