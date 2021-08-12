import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Header from './components/header/header';
import AboutMe from './domains/aboutme/aboutme';
import Contact from './domains/contact/contact';
import Featured from './domains/featured/featured';
import Home from './domains/home/home';
import NotFoundPage from './domains/not-found-page/not-found-page';
import Portfolio from './domains/portfolio/portfolio';
import './router.scss'

const Router = () => {

    return (
        <BrowserRouter>
            <Header></Header>
            <section className="content">
                <Switch>
                    <Route exact path="/aboutme" component={AboutMe}/>
                    <Route exact path="/featured" component={Featured}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </section>
            
        </BrowserRouter>
    )
}

export default Router
