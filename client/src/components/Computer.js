import ComputerCard from "./ComputerCard";
import PartialComputerCard from "./PartialComputerCard";

const Computer = ({computerCountry, computerValue}) => {

    if (computerValue){

        return (
            <div className='computer-div'>
                <h3>Computer's card</h3>
                <ComputerCard computerCountry={computerCountry}/>
            </div>
        );
    }

    return (

        <div className='computer-div'>
                <h3>Computer's card</h3>
                <PartialComputerCard computerCountry={computerCountry}/>
            </div>

    )



    
}; 

export default Computer;