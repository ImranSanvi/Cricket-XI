
import React, { use } from 'react';
import Player from '../Player/Player';

const AvailablePlayers = ({playersPromise, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers, count, setCount}) => {
    const playerData = use(playersPromise)
    return (
        <div className='my-[30px] mx-[40px] md:mt-[80px] md:mx-[140px] grid grid-cols-1 md:grid-cols-3 gap-[20px]'> 
            {
                playerData.map(player =>  <Player player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} count={count} setCount={setCount}></Player>
                )
            }
        </div>
    );
};

export default AvailablePlayers;