import React from 'react'
import * as mi from '@material-ui/icons'
import './home-information.scss'

const HomeInformation = () => {
    return (
        <div className="homeinformation">
                <h1 className="homeinformation__name">Sergio Mallma</h1>
                <span className="homeinformation__skills">
                    aquí van los skills
                </span>

                <div className="homeinformation__socialnetwork">
                    
                    <ul className="homeinformation__list">
                        <li className="homeinformation__item">
                            <a className="homeinformation__link" href="#">
                                <mi.Facebook fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="homeinformation__item">
                            <a className="homeinformation__link" href="#">
                                <mi.Instagram fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="homeinformation__item">
                            <a className="homeinformation__link" href="#">
                                <mi.LinkedIn fontSize="large" color="inherit"/>
                            </a>
                        </li>
                        <li className="homeinformation__item">
                            <a className="homeinformation__link" href="#">
                                <mi.GitHub fontSize="large" color="inherit"/>
                            </a>
                        </li>
                    </ul>
           
                </div>
            </div>
    )
}

export default HomeInformation
