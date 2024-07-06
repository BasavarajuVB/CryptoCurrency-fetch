// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrencieList = props => {
  const {eachItem} = props

  return (
    <div>
      <ul>
        <CryptocurrencyItem currencyList={eachItem} />
      </ul>
    </div>
  )
}
export default CryptocurrencieList
