import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Body from './Component/Body'
import Footer from './Component/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header></Header>
  <Outlet/>
   <Footer></Footer>

   </>
  )
}

export default App
