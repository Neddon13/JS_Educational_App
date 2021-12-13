import PlayerCard from "./PlayerCard";

const Player = ({playerCountry}) => {
    return (
        <div>
            <h3>Your Card</h3>
            <PlayerCard playerCountry={playerCountry}/> 
        </div>
    );
}; 

export default Player;