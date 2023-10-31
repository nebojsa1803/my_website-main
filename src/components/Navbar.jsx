import { BsFillMoonStarsFill, BsFillSunFill, BsLinkedin } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Navlinks from './Navlinks'
import { useEffect, useState, useRef } from 'react'
import cn from 'classnames'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../utils'
import { useOnClickOutside } from 'use-hooks'

const themes = {
  light: 'fantasy',
  dark: 'business',
}

const themeFromLocalStorage = () =>
  getDataFromLocalStorage('theme') || themes.light

const Navbar = () => {
  const [theme, setTheme] = useState(themeFromLocalStorage)
  const [open, setOpen] = useState(false)

  const refDropdown = useRef()

  useOnClickOutside(refDropdown, () => setOpen(false))

  // close dropdown when click on links
  const handleDropdownClosing = () => setOpen(false)

  const handleTheme = () => {
    const { light, dark } = themes

    const newTheme = theme === light ? dark : light

    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    addDataToLocalStorage('theme', theme)
  }, [theme])

  // close dropdown when click outside dropdown

  useEffect(() => {
    document.addEventListener('click', handleDropdownClosing, true)
  }, [])

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* Title* */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
          >
            <FaHome className='w-6 h-6' />
          </NavLink>
          {/* Dropdown */}
          <div
            className={cn({
              dropdown: true,
              'dropdown-open': open,
            })}
          >
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'
              onClick={() => setOpen((prev) => !prev)}
            >
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className={cn({
                'dropdown-content menu mt-3 p-2 z-[1] shadow bg-base-200 rounded-box w-52': true,
                hidden: !open,
              })}
            >
              <Navlinks handleDropdownClosing={handleDropdownClosing} />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <Navlinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* Theme */}
          <label className='swap swap-rotate mr-3'>
            <input type='checkbox' onChange={handleTheme} />
            <BsFillSunFill className='swap-on h-4 w-4' />
            <BsFillMoonStarsFill className='swap-off h-4 w-4' />
          </label>
          {/* Social */}
          <a
            href='https://www.linkedin.com/in/neboj%C5%A1a-nikoli%C4%87-3946a7193/'
            className='btn btn-ghost btn-circle btn-md ml-1 '
          >
            <BsLinkedin className='w-6 h-6' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
