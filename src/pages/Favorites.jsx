import { TableComponent } from '../components'
import { getDataFromLocalStorage } from '../utils'

const Favorites = () => {
  const favoritesFromLS = getDataFromLocalStorage('favoriteCurrencies')
  //const favoritesList = useSelector((store) => store.currencies.favoritesList)

  return (
    <div>
      <TableComponent
        headers={['Symbol', 'Last Price', 'High', 'Low']}
        rows={favoritesFromLS}
        haveLinks={true}
      />
    </div>
  )
}

export default Favorites
