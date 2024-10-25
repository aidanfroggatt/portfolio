import { MetaFunction } from "@remix-run/react";
import Footer from "~/components/Footer";
import { work } from "~/data/work";
import Header from "~/components/Header";
import Dot from "~/components/Dot";
import { LinkCard } from "~/components/Card";
import Back from "~/components/Back";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
    return [
        { title: "Aidan Froggatt — Work" },
        { name: "description", content: "This is an list of all work samples." },
    ];
};

const WorkCards = () => {

    return (
        <section id="work-cards">
            <div id="work-cards-content" className="pb-10 md:pb-0 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
                <div className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 md:mt-32 pb-10 md:pb-0">
                    <div className="flex justify-center items-center flex-row text-custom-light gap-x-2">
                        <Dot />
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">WORK SAMPLES</div>
                    </div>
                    <h1 className="text-shadow-mobile md:text-shadow">See what I&apos;ve been&nbsp;<span className="h1-accent">working on.</span></h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-20 2xl:py-32 gap-2 md:gap-12 lg:gap-6" >
                    {work
                     .sort((a, b) => a.index - b.index)
                     .map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                delay: 0.3 * index,
                                type: "spring",
                                damping: 10,
                                mass: 1,
                                stiffness: 100
                            }}
                        >
                            <LinkCard color={item.color}id={item.id}>
                                <div className="flex flex-col justify-start items-center gap-y-4 p-4 w-full h-full">
                                    <div className="z-40 pointer-events-none justify-start items-center flex flex-col text-center">
                                        <h4>{item.title}</h4>
                                        <h5>{item.association}</h5>
                                    </div>
                                    <img 
                                        className="z-40 pointer-events-none object-contain h-32 md:h-48 lg:h-54 overflow-hidden"
                                        src={item.image.src} 
                                        alt={item.image.alt} 
                                    />
                                </div>
                            </LinkCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Work = () => {
    return (
        <>
            {/* Header on desktop */}
            <div className="hidden md:flex">
                <Header />
            </div>
            {/* Header on mobile */}
            <div className="z-50 fixed top-0 left-0 flex md:hidden w-full justify-start items-center py-4 px-4 md:py-8 md:px-12 2xl:py-12 bg-header-mobile md:bg-header pointer-events-none">
                <Back/>
            </div>        
            
            <main className="bg-main-page-mobile pt-16 md:pt-0 md:bg-info-page bg-no-repeat flex flex-col justify-start items-center bg-custom-dark text-custom-light">
                <WorkCards />
            </main>
            <Footer />
        </>
    );
};

export default Work;
