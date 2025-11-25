// import { useState } from 'react'
import './App.css'
// import Box1 from './compoments/Box1'
// import Box2 from './compoments/Box2'
import { Outlet } from 'react-router-dom'
import Header from './compoments/Header'
import Footer from './compoments/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Box1 />
      <br />
      <br />
      <Box2 /> */}

      {/* <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
      </ul> */}

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
