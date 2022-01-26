import React, { PureComponent } from 'react'
import Legend1 from '../../images/Legend 1.jpeg'
import Legend2 from '../../images/Legend 2.jpeg'
import Legend3 from '../../images/Legend 3.jpeg'
import Legend4 from '../../images/Legend 4.jpeg'

export default class Artwork extends PureComponent {
    render() {
        return (
            <div id="rare-spec">
                <div id="rare-spec-text-wrapper">
                    <h3>THE ARTWORK</h3>
                    <p>
                        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et ipsum et ex lobortis consequat nec at mi. Quisque sit amet tortor vitae sem egestas consequat id in ligula.</b><br/><br/>
                        Vivamus euismod convallis nisi a iaculis. In hac habitasse platea dictumst. Mauris eget aliquet enim. Vestibulum placerat nunc id orci fermentum dignissim. Nullam non massa cursus, viverra enim sit amet, sodales ipsum. Morbi a aliquet dolor. Ut molestie mattis eleifend. Sed non dolor metus.<br/><br/>
                        Suspendisse mi nunc, commodo id mollis a, aliquam quis nibh. Nulla eu nisi metus. Vestibulum id nunc ornare arcu auctor efficitur quis quis nibh. Fusce quis augue nibh. Nunc bibendum dui turpis. Curabitur vitae nisi ac felis sagittis fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus aliquam lacinia massa, id ullamcorper nisi condimentum quis. Nunc iaculis sed lectus sed rhoncus. Mauris vel pharetra odio, vitae elementum dui. Fusce ac tempor metus, ut consequat nulla. Mauris ac leo orci.
                    </p>
                </div>
                <div id="artwork-image-wrapper">
                    <img src={Legend1} alt="" />
                    <img src={Legend2} alt="" />
                    <img src={Legend3} alt="" />
                    <img src={Legend4} alt="" />
                </div>
            </div>
        )
    }
}
