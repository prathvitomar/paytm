import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Signin from './components/pages/signin/Signin.page.jsx'
import Signup from './components/pages/signup/Signup.page.jsx'
import Dashboard from './components/pages/dashboard/Dashboard.page.jsx'
import Send from './components/pages/send/Send.page.jsx'

const router = createBrowserRouter([
  {
    path : '/signin',
    element: <Signin />,
  },
  {
    path : '/signup',
    element: <Signup />,
  },
  {
    path : '/dashboard',
    element: <Dashboard />,
  },
  {
    path : '/send',
    element: <Send />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
