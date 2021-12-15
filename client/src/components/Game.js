import React,{useState} from "react";
import Modal from 'react-modal';
import Player from "./Player";
import Computer from "./Computer";
import Score from "./Score";
import Popup from "./PopUp";

const Game = ({playerCountry, computerCountry, handleRound, setRoundtoZero, setRoundtoOne, toggleReplay, round}) => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerValue, setComputerValue] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chosen, setChosen] = useState('');
    const [winner, setWinner] = useState("")

    const handleChoice = (choice) => {
        setPlayerChoice(playerCountry[choice]);
        setComputerValue(computerCountry[choice]);
    };

    const handleClick = () => {
        if (playerChoice > computerValue) {
            setPlayerScore(playerScore + 1)  
            handleRound()
            setModalIsOpenToTrue()
            setChosen('') 
            setComputerValue(null) 
            setPlayerChoice(null)   
        } else  if (playerChoice < computerValue) {
            setComputerScore(computerScore + 1)
            handleRound()
            setModalIsOpenToTrue()  
            setChosen('')
            setComputerValue(null)
            setPlayerChoice(null)
        }
    };

    const setModalIsOpenToTrue = () => {
        if (round === 11) {
            if (playerScore > computerScore) {
                setWinner('Player')
                setModalIsOpen(true)
            } else {
                setWinner('Computer')
                setModalIsOpen(true)
            }   
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

    const handleChosen = (chosenValue) => {
        setChosen(chosenValue)
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#0056B8',    
          borderRadius          : '10px'  
        }
    };


    return  (
        <div className='game-div'>

            <Player playerCountry={playerCountry} handleChoice ={handleChoice} handleChosen={handleChosen} chosen={chosen}/>
            <Computer computerCountry={computerCountry} computerValue={computerValue}/>
            <Score playerScore={playerScore} computerScore={computerScore}/>
            <button className="glow-on-hover" onClick={handleClick}>Submit</button>

            <Modal isOpen={modalIsOpen} style={customStyles}>
                <Popup winner={winner} playerScore={playerScore} computerScore={computerScore} />
                <button onClick={setModalIsOpenToFalse}>Play Again</button>
                <button onClick={setRoundtoZero}>Home</button>
            </Modal>
        </div>
    );
};

export default Game;