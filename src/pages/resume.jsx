import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import myResume from "../resources/resume.pdf";
const Resume = () => {

    return (
        <div className="h-auto bg-gray-900 w-screen font-bold text-white">
            <Navbar/>

            <div className="h-screen sm:my-16 sm:h-auto bg-gray-900 text-white flex flex-row justify-center items-center">
                {/*<iframe src={myResume} className=""></iframe>*/}
                <object data={myResume} className="xl:mt-16 xl:w-pdfDesktop xl:bg-none xl:h-pdfDesktop sm:h-pdfMobileLandscape sm:w-pdfMobileLandscape w-pdfMobile h-pdfMobile bg-white">
                </object>
            </div>

            <div className="bg-gray-900 border-t-4 border-amber-300 flex flex-row justify-center items-center text-9xl text-white">
                <Footer/>
            </div>
        </div>
    );
};

export default Resume;