import axios from 'axios'

// axios with baseURL
const productionUrl = 'http://localhost:5173/'
export const customFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    Accept: 'application/json, text/plain, */*',
  },
})

// Local Storage functions
export const addDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
export const getDataFromLocalStorage = (key) => {
  const resault = localStorage.getItem(key)
  const data = resault ? JSON.parse(resault) : null
  return data
}
