

const CountryInfo = ({playerCountry}) => {

if (!playerCountry.currency) {
    return (
        <p>Loading</p>
    )
}
    return (
        <div>
            Country info here 
            <p>Continent: {playerCountry.continent}</p>
            <p>Name: {playerCountry.officialName}</p>
            <p>Capital: {playerCountry.capital}</p>
            <p>Currency: {playerCountry.currency.officialName}</p>
            <p>Highest Point: {playerCountry.highestPoint.location}</p>
            <p>Total Olympic Medals: {playerCountry.olympicMedals.totalMedalcount}</p>
            <p> 🥇 {playerCountry.olympicMedals.medals.gold}
                🥈 {playerCountry.olympicMedals.medals.silver}
                🥉 {playerCountry.olympicMedals.medals.bronze}
            </p>
            <p></p>
            <p>National Animal: {playerCountry.nationalAnimal}</p>
            <img src={playerCountry.animalPhoto} alt={playerCountry.name} style={{width:"180px", height:"120px"}} />
           <button> <a href={playerCountry.googleMap} target="_blank">🗺️</a></button>
        </div>
    );
}; 

export default CountryInfo;