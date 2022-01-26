import React, { PureComponent } from 'react'
import logo from '../../images/logo.jpeg'

export default class Header extends PureComponent {
    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div id="logo-wrapper-wrapper">
                        <div id="logo-wrapper">
                            <img src={logo} alt="Legends of Shangu" />
                            <h3>Legends of Shangu</h3>
                        </div>
                    </div>
                    <div id="nav-wrapper">
                        <a href="#mint">Mint</a>
                        <a href="#story">Story</a>
                        <a href="#featured">Featured Legends</a>
                        <a id="faq-nav" href="#faq">FAQ</a>
                        <a id="coming-soon-nav" href="" rel="noreferrer" target="_blank">Public Sale - SOLD OUT</a>                    
                    </div>
                    <div id="nav-wrapper-mobile">
                        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5C0 1.39543 0.89543 0.5 2 0.5H30C31.1046 0.5 32 1.39543 32 2.5C32 3.60457 31.1046 4.5 30 4.5H2C0.89543 4.5 0 3.60457 0 2.5ZM0 12.5C0 11.3954 0.89543 10.5 2 10.5H30C31.1046 10.5 32 11.3954 32 12.5C32 13.6046 31.1046 14.5 30 14.5H2C0.89543 14.5 0 13.6046 0 12.5ZM0 22.5C0 21.3954 0.89543 20.5 2 20.5H30C31.1046 20.5 32 21.3954 32 22.5C32 23.6046 31.1046 24.5 30 24.5H2C0.89543 24.5 0 23.6046 0 22.5Z" fill="white"></path></svg>
                    </div>
                </div>
            </header>
        )
    }
}
