import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'




let x = createBrowserRouter([
  { path: "" , element: <Layout/> , children: [
    { index: true , element: <Home/> },
    { path: "about" , element: <About/> },
    { path: "contact" , element: <Contact/> },
    { path: "portfolio" , element: <Portfolio/> },
    { path: "*" , element: <Notfound/> }
  ]},
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider  router={x}></RouterProvider>
    </>
  )
}

export default App


