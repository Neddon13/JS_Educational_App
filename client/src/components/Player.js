import PlayerCard from "./PlayerCard";

const Player = ({playerCountry, handleChoice }) => {
    return (
        <div className='player-div'>
            <h3>Player's Card</h3>
            <PlayerCard playerCountry={playerCountry} handleChoice ={handleChoice}/> 
        </div>
    );
}; 

export default Player;