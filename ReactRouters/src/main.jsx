import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx' 
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import User from './components/User/User'
import Github,{ GithubInfo } from './components/GitHub/Github.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userid",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader:GithubInfo,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
   
)
