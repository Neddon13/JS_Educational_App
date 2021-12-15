const Popup = ({winner, playerScore, computerScore}) => {

    if (winner == "Player") {
        return (
            <div>
                <h2>Congratulations, you are the Winner!</h2>
                <h3>Final Scores</h3>
                <h3>Player: {playerScore}</h3>
                <h3>Computer: {computerScore}</h3>
            </div>
        )
    }
    return (
        <div>
            <h2>Computer Wins, but you still learned a lot!</h2>
            <h3>Final Scores</h3>
            <h3>Player: {playerScore}</h3>
            <h3>Computer: {computerScore}</h3>
        </div>
    )
}

export default Popup;