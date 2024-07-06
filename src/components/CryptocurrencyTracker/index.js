// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyData} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="head-img">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="currency-img"
            />
            <div className="currency-list-container">
              <div className="header-con">
                <p className="coin-type">Coin Type</p>
                <div className="currency-types">
                  <p className="usd1">USD</p>
                  <p className="usd">EURO</p>
                </div>
              </div>
              {currencyData.map(eachOne => (
                <CryptocurrenciesList eachItem={eachOne} key={eachOne.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
