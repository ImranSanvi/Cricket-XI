
import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({playersPromise, availableBalance, setAvailableBalance}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='my-[30px] mx-[40px] md:mt-[80px] md:mx-[140px] grid grid-cols-1 md:grid-cols-3 gap-[20px]'> 
            {
                playerData.map(player => <Player player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Player>
                )
            }
        </div>
    );
};

export default AvailablePlayers;