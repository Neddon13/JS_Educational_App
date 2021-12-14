import React,{useState} from "react";
import Player from "./Player";
import Computer from "./Computer";

const Game = ({playerCountry, computerCountry}) => {
    const [playerChoice, setPlayerChoice] = useState([]);

    return  (
        <div className='game-div'>
            <Player playerCountry={playerCountry}/>
            <Computer computerCountry={computerCountry}/>
            <video
             autoPlay loop muted style ={{  position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
            >
            <source src="" type="video/mp4"/>
            </video>
        </div>
    );
};

export default Game;