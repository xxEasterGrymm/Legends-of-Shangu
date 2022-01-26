import React, { PureComponent } from 'react'
import logo from '../../images/logo.jpeg'

export default class Footer extends PureComponent {
    render() {
        return (
            <div>
                <footer>
                <div id="footer-wrapper">
                    <img id="footer-logo" src={logo} alt="Legends of Shangu logo" />
                    <div id="quick-links"><h5>Quick Links</h5><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">Discord</a><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">Twitter</a><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">Instagram</a><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">OpenSea</a><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">Etherscan</a>
                    </div>
                    <div id="company"><h5>Company</h5><br/><br/>
                        <a href="" rel="noreferrer" target="_blank">BlokMiners</a><br/><br/>
                        <a href="mailto:">Contact Us</a>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}
