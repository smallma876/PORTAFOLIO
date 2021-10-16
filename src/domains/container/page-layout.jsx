import React from 'react'
import './page-layout.scss'

const PageLayout = ({left, right}) => {
    return (
        <div className="pagelayout">
            <div className="pagelayout__left">
                {left}
            </div>
            <div className="pagelayout__right">
                {right}
            </div>
        </div>
    )
}

export default PageLayout
