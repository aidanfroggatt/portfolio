import LilypadIcon from "../assets/LilypadIcon.jsx";
import ArrowLink from "./ArrowLink.jsx";


const Header = () => {

    return (
        <div className="flex flex-row fixed justify-between items-center h-20 w-full bg-red-200 py-8 px-12">
            <div className="flex flex-row bg-blue-200 gap-x-2">
                <LilypadIcon className={"w-10 h-10"}/>
                <div className="flex flex-col">
                    <text className="font-semibold text-md">Aidan Froggatt</text>
                    <text className="text-xs">Frontend Developer</text>
                </div>
            </div>
            <div className="flex justify-center items-center bg-green-200">
                <text>nav n stuff</text>
            </div>
            <div className="flex bg-yellow-200">
                <ArrowLink destination="https://www.linkedin.com/in/aidanfroggatt/" title="LinkedIn"/>
                <ArrowLink destination="" title="Resume"/>
            </div>
        </div>
    )
}

export default Header;
