import { Suspense, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'



const fetchPlayers = async () =>{
  const res = await fetch('/players.json')
  return res.json()
}

function App() {
  const [count, setCount] = useState(0)

  const playersPromise = fetchPlayers()

  return (
    <>
      
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={
          <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
