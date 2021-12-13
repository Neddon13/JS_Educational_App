import Player from "./Player";
import Computer from "./Computer";

const Game = ({playerCountry, computerCountry}) => {
    return  (
        <div>
            Game goes here 
            <Player playerCountry={playerCountry}/>
            <Computer computerCountry={computerCountry}/>
        </div>
    );
};

export default Game;