import { NavLink } from 'react-router-dom'

const links = [
  { id: 0, url: '/', text: 'Home' },
  { id: 1, url: 'about', text: 'About' },
  { id: 2, url: 'projects', text: 'Projects' },
  { id: 3, url: 'contact', text: 'Contact' },
]

const Navlinks = ({ handleDropdownClosing }) => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id} onClick={handleDropdownClosing}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}

export default Navlinks
