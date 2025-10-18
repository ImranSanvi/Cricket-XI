
import React, { use } from 'react';

    // "player_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vO4guTr1IlrnODzaMQI2t7ale9j44J0uUQ&s",
    // "player_name": "Steven Smith",
    // "player_country": "Australia",
    // "playing_role": "Batsman",
    // "rating": 9.5,
    // "batting_style": "Right-hand Bat",
    // "price": "90 Lakh BDT"

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='my-[30px] mx-[40px] md:mt-[80px] md:mx-[140px] grid grid-cols-1 md:grid-cols-3 gap-[20px]'> 
            {
                playerData.map(player => 
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
                        <div className='flex justify-between items-center'>
                            <h1 className='font-semibold text-[16px]'>Price : {player.price} </h1>
                            <button className='p-2 bg-purple-400 rounded-[10px]'>Choose player</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AvailablePlayers;