import React, { PureComponent } from 'react'
import Legend1 from '../../images/Legend 1.jpeg'
import Legend2 from '../../images/Legend 2.jpeg'
import Legend3 from '../../images/Legend 3.jpeg'
import Legend4 from '../../images/Legend 4.jpeg'
import Legend5 from '../../images/Legend 5.jpeg'
import Legend6 from '../../images/Legend 6.jpeg'


export default class featured extends PureComponent {
    render() {
        return (
            <div id="featured">
                <h3>FEATURED LEGENDS</h3>
                <div className="image-gallery">
                    <span>
                        <img src={Legend1} alt="" />
                        <img src={Legend2} alt="" />
                        <img src={Legend3} alt="" />
                        </span>
                        <span>
                        <img src={Legend4} alt=""/>
                        <img src={Legend5} alt=""/>
                        <img src={Legend6} alt=""/>
                    </span>
                </div>
            </div>
        )
    }
}
