import React, { Component } from 'react';

class CoinMarket extends Component {

constructor(props) {
    super(props)
    this.state = {
        Id: 'loading...',
        Name: '',
        Symbol: '',
        Rank: '',
        Currency: '',
        Updated: ''
    }
}    

componentDidMount () {
    const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20"
    fetch(_url).then(resp => resp.json())
    .then(newCoinMarket => {
        console.log(newCoinMarket)
    })
}


    render () {
        return (
            <div>
                Current up to date Crypto Currency info:
                <div>
                {this.state.Id}
                </div>
            </div>
            
               
            
        );
    }
}

export default CoinMarket;     