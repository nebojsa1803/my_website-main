import { NavLink } from 'react-router-dom'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../utils'
import { useDispatch } from 'react-redux'
import { logUserIn } from '../features/currencies/currenciesSlice'

// for theme switching, light and dark mode
const themes = {
  corporate: 'corporate',
  luxury: 'luxury',
}

// them is in local storage, so will be same as last time
const themeFromLocalStorage =
  getDataFromLocalStorage('theme') || themes.corporate

const loggedStatusFromLocalStorage = getDataFromLocalStorage('logged') || false

const Navbar = () => {
  const [theme, setTheme] = useState(themeFromLocalStorage)
  const [loginState, setLoginState] = useState(loggedStatusFromLocalStorage)

  const dispatch = useDispatch()

  // switching themes
  const handleTheme = () => {
    const { corporate, luxury } = themes
    const newTheme = theme === corporate ? luxury : corporate
    setTheme(newTheme)
  }

  const handleLogging = () => {
    setLoginState(true)
    dispatch(logUserIn())
    addDataToLocalStorage('logged', true)
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    addDataToLocalStorage('theme', theme)
    addDataToLocalStorage('logged', loginState)
  }, [theme, loginState])

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink to='/' className='flex btn btn-ghost text-2xl items-center'>
            Home
          </NavLink>
          {loginState && (
            <NavLink
              to='favorites'
              className={({ isActive }) =>
                isActive ? 'ml-4 font-bold' : 'ml-4'
              }
            >
              Favorites
            </NavLink>
          )}
        </div>
        <div className='navbar-end'>
          {/* Theme setup */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            {/* sun icon */}
            <BsSunFill className='swap-on h-4 w-4' />
            {/* moon icon */}
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          {/* Login button if user is not logged in, logged bage if logged */}
          {!loginState ? (
            <button
              className='btn btn-primary btn-md  ml-4'
              onClick={handleLogging}
            >
              Login
            </button>
          ) : (
            <div className='badge badge-success ml-4'>logged</div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
