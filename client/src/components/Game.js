import React,{useState} from "react";
import Player from "./Player";
import Computer from "./Computer";
import worldMap from "../media/worldMap.mp4"

const Game = ({playerCountry, computerCountry}) => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerValue, setComputerValue] = useState("");

    const handleChoice = (choice) => {
        setPlayerChoice(playerCountry[choice]);
    };





    
    return  (
        <div className='game-div'>
            <Player playerCountry={playerCountry} handleChoice ={handleChoice}/>
            <Computer computerCountry={computerCountry}/>
            <video
             autoPlay loop muted style ={{  position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
            >
            <source src={worldMap} type="video/mp4"/>
            </video>
        </div>
    );
};

export default Game;