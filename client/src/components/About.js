const About = ({handleStart}) => {

    return(
        <div className="about-div">
            <h2>Welcome to Countries Top Trumps</h2>
            <h4>About</h4>
            <p>
            <h5>Introduction</h5>
                Top Trumps is the name of a series of themed card games first introduced by the UK company Dubreq in the 1970's. Each pack is based on a particular subject, for example cars, aircraft, sports personalities, fictional heroes. Since the 1980's many different manufacturers have produced versions of this game under various names.
            </p>
            <h4>How to Play</h4>
            <p>
            </p>
            <button className="play-button" onClick={handleStart}>Play Now!</button>
        </div>
    )
}

export default About;