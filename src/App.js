import React, { Component } from 'react';
import './App.css';
import CryptoMarket from './CryptoMarket';

class App extends Component {
  render () {
    return (
      <section className="App">
      <h1>Up to date Crypto Currencies</h1>
      <table>
        <tbody>
          <tr>
            <th>Icon</th>
            <th className='currencyName'>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th className='hourlyChange'>Change Last HR</th>
            <th className='dailyChange'>Change Last 24HR</th>
          </tr>
          <CryptoMarket />
        </tbody>
      </table>
      </section>
    );
  }
}

export default App;
