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

const playersPromise = fetchPlayers()

function App() {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(350)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  return (
    <>
      
      <Navbar availableBalance={availableBalance}></Navbar>

      <Banner></Banner>

      <div className="flex flex-col gap-2 md:flex-row my-[30px] mx-[40px] md:mt-[50px] md:mx-[140px] justify-between items-center">
        <h1 className='font-black text-[28px]'>Available Players</h1>
        <div className='flex gap-0'>
          <button onClick={() => setToggle(true)} className={`font-bold text-[16px] border border-green-500 border-r-0 px-4 py-3 rounded-l-[10px] ${toggle===true?"bg-[#E7FE29]/50":""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`font-bold text-[16px] border border-green-500 border-l-0 px-4 py-3 rounded-r-[10px] ${toggle===false?"bg-[#E7FE29]/50":""}`}>Selected (0)</button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<div className='flex justify-center items-center'>
                                <span className="loading loading-bars loading-xl"></span></div>}>
                            <AvailablePlayers playersPromise={playersPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></AvailablePlayers></Suspense>
                            : <SelectedPlayers></SelectedPlayers>

      }
    </>
  )
}

export default App
