import ComputerCard from "./ComputerCard";
import Score from "./Score";

const Computer = ({computerCountry}) => {
    return (
        <div className='computer-div'>
            <h3> Computer </h3>
            <ComputerCard computerCountry={computerCountry}/>
            <Score />
        </div>
    );
}; 

export default Computer;