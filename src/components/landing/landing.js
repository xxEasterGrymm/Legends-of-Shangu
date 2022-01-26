import React from 'react';
import Hero from './hero';
import Mint from './mint';
import Featured from './featured';
import Design from './design';
import Artwork from './artwork';
import Story from './story';
import FAQ from './faq';

export default class Landing extends React.Component {
    render() {
        return (
            <div id="landing">
                <Hero />
                <Mint />
                <Artwork />
                <Story />
                <Featured />
                <Design />
                <FAQ />
            </div>
        );
    }
}