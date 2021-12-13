const ComputerCard = ({computerCountry}) => {

    if (!computerCountry.highestPoint) {
        return (
            <p>Loading</p>
        )
    };
    return (
        <div>
            <h3>{computerCountry.name}</h3>
            <img src={computerCountry.flag} alt={computerCountry.name} style={{width:"180px", height:"120px"}} />
            <table>
                <tr>
                    <td>Population</td>
                    <td>{computerCountry.population}MM</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{computerCountry.areaKM}km</td>
                </tr>
                <tr>
                    <td>Hightest Point</td>
                    <td>{computerCountry.highestPoint.tallestpointM}m</td>
                </tr>
                <tr>
                    <td>Olympic Medals</td>
                    <td>{computerCountry.olympicMedals.totalMedalcount}</td>
                </tr>
            </table>
        </div>
    );
}; 

export default ComputerCard;