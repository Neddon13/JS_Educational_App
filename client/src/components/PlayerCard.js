import {useState} from "react";


const PlayerCard = ({playerCountry, handleChoice, handleChosen, chosen}) => {

    if (!playerCountry.highestPoint) {
        return (
            <p>Loading</p>
        )
    };

    const handleSelectChange = (event) => {
        handleChoice(event.target.value)
        handleChosen(event.target.value)
    };



    return (
        
        <div className='card'>
            <h3>{playerCountry.name}</h3>
            <img src={playerCountry.landmark} alt={playerCountry.name} style={{width:"180px", height:"120px"}} />
            <table>
                <tr>
                    <td><input onChange={handleSelectChange} className="select" type="radio" value="population" name="choice" 
                    checked={chosen === 'population'} />Population</td>
                    <td className="select">{playerCountry.population}MM</td>
                </tr>
                <tr>
                    <td><input onChange={handleSelectChange} className="select" type="radio" value="areaKM" name="choice" 
                    checked={chosen === 'areaKM'} />Area</td>
                    <td>{playerCountry.areaKM}km</td>
                </tr>
                <tr>
                    <td><input onChange={handleSelectChange} className="select" type="radio" value="highestPointMetres" name="choice" 
                    checked={chosen === "highestPointMetres"} />Hightest Point</td>
                    <td>{playerCountry.highestPointMetres}m</td>
                </tr>
                <tr>
                    <td><input onChange={handleSelectChange} className="select" type="radio" value="olympicMedalsTotal" name="choice" 
                    checked={chosen === "olympicMedalsTotal"}  />Olympic Medals</td>
                    <td>{playerCountry.olympicMedalsTotal}</td>
                </tr>
            </table>
        </div>
    );
};

export default PlayerCard;