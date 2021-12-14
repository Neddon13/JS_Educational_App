import React,{useState} from "react";
import Player from "./Player";
import Computer from "./Computer";
import globe from "../media/globe.mp4"

const Game = ({playerCountry, computerCountry}) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerValue, setComputerValue] = useState(null);

    const handleChoice = (choice) => {
        setPlayerChoice(playerCountry[choice]);
        setComputerValue(computerCountry[choice]);
    };





    
    return  (
        <div className='game-div'>
            <Player playerCountry={playerCountry} handleChoice ={handleChoice}/>
            <Computer computerCountry={computerCountry}/>
            <video
             autoPlay loop muted style ={{  position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
            >
            <source src={globe} type="video/mp4"/>
            </video>
        </div>
    );
};

export default Game;