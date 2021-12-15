import React, {useState, useEffect} from 'react'
import CountryInfo from "../components/CountryInfo";
import Game from "../components/Game";
import About from '../components/About';

function Main() {

    const [playerCountry, setPlayerCountry] = useState([]);
    const [computerCountry, setComputerCountry] = useState([]);
    const [countries, setCountries] = useState([]);
    const [round, setRound] = useState(0)
    const [replay, setReplay] = useState(false)

    const url = 'http://localhost:5000/api/countries'

    useEffect(() => {
        return fetch(url)
        .then(res => res.json())
        .then(res =>{
            setCountries(res)
        })
    },[replay])

    useEffect(()=>{
        if (countries.length) {
            getCountryForComputer()
            getCountryForPlayer()
        }
      },[round]);


    const getCountryForComputer = () => {
        const random1 = Math.floor(Math.random()*countries.length)
        console.log(random1)
        setComputerCountry(countries[random1])
        countries.splice(random1, 1)
        setCountries([...countries])
        console.log(countries)
        console.log(computerCountry)    
    };

    const getCountryForPlayer = () => {
        const random2 = Math.floor(Math.random()*countries.length)
        setPlayerCountry(countries[random2])
        countries.splice(random2, 1)
        setCountries([...countries])
        console.log(countries)
        console.log(playerCountry) 
    };

    const handleRound= () => {
        setRound(round + 1)
    };

    const handleStart = () => {
        setRound (round + 1)
    }

    const setRoundtoZero = () => {
        setRound(0)
        toggleReplay()
    }

    const setRoundtoOne = () => {
        setRound(1)
    }

    const toggleReplay = () => {
        if (!replay) {
            setReplay(true)
        } else {
            setReplay(false)
        }
    }

    if (round === 0) {

        return (
            <div className='container'>
            <About handleStart={handleStart}/>
            </div> 
            )
    }

    return (
        <div className='container'>
            <CountryInfo playerCountry={playerCountry}/>
            <Game 
            playerCountry={playerCountry} 
            computerCountry={computerCountry} 
            handleRound={handleRound}
            setRoundtoZero={setRoundtoZero}
            setRoundtoOne={setRoundtoOne}
            toggleReplay={toggleReplay}/>
        </div>
    );
};

export default Main; 