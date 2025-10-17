import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>

      <Banner></Banner>

      <AvailablePlayers></AvailablePlayers>

      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
