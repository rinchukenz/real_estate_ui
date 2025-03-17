import Homepage from './pages/homepage/Homepage'
import Listpage from './pages/listpage/Listpage'
import Layout from './pages/layout/Layout'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Singlepage from './pages/singlepage/Singlepage'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Agent from './pages/agents/Agent'


function App() {

  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Homepage/>
        },
        {
          path: "/list",
          element: <Listpage/>
        },
        {
          path: "/property/:pId",
          element: <Singlepage/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/agents",
          element: <Agent/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
      ]
      
    }
    
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App

