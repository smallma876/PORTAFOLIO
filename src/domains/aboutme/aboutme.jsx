import React from 'react'
import './aboutme.scss'

import AboutmeImage from './components/aboutme-image/aboutme-image'
import AboutmeInformation from './components/aboutme-information/aboutme-information'
import PageLayout from '../container/page-layout'

const AboutMe = () => {
    return (
        <div className="aboutme">
            
            
            <PageLayout 
                left={<AboutmeImage />}
                right={<AboutmeInformation />}
            />
        </div>
       
    )
}

export default AboutMe
