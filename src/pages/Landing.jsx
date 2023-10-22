import { useLoaderData } from 'react-router-dom'
import { customFetch, removeDataFromLocalStorage } from '../utils'
import { storeCurrenciesData } from '../features/currencies/currenciesSlice'
import { store } from '../store'
import { TableComponent } from '../components'

export const loader = async () => {
  // at start, there is no chosen currency
  removeDataFromLocalStorage('currentCurrency')

  // currencies from API, 5 taken
  const { data: responseCurrencies } = await customFetch('/symbols')
  const currencies = responseCurrencies.slice(0, 5)

  // data for all 5 currencies in one array
  const responseForAll = await Promise.all(
    currencies.map((currencies) => customFetch(`/currencies/${currencies}`))
  )
  const arrayWithDataForTable = responseForAll
    // bunch of data
    .map((item) => item.data)
    // take only what is neccessery
    .map((value) => {
      return {
        lastPrice: value.last_price,
        change: (value.high - value.low).toFixed(4),
        changePercent: `+${(
          ((value.high - value.low) / value.low) *
          100
        ).toFixed(2)} %`,
        high: value.high,
        low: value.low,
      }
    })
    // make array
    .map((forTable) => Object.values(forTable))
    // insert currency symbol
    .map((array, index) => [currencies[index], ...array])

  store.dispatch(storeCurrenciesData(arrayWithDataForTable))

  // from loader
  return {
    arraysOfData: arrayWithDataForTable,
  }
}

const Landing = () => {
  const { arraysOfData } = useLoaderData()
  return (
    <>
      <TableComponent
        rows={arraysOfData}
        headers={['Name', 'Last', 'Change', 'Change Percent', 'High', 'Low']}
        haveLinks={true}
      />
    </>
  )
}

export default Landing
