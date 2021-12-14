import ComputerCard from "./ComputerCard";

const Computer = ({computerCountry}) => {
    return (
        <div className='computer-div'>
            <h3> Computer's card </h3>
            <ComputerCard computerCountry={computerCountry}/>
        </div>
    );
}; 

export default Computer;