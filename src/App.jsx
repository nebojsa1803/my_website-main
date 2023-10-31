import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Landing, About, Contact1, Projects, Error } from './pages'

import { action as contactAction } from './pages/Contact1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact1 />,
        action: contactAction,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
