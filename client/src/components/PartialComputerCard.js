import BackCard from "../media/BackCard.png"

const PartialComputerCard = ({computerCountry}) => {

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
			<img src={BackCard} style={{width:"270px", height:"400px"}} />
            </div>
		</div>
		<div class="back">
        <div className='card' id='computer-card'>
            <h3>{computerCountry.name}</h3>
            <img src={computerCountry.landmark} alt={computerCountry.name} style={{width:"180px", height:"120px"}} />
            <table>
                <tr>
                    <td>Population</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Hightest Point</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Olympic Medals</td>
                    <td></td>
                </tr>
            </table>
        </div>
       
		</div>
	</div>
</div>
        
    );
}; 

export default PartialComputerCard;