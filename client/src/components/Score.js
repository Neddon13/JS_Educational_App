

const Score = ({playerScore, computerScore}) => {
    return (
        <div className='score-div'> 
            <h3>Scores</h3>
            <p>Player: {playerScore}</p>
            <p>Computer: {computerScore}</p>
        </div>
    )
}

export default Score;