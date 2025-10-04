import { useState } from 'react'
import Navbar from '../src/Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import Footer from './Footer'
import { Nav } from 'react-bootstrap'
import { NavBarF } from './Navbar/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <NavBarF/>
    <Home />
    <Footer/>
    </>
  )
}

export default App
