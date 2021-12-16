

const Score = ({playerScore, computerScore}) => {
    return (
        <div className='score-div'> 
            <h3>Scores</h3>
            <p className="score-title">Player: </p>
            <p>{playerScore}</p>
            <p className="score-title">Computer:</p> 
            <p>{computerScore}</p>
        </div>
    )
}

export default Score;