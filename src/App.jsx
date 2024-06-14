import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ViewItemByID from './pages/ViewItemByID'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/item/:itemID',
    element: <ViewItemByID />
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
