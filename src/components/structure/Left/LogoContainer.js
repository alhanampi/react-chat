import React from 'react'
import logo from '../../../assets/logos/logo.png'

const LogoContainer = (props) => {
    return (
        <div id="leftHeader">
            <img src={logo} className="logo" />
            <h1>{props.appName}</h1>
        </div>
    )
}

export default LogoContainer
