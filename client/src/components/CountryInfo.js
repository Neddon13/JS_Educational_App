

const CountryInfo = ({playerCountry}) => {

if (!playerCountry.currency) {
    return (
        <p>Loading</p>
    )
}
    return (
        <div className='country-info'>
            <img src={playerCountry.flag} alt={playerCountry.name} style={{width:"180px", height:"auto"}} />
            <p>{playerCountry.about}</p>
            <p className="title">Official Name: </p>
            <p>{playerCountry.officialName}</p>
            <p className="title">Continent: </p>
            <p>{playerCountry.continent}</p>
            <p className="title">Capital: </p>
            <p>{playerCountry.capital}</p>
            <p className="title">Official Language: </p>
            <p>{playerCountry.officialLanguage}</p>
            <p className="title">Currency: </p>
            <p>{playerCountry.currency.officialName}</p>
            <p className="title">Bordering Countries: </p>
            <p>{playerCountry.borderingCountries}</p>
            <p className="title">Independent: </p>
            <p>{playerCountry.independent}</p>
            <p className="title">UN Member: </p>
            <p>{playerCountry.unMember}</p>
            <p className="title">Highest Point: </p> 
            <p>{playerCountry.highestPoint}</p>
            <p className="title">Total Olympic Medals: </p>
            <p>{playerCountry.olympicMedalsTotal}</p>
            <p> 🥇 {playerCountry.goldMedals}
                🥈 {playerCountry.silverMedals}
                🥉 {playerCountry.bronzeMedals}
            </p>
            <p className="title">National Animal:</p> 
            <p>{playerCountry.nationalAnimal}</p>
            <img src={playerCountry.animalPhoto} alt={playerCountry.name} style={{width:"180px", height:"auto"}} />
           <a  className="coolbutton" href={playerCountry.googleMap} target="_blank">🗺️
           <span></span>
    <span></span>
    <span></span>
    <span></span>
           </a>
        </div>
    );
}; 

export default CountryInfo;