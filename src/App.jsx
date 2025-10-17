import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import navImg from './assets/logo.png'
import dollarImg from './assets/DoubleDollar.png'
import bannerBg from './assets/bg-shadow.png'
import bannerImg from './assets/banner-main.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col md:flex-row my-[30px] mx-[40px] md:mt-[50px] md:mx-[140px] justify-between items-center">
        <img src={navImg} alt="" />
        <div className='flex flex-col md:flex-row gap-4 justify-between items-center my-4 md:my-0'>
          <div className='flex gap-4'>
            <a href="" className='font-normal text-[16px]'>Home</a>
            <a href="" className='font-normal text-[16px]'>Fixture</a>
            <a href="" className='font-normal text-[16px]'>Teams</a>
            <a href="" className='font-normal text-[16px]'>Schedules</a>
          </div>
          <div className="flex justify-between items-center gap-2 border-1 border-green-800 p-2 rounded-[10px]">
            <span>0</span>
            <span>Coin</span>
            <img src={dollarImg} alt="" />
          </div>
        </div>
      </div>

      <div className="my-[30px] mx-[40px] md:mt-[80px] md:mx-[140px] rounded-[20px] overflow-hidden relative PY-[30px] md:py-[64px]" style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className='flex flex-col justify-center items-center gap-5 '>
          <img className='w-[250px] h-[200px] ' src={bannerImg} alt="" />
          <h1 className='font-bold text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='font-medium text-[24px]'>Beyond Boundaries Beyond Limits</p>
          <button className='p-3 border-2 border-yellow-500 rounded-[15px] '>
            <p className='bg-[#E7FE29] text-black font-bold text-[16px] p-3 rounded-[15px]'> Beyond Boundaries Beyond Limits</p>
          </button>
        </div>

      </div>

      
    </>
  )
}

export default App
