// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyList} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = currencyList
  return (
    <li>
      <div className="currency-list-item">
        <div className="logo-name-con">
          <img src={currencyLogo} className="logo" alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="values">
          <p className="digit-val">{usdValue}</p>
          <p className="digit-val1">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
