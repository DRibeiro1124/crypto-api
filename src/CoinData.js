import React, { Component } from 'react';
import  Coins from './Coins';

class CoinData extends Component {

constructor(props) {
    super(props)
    this.state = {
        // Condition: '...patience my young Padawan...',
    }
}    

componentDidMount () {
    const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20"
    fetch(_url).then(resp => resp.json())
        .then(newCoinData => {
            console.log(newCoinData)
            let cryptoCoins = Object.values(newCoinData.data)
            console.log(cryptoCoins)
            this.setState({
                coinArray : cryptoCoins
            })
            // console.log(this.state.coinArray[0].name)
            // console.log(this.state.coinArray[1].name)
            // console.log(this.state.coinArray[2].name)
            // console.log(this.state.coinArray[3].name)
            // console.log(this.state.coinArray[4].name)
        })
}


    render () {
        return (
            <div>
                Current up to date Crypto Currency info:
                {/* <div>
                    <Coins cryptoCoins={this.state.cryptoCoins}
                </div> */}
            </div>           
        );
    }
}

export default CoinData;     