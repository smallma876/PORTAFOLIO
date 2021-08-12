import React from 'react'
import './home.scss'
import * as mi from '@material-ui/icons'

const Home = () => {
    return (
        <div className="home">
            <div className="home__information">
                <h1 className="home__name">Sergio Mallma</h1>
                <span className="home__skills">
                    aquí van los skills
                </span>

                <div className="home__socialnetwork">
                    
                    <ul className="home_list">
                        <li className="home__item">
                            <a className="home__link" href="#">
                                <mi.Facebook fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="home__item">
                            <a className="home__link" href="#">
                                <mi.Instagram fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="home__item">
                            <a className="home__link" href="#">
                                <mi.LinkedIn fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="home__item">
                            <a className="home__link" href="#">
                                <mi.GitHub fontSize="large" color="inherit"/>
                            </a>
                        </li>
                    </ul>
           
                </div>
            </div>
            
                
        
        </div>
    )
}

export default Home
