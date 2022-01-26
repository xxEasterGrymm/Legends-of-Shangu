import React, {Component} from 'react';
import mintgif from '../../images/mint.gif';
import logo from '../../images/logo.jpeg';

class mint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        if(this.state.clicks < 20) this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {
        if(this.state.clicks > 0) this.setState({ clicks: this.state.clicks - 1 });
    }

    render() {
        return (
            <div id="mint">
                <img id="mint-gif" src={mintgif} alt="Claim Legend NFT" />
                <div id="claim-text-wrapper">
                    <div id="payment-modal">
                        <div id="payment-header">
                            <div id="payment-header-text">
                                <h4>CLAIM YOUR LEGENDS</h4>
                                <p>Enter how many legends you would like to mint here</p>
                            </div>
                            <img id="payment-header-img" src={logo} alt="Legends of Shangu Logo" />
                        </div>
                        <div id="payment-info">
                            <img id="price-img" src={mintgif} alt="Claim NFT" />
                            <div id="payment-info-text">
                                <p>Price Per Legend</p>
                                <h5>0.075 ETH Each</h5>
                                <p>Public sale available 11.10.2021</p>
                            </div>
                        </div>
                        <div id="ape-number">
                            <div id="minus" onClick={this.DecreaseItem}>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z" fill="white"></path></svg>
                            </div>
                            <h5>{ this.state.show ? <span>{ this.state.clicks }</span> : '' }</h5>
                            <div id="plus" onClick={this.IncrementItem}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="white"></path></svg>
                            </div>
                            <h5 id="ape-max">20 Max</h5>
                        </div>
                        <div id="ape-total">
                            <p>Total</p><h5>{ this.state.show ? <span>{ (this.state.clicks * 0.075).toFixed(3) }</span> : '' } ETH</h5>
                        </div>
                    </div>
                    <div id="purchase-button-wrapper">
                        <a href="" rel="noreferrer" target="_blank">CHECKOUT</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default mint;