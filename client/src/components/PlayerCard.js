import {useState, useEffect} from "react";


const PlayerCard = ({playerCountry, handleChoice}) => {


    if (!playerCountry.highestPoint) {
        return (
            <p>Loading</p>
        )
    };

    const handleSelectChange = event => {
        handleChoice(event.target.value)
    };

    return (
        
        <div className='card'>
            <h3>{playerCountry.name}</h3>
            <img src={playerCountry.landmark} alt={playerCountry.name} style={{width:"180px", height:"120px"}} />
            <table onChange={handleSelectChange}>
                <tr>
                    <td><input type="radio" value="population" name="choice" />Population</td>
                    <td>{playerCountry.population}MM</td>
                </tr>
                <tr>
                    <td><input type="radio" value="areaKM" name="choice" />Area</td>
                    <td>{playerCountry.areaKM}km</td>
                </tr>
                <tr>
                    <td><input type="radio" value="highestPointMetres" name="choice" />Hightest Point</td>
                    <td>{playerCountry.highestPointMetres}</td>
                </tr>
                <tr>
                    <td><input type="radio" value="olympicMedalsTotal" name="choice" />Olympic Medals</td>
                    <td>{playerCountry.olympicMedalsTotal}</td>
                </tr>
            </table>
        </div>
    );
};

export default PlayerCard;