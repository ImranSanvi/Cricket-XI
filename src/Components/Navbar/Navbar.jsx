
import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/DoubleDollar.png'

const Navbar = () => {
    return (
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
    );
};

export default Navbar;