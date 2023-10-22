import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import { store } from '../store'
import { TableComponent } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToFavoritesList,
  removeFromFavoritesList,
} from '../features/currencies/currenciesSlice'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../utils'
import { toast } from 'react-toastify'

export const loader = async ({ params }) => {
  const { id } = params
  console.log(id)
  // all favorites from redux store

  const currentCurrencyFromLocalStorage =
    getDataFromLocalStorage('currentCurrency')

  if (
    !!currentCurrencyFromLocalStorage &&
    currentCurrencyFromLocalStorage[0] === id
  ) {
    return {
      currentCurrencyForTableArray: currentCurrencyFromLocalStorage,
    }
  }

  // all currencies from redux store
  const currenciesList = store.getState().currencies.currenciesList

  // finding one that we need in store
  const currentCurrency = currenciesList.filter(
    (currency) => currency.at(0) === id
  )

  // adjust current currency data for tabele
  const currentCurrencyForTableArray = [
    ...currentCurrency.at(0).slice(0, 2),
    ...currentCurrency.at(0).slice(-2),
  ]

  addDataToLocalStorage('currentCurrency', currentCurrencyForTableArray)

  return { currentCurrencyForTableArray }
}

const Details = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // data from loader
  const { currentCurrencyForTableArray } = useLoaderData()

  // check logg status and take favorite currency list from store
  const isLogged = useSelector((store) => store.currencies.isLogged)
  const favoritesList = store.getState().currencies.favoritesList

  // adding to favorite list in store, showing toast with message, navigate to favorites page
  const handleAddToFavoritesList = (current) => {
    toast.success('Currency is added successfully')

    const favoriteCurrenciesFromLS =
      getDataFromLocalStorage('favoriteCurrencies') ?? []

    dispatch(addToFavoritesList(current))

    addDataToLocalStorage('favoriteCurrencies', [
      ...favoriteCurrenciesFromLS,
      current,
    ])

    navigate('/favorites')
  }

  // check is currency already in favorites table
  // if it is, then button is for remove
  const isSingleCurrencyInFavoritesList = (current) => {
    const isInside = favoritesList.some((favorite) =>
      favorite.includes(current[0])
    )
    return isInside
  }

  const isAlreadyInside = isSingleCurrencyInFavoritesList(
    currentCurrencyForTableArray
  )

  // remove from favorites list, showing toast with message, go to favorites page
  const handleRemoveFromFavorites = (current) => {
    toast.success('Currency removed from favorites')

    dispatch(removeFromFavoritesList(current))

    const favoriteCurrenciesFromLS =
      getDataFromLocalStorage('favoriteCurrencies') ?? []

    addDataToLocalStorage(
      'favoriteCurrencies',
      favoriteCurrenciesFromLS.filter((favorites) => {
        return favorites[0] !== current[0]
      })
    )
    navigate('/favorites')
  }

  return (
    <div>
      <TableComponent
        headers={['Symbol', 'Last Price', 'High', 'Low']}
        rows={[currentCurrencyForTableArray]}
        haveLinks={false}
      />
      {/*** one button if currency is inside favorites, other if is not ***/}
      {isLogged &&
        (isAlreadyInside ? (
          <button
            className='btn btn-warning mt-4 hover:shadow-md'
            onClick={() =>
              handleRemoveFromFavorites(currentCurrencyForTableArray)
            }
          >
            Remove From Favorites
          </button>
        ) : (
          <button
            className='btn btn-success mt-4 hover:shadow-md'
            onClick={() =>
              handleAddToFavoritesList(currentCurrencyForTableArray)
            }
          >
            Add To Favorites
          </button>
        ))}
    </div>
  )
}

export default Details
