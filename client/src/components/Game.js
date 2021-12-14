import React,{useState} from "react";
import Player from "./Player";
import Computer from "./Computer";
import Score from "./Score";
import globe from "../media/globe.mp4"

const Game = ({playerCountry, computerCountry}) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerValue, setComputerValue] = useState(null);
    const [winner, setWinner] = useState("")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    const handleChoice = (choice) => {
        setPlayerChoice(playerCountry[choice]);
        setComputerValue(computerCountry[choice]);
    };

    const handleClick = () => {
        if (playerChoice > computerValue) {
            setWinner("Player")
            setPlayerScore(playerScore + 1)       
        } else {
            setWinner("Computer");
            setComputerScore(computerScore + 1)
        }
        
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
            <Score playerScore={playerScore} computerScore={computerScore}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Game;