import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
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
    );
};

export default Banner;