import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  Details,
  Favorites,
  Error,
  ProtectedRoute,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as detailsLoader } from './pages/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: '/details/:id',
        loader: detailsLoader,
        element: <Details />,
      },
      {
        path: '/favorites',
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
