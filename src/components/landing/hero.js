import React, { PureComponent } from 'react'

export default class Hero extends PureComponent {
    render() {
        return (
            <div>
                <div id="hero-image"></div>
                <div id="countdown-clock">
                    <h2 id="countdown-text">COUNTDOWN TO PUBLIC SALE</h2>
                    <ul>
                        <li id="days"><h3>0</h3><h4>DAYS</h4></li>
                        <li id="hours"><h3>0</h3><h4>HOURS</h4></li>
                        <li id="minutes"><h3>0</h3><h4>MINUTES</h4></li>
                        <li id="seconds"><h3>0</h3><h4>SECONDS</h4></li>
                    </ul>
                </div>
            </div>
        )
    }
}
