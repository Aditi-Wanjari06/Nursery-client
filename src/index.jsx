import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import { Toaster } from 'react-hot-toast'


const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
path: "/",
element: <Home /> 
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
])
root.render(<div>
  <RouterProvider router = {router} />
  <Toaster />
  </div>)
