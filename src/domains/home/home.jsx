import React, { useContext } from 'react'
import './home.scss'
import { BriefcaseContext } from '../../context/context'
import PageLayout from '../container/page-layout'
import HomeImage from './components/home-image/home-image'
import HomeInformation from './components/home-information/home-information'

const Home = () => {

    const context = useContext(BriefcaseContext)

    console.log(context);

    return (
        <div className="home">

            <PageLayout 
                left={<HomeImage />}
                right={<HomeInformation />}
            />
            
          
            
            
        </div>
    )
}

export default Home
