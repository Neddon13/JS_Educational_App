

const CountryInfo = ({playerCountry}) => {

if (!playerCountry.currency) {
    return (
        <p>Loading</p>
    )
}
    return (
        <div>
            <p>Continent: {playerCountry.continent}</p>
            <p>Official Name: {playerCountry.officialName}</p>
            <p>{playerCountry.about}</p>
            <p>Capital: {playerCountry.capital}</p>
            <p>Official Language: {playerCountry.officialLanguage}</p>
            <p>Currency: {playerCountry.currency.officialName}</p>
            <p>Bordering Countries: {playerCountry.borderingCountries}</p>
            <p>Independent: {playerCountry.independent}</p>
            <p>UN Member: {playerCountry.unMember}</p>
            <p>Highest Point: {playerCountry.highestPoint.location}</p>
            <p>Total Olympic Medals: {playerCountry.olympicMedals.totalMedalcount}</p>
            <p> 🥇 {playerCountry.olympicMedals.medals.gold}
                🥈 {playerCountry.olympicMedals.medals.silver}
                🥉 {playerCountry.olympicMedals.medals.bronze}
            </p>
          
            <p>National Animal: {playerCountry.nationalAnimal}</p>
            <img src={playerCountry.animalPhoto} alt={playerCountry.name} style={{width:"180px", height:"120px"}} />
           <button> <a href={playerCountry.googleMap} target="_blank">🗺️</a></button>
        </div>
    );
}; 

export default CountryInfo;