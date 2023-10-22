import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading } from '../components'

const HomeLayout = () => {
  // there will be loading effect when pages are loaded, when user go from page to page
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <>
        <Navbar />
        {isPageLoading ? (
          <Loading />
        ) : (
          <div className='align-element py-20'>
            <Outlet />
          </div>
        )}
      </>
    </>
  )
}

export default HomeLayout
