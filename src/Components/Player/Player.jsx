import React from 'react';

const Player = ({player}) => {
    return (
        <div className='p-4 rounded-[10px] space-y-3  border border-green-300'>
            <img className='w-[376px] h-[240px] rounded-[10px]' src={player["player_image"]} alt="" />
            <h3><i class="fa-solid fa-person"></i><span className='font-semibold text-[20px]'>{player["player_name"]}</span></h3>
            <div className='flex justify-between items-center'>
                <p><i class="fa-solid fa-flag"></i><span className='font-normal text-[16px]'>{player["player_country"]}</span></p>
                <h4 className='font-normal text-[16px] p-2 bg-gray-900 rounded-[10px]'>{player["playing_role"]}</h4>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-[16px]'>Rating</h1>
                <p className='font-normal text-[16px]'>{player.rating}</p>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-[16px]'>Batting Style</h1>
                <p>{player["batting_style"]}</p>
            </div>
            <div className='flex flex-col gap-2 md:flex-row justify-between items-center'>
                <h1 className='font-semibold text-[16px]'>Price : {player.price} </h1>
                <button className='p-2 bg-purple-400 rounded-[10px]'>Choose player</button>
            </div>
        </div>
    );
};

export default Player;