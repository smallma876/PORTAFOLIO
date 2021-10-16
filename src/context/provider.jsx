import React, { useReducer } from 'react'
import { BriefcaseContext } from './context'
import { briefcaseReducer } from './reducer'

let initialState = {
    nombre:"sergio"
}

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(briefcaseReducer, initialState)

    return (
        <BriefcaseContext.Provider value={{
            state,dispatch
        }}>
            {children}
        </BriefcaseContext.Provider>
    )
}

export default Provider
