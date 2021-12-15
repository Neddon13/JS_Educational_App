const ComputerCard = ({computerCountry, computerValue}) => {

    if (!computerCountry.highestPoint) {
        return (
            <p>Loading</p>
        )
    };
    
    return (
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
            <div className="compcard">
			<img src="https://st2.depositphotos.com/1803332/9245/v/950/depositphotos_92457980-stock-illustration-playing-cards-back.jpg" style={{width:"270px", height:"400px"}} />
            </div>
		</div>
		<div class="back">
        <div className='card' id='computer-card'>
            <h3>{computerCountry.name}</h3>
            <img src={computerCountry.landmark} alt={computerCountry.name} style={{width:"180px", height:"120px"}} />
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
                    <td>{computerCountry.highestPointMetres}m</td>
                </tr>
                <tr>
                    <td>Olympic Medals</td>
                    <td>{computerCountry.olympicMedalsTotal}</td>
                </tr>
            </table>
        </div>
       
		</div>
	</div>
</div>
        
    );
}; 

export default ComputerCard;


 
    