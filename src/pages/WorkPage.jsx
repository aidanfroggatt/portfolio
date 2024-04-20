import MacWindowCard from "../components/MacWindowCard.jsx";
import Card from "../components/Card.jsx";

const WorkPage = () => {

    return (
        <div className="min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light" style={{paddingTop: '25vh', gap: '7.5vh'}}>
            <MacWindowCard/>
            <Card/>
        </div>
    )
}

export default WorkPage;
