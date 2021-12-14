import Player from "./Player";
import Computer from "./Computer";

const Game = ({playerCountry, computerCountry}) => {
    return  (
        <div className='game-div'>
            Game goes here 
            <Player playerCountry={playerCountry}/>
            <Computer computerCountry={computerCountry}/>
            <video
             autoPlay loop muted style ={{  position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
            >
            <source src="https://youtu.be/oONunac1ha44" type="video/mp4"/>
            </video>
        </div>
    );
};

export default Game;