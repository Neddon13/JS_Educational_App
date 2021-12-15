import React, {useState, useEffect} from 'react'
import CountryInfo from "../components/CountryInfo";
import Game from "../components/Game";

function Main() {

    const [playerCountry, setPlayerCountry] = useState([]);
    const [computerCountry, setComputerCountry] = useState([]);
    const [round, setRound] = useState(0)

    const url = 'http://localhost:5000/api/countries'

    useEffect(()=>{
        getCountryForComputer()
        .then((dataC) => {
          console.log(dataC);
        })
        getCountryForPlayer()
        .then((dataP) => {
            console.log(dataP);
        })
      },[round]);


    const getCountryForComputer = () => {
        return fetch(url)
        .then(res => res.json())
        .then(countries => setComputerCountry(random_country(countries)))
    };

    const getCountryForPlayer = () => {
        return fetch(url)
        .then(res => res.json())
        .then(countries => setPlayerCountry(random_country(countries)))
    };

    const handleRound= () => {
        setRound(round + 1)
    };

    function random_country(countries) {

        return countries[Math.floor(Math.random()*countries.length)]; 
    };

    return (
        <div className='container'>
            <CountryInfo playerCountry={playerCountry}/>
            <Game playerCountry={playerCountry} computerCountry={computerCountry} handleRound={handleRound}/>
        </div>
    );
};

export default Main; 