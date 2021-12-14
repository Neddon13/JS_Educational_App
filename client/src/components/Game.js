import Player from "./Player";
import Computer from "./Computer";

const Game = ({playerCountry, computerCountry}) => {
    return  (
        <div className='game-div'>
            Game goes here 
            <Player playerCountry={playerCountry}/>
            <Computer computerCountry={computerCountry}/>
            {/* <video className="game-background" autoplay loop muted poster="https://image.shutterstock.com/image-vector/planet-earth-world-globe-oceans-260nw-710617870.jpg">
            <source src="https://thumbs.dreamstime.com/videothumb_large4720/47209559.mp4" type="video/mp4"/>
            </video> */}
        </div>
    );
};

export default Game;