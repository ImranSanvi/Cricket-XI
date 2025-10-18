
import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div className='my-[30px] mx-[40px] md:mt-[80px] md:mx-[140px]'>
           {
            purchasedPlayers.map(player =>
                <div className='mt-5 flex justify-between items-center h-[130px] py-2 px-5 rounded-[10px] border border-green-400 '>
                    <div className='flex justify-baseline items-center gap-5'>
                        <img className='w-[80px] h-[80px] rounded-[5px] ' src={player["player_image"]} alt="" />
                        <div>
                            <h1 className='font-semibold text-[24x]'>{player["player_name"]}</h1>
                            <p>{player["playing_role"]}</p>
                        </div>
                    </div>
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            )
           }
        </div>
    );
};

export default SelectedPlayers;