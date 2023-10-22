import { createSlice } from '@reduxjs/toolkit'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../../utils'

const initialState = {
  currenciesList: [],
  isLoading: true,
  isLogged: getDataFromLocalStorage('logged'),
  currentCurrency: getDataFromLocalStorage('currentCurrency') || [],
  favoritesList: [],
}

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    storeCurrenciesData: (state, { payload }) => {
      state.currenciesList = payload
    },
    logUserIn: (state) => {
      addDataToLocalStorage('logged', true)
      state.isLogged = true
    },
    storeCurrentCurrency: (state, { payload }) => {
      state.currentCurrency = payload
    },
    addToFavoritesList: (state, { payload }) => {
      state.favoritesList.push(payload)
    },
    removeFromFavoritesList: (state, { payload }) => {
      const newList = state.favoritesList.filter((favorites) => {
        return favorites[0] !== payload[0]
      })
      state.favoritesList = newList
    },
  },
})

export const {
  storeCurrenciesData,
  logUserIn,
  storeCurrentCurrency,
  addToFavoritesList,
  removeFromFavoritesList,
} = currenciesSlice.actions
export default currenciesSlice.reducer
