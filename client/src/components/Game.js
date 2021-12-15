import React,{useState} from "react";
import Modal from 'react-modal';
import Player from "./Player";
import Computer from "./Computer";
import Score from "./Score";
import globe from "../media/globe.mp4"
import Popup from "./PopUp";

const Game = ({playerCountry, computerCountry, handleRound, setRoundtoZero, setRoundtoOne, toggleReplay}) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerValue, setComputerValue] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
            setModalIsOpenToTrue()     
        } else {
            setWinner("Computer");
            setComputerScore(computerScore + 1)
            handleRound()
            setModalIsOpenToTrue()  
        }
    };

    const setModalIsOpenToTrue = () => {
        if (playerScore == 8 || computerScore == 8) {
            setModalIsOpen(true)
        }  
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
        setRoundtoOne()
        resetScores()
        toggleReplay()
    }

    const resetScores = () => {
        setPlayerScore(0)
        setComputerScore(0)
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#F0AA89'      
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
            <button className="glow-on-hover" onClick={handleClick}>Submit</button>

            <Modal isOpen={modalIsOpen} style={customStyles}>
                <button onClick={setModalIsOpenToFalse}>Play Again</button>
                <button onClick={setRoundtoZero}>Home</button>
                <Popup />
            </Modal>
        </div>
    );
};

export default Game;