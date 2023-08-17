import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contact = () => {
    return (
        <div className="h-auto text-white bg-gray-900 w-screen font-bold">
            <Navbar/>

            <div className="h-screen flex flex-col justify-center items-center text-4xl xl:text-6xl">
                <div className="my-8">
                    Thanks For Visiting!
                </div>
                <div className="h-auto bg-gray-900">
                    <div className="p-4 flex flex-col sm:flex-row md:flex-row xl:flex-row justify-center items-center">

                        <div className="w-28 xl:w-auto xl:h-auto my-4 xl:my-0 xl:mx-4 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <a href="https://github.com/aidanfroggatt" target='_blank' className="hover:scale-110 hover:opacity-50">Github</a>
                        </div>
                        <div className="w-28 xl:w-auto xl:h-auto my-4 xl:my-0 xl:mx-4 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <a href="mailto:aidanfr@live.ca" className="hover:scale-110 hover:opacity-50">Email</a>
                        </div>
                        <div className="w-28 xl:w-auto xl:h-auto my-4 xl:my-0 xl:mx-4 flex flex-col justify-center text-xl xl:text-4xl items-center bg-gray-800 p-4 rounded-xl">
                            <a href="https://www.linkedin.com/in/aidanfroggatt/" target='_blank' className="hover:scale-110 hover:opacity-50">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 border-t-4 border-amber-300 flex flex-row justify-center items-center text-9xl text-white">
                <Footer/>
            </div>
        </div>
    );
};

export default contact;