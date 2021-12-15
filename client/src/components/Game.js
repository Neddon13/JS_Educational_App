import React,{useState} from "react";
import Player from "./Player";
import Computer from "./Computer";
import Score from "./Score";

const Game = ({playerCountry, computerCountry, handleRound}) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerValue, setComputerValue] = useState(null);
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [winner, setWinner] = useState("")

    const handleChoice = (choice) => {
        setPlayerChoice(playerCountry[choice]);
        setComputerValue(computerCountry[choice]);
    };

    const handleClick = () => {
        if (playerChoice > computerValue) {
            setWinner("Player")
            setPlayerScore(playerScore + 1)  
            handleRound()     
        } else {
            setWinner("Computer");
            setComputerScore(computerScore + 1)
            handleRound()
        }
    };


    return  (
        <div className='game-div'>
            <Player playerCountry={playerCountry} handleChoice ={handleChoice}/>
            <Computer computerCountry={computerCountry}/>
            <Score playerScore={playerScore} computerScore={computerScore}/>
            <button className="glow-on-hover" onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Game;