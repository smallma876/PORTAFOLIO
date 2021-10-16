import React from 'react'
import Router from './router';
import './app.scss'
import Provider from './context/provider';

const App = () => {
    return(
        <Provider>
            <Router />
        </Provider>
    )
}

export default App;