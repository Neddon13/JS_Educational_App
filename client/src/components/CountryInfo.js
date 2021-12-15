

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
            <p>Official Name: {playerCountry.officialName}</p>
            <p>Continent: {playerCountry.continent}</p>
            <p>Capital: {playerCountry.capital}</p>
            <p>Official Language: {playerCountry.officialLanguage}</p>
            <p>Currency: {playerCountry.currency.officialName}</p>
            <p>Bordering Countries: {playerCountry.borderingCountries}</p>
            <p>Independent: {playerCountry.independent}</p>
            <p>UN Member: {playerCountry.unMember}</p>
            <p>Highest Point: {playerCountry.highestPoint}</p>
            <p>Total Olympic Medals: {playerCountry.olympicMedalsTotal}</p>
            <p> 🥇 {playerCountry.goldMedals}
                🥈 {playerCountry.silverMedals}
                🥉 {playerCountry.bronzeMedals}
            </p>
          
            <p>National Animal: {playerCountry.nationalAnimal}</p>
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