import { useNavigate } from "@remix-run/react";
import { TfiArrowLeft } from "react-icons/tfi";

const Back = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="cursor-pointer min-w-20 min-h-8 flex flex-row gap-x-2 items-center px-4 py-2 bg-custom-light bg-opacity-10 border-custom-light border border-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 ease-in-out z-50 pointer-events-auto"
        >
            <TfiArrowLeft className="2xl:text-xl text-lg 2xl:m-10 transition-transform duration-500 ease-linear" />
            Back
        </button>
    );
};

export default Back;
