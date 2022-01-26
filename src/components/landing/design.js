import React, { PureComponent } from 'react'
import Pagoda from '../../images/pagoda.png'
import sword1 from '../../images/sword 1.png'
import sword2 from '../../images/sword 2.png'

export default class Roadmap extends PureComponent {
    render() {
        return (
            <div id='design'>
                <img id='pagoda' src={Pagoda} alt=""/>
                <img id='sword1' src={sword1} alt=""/>
                <img id='sword2' src={sword2} alt=""/>
            </div>
        )
    }
}
