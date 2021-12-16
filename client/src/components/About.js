const About = ({handleStart}) => {

    return(
        <body>
            <video
             autoPlay loop muted style ={{  position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
             data-setup='{ "playbackRates": [0.5] }'
            >
            <source src="https://static.videezy.com/system/resources/previews/000/052/735/original/Spinning-globe-on-gray-background.mp4" type="video/mp4"/>
            </video>
        <div className="about-div">
            <h2 className='about-h2'>Welcome to Countries Top Trumps</h2>
            <h4>About</h4>
                Top Trumps is the name of a series of themed card games first introduced by the UK company Dubreq in the 1970's. Each pack is based on a particular subject, for example cars, aircraft, sports personalities, fictional heroes.
            <h4>How to Play</h4>
            The player and the computer will be dealt cards at random.
            The player must select an attribute from their card and click the submit button.
            If the players attribute has a higher number than the computers, the player wins the point.
            If the computers attribute has a higher number than the players, then the computer wins the point.
            The first player to 11 rounds will win the game. 
            <p>

            </p>
            <button className="play-button" onClick={handleStart}>Play Now!</button>
            </div>
        </body>
        
    )
}

export default About;