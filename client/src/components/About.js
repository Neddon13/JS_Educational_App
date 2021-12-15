const About = ({handleStart}) => {

    return(
        <div className="about-div">
            <h2>Welcome to Countries Top Trumps</h2>
            <button onClick={handleStart}>Start Game</button>
        </div>
    )
}

export default About;