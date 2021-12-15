import PlayerCard from "./PlayerCard";

const Player = ({playerCountry, handleChoice, handleChosen, chosen}) => {
    return (
        <div className='player-div'>
            <h3>Player's Card</h3>
            <PlayerCard playerCountry={playerCountry} handleChoice ={handleChoice} handleChosen={handleChosen} chosen={chosen}/> 
        </div>
    );
}; 

export default Player;