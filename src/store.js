import { configureStore } from '@reduxjs/toolkit'
import currenciesSlice from './features/currencies/currenciesSlice'

export const store = configureStore({
  reducer: {
    currencies: currenciesSlice,
  },
})
