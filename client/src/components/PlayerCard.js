


const PlayerCard = ({playerCountry}) => {

    if (!playerCountry.highestPoint) {
        return (
            <p>Loading</p>
        )
    };
    return (
        <div>
            <h3>{playerCountry.name}</h3>
            <img src={playerCountry.flag} alt={playerCountry.name} style={{width:"180px", height:"120px"}} />
            <table>
                <tr>
                    <td>Population</td>
                    <td>{playerCountry.population}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{playerCountry.areaKM}km</td>
                </tr>
                <tr>
                    <td>Hightest Point</td>
                    <td>{playerCountry.highestPoint.tallestpointM}m</td>
                </tr>
                <tr>
                    <td>Olympic Medals</td>
                    <td>{playerCountry.olympicMedals.totalMedalcount}</td>
                </tr>
            </table>
        </div>
    );
};

export default PlayerCard;