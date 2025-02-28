import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { TfiArrowTopRight } from "react-icons/tfi";
import { ImageCard } from "~/components/Card";
import Dot from "~/components/Dot";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { about, award, awards, experience } from "~/data/info";
import { extractDomain } from "~/utils/Url";

export const meta: MetaFunction = () => {
    return [
        { title: "Aidan Froggatt — Info" },
        { name: "description", content: "This is an overview of Aidan Froggatt and his work experience." },
    ];
};

const About = () => {

    // Render content based on the type of item
    const renderContent = (item: about, index: number) => {
        if (item.type === 'image') {
            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            duration: 0.5,
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <ImageCard key={index}>
                        <img src={item.src} alt={item.alt} />
                    </ImageCard>
                </motion.div>
            );
        } else if (item.type === 'text') {
            return (
                <motion.div 
                    key={index} 
                    className="flex flex-col gap-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            duration: 0.5,
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <div className="text-custom-light text-lg 2xl:text-2xl">{item.title}</div>
                    <div className="text-custom-light text-opacity-50 text-base 2xl:text-xl">{item.text}</div>
                </motion.div>
            );
        }

        return null; // Return null if the item type is neither 'image' nor 'text'
    };

    const mobileContent = about.map(renderContent);

    const desktopContentLeft = [
        0, // Profile Picture
        3, // Education
        4, // Cliff Image
        7, // Freetime
        8  // Hiking Backpack Image
    ].map((index) => renderContent(about[index], index));

    const desktopContentRight = [
        1, // Intro
        2, // Aidan Hiking
        5, // Passion
        6, // Concert Image
        9  // Conclusion
    ].map((index) => renderContent(about[index], index));


    return (
        <section id="about">
            <div id="about-content" className="flex flex-col pb-10 md:pb-0 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
                <div
                    key={"about-me-hero"}
                    className="flex flex-col justify-center items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0"
                >
                    <div className="flex justify-center items-center flex-row text-custom-light gap-x-2">
                        <Dot />
                        <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">ABOUT ME</div>
                    </div>
                    <h1 className="text-shadow-mobile md:text-shadow">Here&apos;s some more info&nbsp;<span className="h1-accent">about me.</span></h1>
                </div>

                {/* Mobile Version */}
                <div className="md:hidden flex flex-col gap-y-16 md:grid-cols-2 md:py-20 2xl:py-32 md:gap-x-12 2xl:gap-x-20" >
                    {mobileContent}
                </div>

                {/* Desktop Version */}
                <div className="hidden md:py-20 2xl:py-32 md:grid md:grid-cols-2 md:gap-x-12 2xl:gap-x-20" >
                    <div className="flex flex-col md:gap-y-20">
                        {desktopContentLeft}
                    </div>
                    <div className="flex flex-col md:gap-y-20">
                        {desktopContentRight}
                    </div>
                </div>
            </div>
        </section>
    );
}

const Experience = () => {
    return (
        <section id="experience">
            <div id="experience-content" className="flex border-t border-opacity-20 border-custom-light py-10 md:py-16 flex-col gap-y-2 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
                <div className="flex flex-row justify-start items-center gap-x-2 md:gap-x-4">
                    <Dot/>
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">EXPERIENCE</div>
                </div>
                <div className="flex flex-col gap-y-16 md:gap-y-20 2xl:gap-y-28">
                    {experience && experience.map((exp: experience, index) => {
                        return (
                            <div key={index} className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 justify-start items-start">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{
                                        amount: 0.5,
                                        once: true,
                                    }}
                                >
                                    <h2 className="md:flex-grow text-shadow-mobile md:text-shadow">
                                        <a href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                                    </h2>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-start justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{
                                        amount: "some",
                                        once: true,
                                    }}
                                >
                                    <h4 className="mt-3 md:mt-0">{exp.role}</h4>
                                    <h5>{exp.team &&<span className="text-custom-light text-opacity-70">{exp.team}</span>}</h5>
                                    <span className="text-custom-light text-opacity-50 text-sm md:text-base 2xl:text-lg mt-2 md:mt-1.5 2xl:mt-2">{exp.startDate} - {exp.endDate}</span>
                                    <p className="text-custom-light text-opacity-60 mt-3 md:mt-4 2xl:mt-6">{exp.description}</p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

const Awards = () => {
    return (
        <section id="awards">
            <div id="awards-content" className="flex flex-col border-t border-opacity-20 border-custom-light gap-y-2 py-16 md:gap-y-8 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
                <div className="flex flex-row justify-start items-center gap-x-4">
                    <Dot/>
                    <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">AWARDS</div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2">
                        {awards && awards.map((award: award, index) => {
                            return (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{
                                        amount: "some",
                                        once: true,
                                    }}
                                    className="flex flex-col items-start justify-start"
                                >
                                    <h4>{award.title}</h4>
                                    <p className="text-custom-light text-opacity-50 mt-0.5 md:mt-2">{award.association}</p>
                                    <Link 
                                        className="flex flex-row justify-start items-center gap-x-1 text-sm md:text-base duration-200 transition-colors hover:text-custom-light 2xl:text-xl text-custom-light text-opacity-60 mt-2 md:mt-2"
                                        to={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {extractDomain(award.link)}
                                        <TfiArrowTopRight/>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function Info() {
    return (
        <>
            <Header />
            <main className="relative bg-main-page-mobile md:bg-info-page bg-no-repeat flex flex-col justify-start items-center bg-custom-dark text-custom-light">
                <About />
                <Experience />
                <Awards />
            </main>
            <Footer />
        </>
    );
}
