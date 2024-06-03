import React, {useEffect} from "react";
import V1Navbar from "../components/V1Navbar";
import V1Footer from "../components/V1Footer";
import myResume from "../assets/resume.pdf";

const V1Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="h-auto bg-gray-900 w-screen font-bold text-white">
            <V1Navbar/>

            <div className="h-screen sm:my-16 sm:h-auto bg-gray-900 text-white flex flex-row justify-center items-center">
                {/*<iframe src={myResume} className=""></iframe>*/}
                <object
                    data={myResume}
                    className="xl:mt-16 xl:w-pdfDesktop xl:bg-none xl:h-pdfDesktop sm:h-pdfMobileLandscape sm:w-pdfMobileLandscape w-pdfMobile h-pdfMobile bg-white">
                </object>
            </div>

            <div className="bg-gray-900 border-t-4 border-amber-300 flex flex-row justify-center items-center text-9xl text-white">
                <V1Footer/>
            </div>
        </div>
    );
};

export default V1Resume;