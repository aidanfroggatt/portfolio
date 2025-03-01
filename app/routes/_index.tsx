import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { TfiArrowRight } from "react-icons/tfi";
import { work } from "~/data/work";
import { LinkCard, MacWindowCard } from "~/components/Card";
import { Link } from "@remix-run/react";
import Dot from "~/components/Dot";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Aidan Froggatt — Software Engineer Intern" },
    { name: "description", content: "Hi, I'm Aidan. Currently a Software Engineer Intern at IBM." },
  ];
};

const Hero = () => {
  const generalInfo = {
    firstName: "Aidan",
    currentRole: {
      title: "Software Engineer Intern",
      company: {
        name: "IBM",
        icon: "SiIbm",
      },
    },
    location: "Toronto",
  };
  return (
    <section id="hero">
      <div id="hero-content" className="w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl flex flex-col justify-center items-start md:items-center relative z-10  border-b border-opacity-10 border-custom-light">
        <motion.div 
          id="hero-content-mobile" 
          className="md:hidden flex flex-col justify-start items-start lg:mt-40 2xl:mt-48 mt-32 pb-10 md:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              duration: 0.5,
          }}  
        >
          <div className="flex flex-row justify-center items-center text-custom-light text-sm md:text-lg 2xl:text-2xl gap-x-2">
              <Dot/>
              <div className="text-xs 2xl:text-sm text-custom-light text-opacity-50 py-4 2xl:py-8">WELCOME</div>
          </div>
          <h1 className="text-shadow-mobile md:text-shadow pb-10 text-5xl">
            Hi, I&apos;m <span className="h1-accent">Aidan.</span>
          </h1>
          <div className="flex flex-row justify-center items-center font-bold">
            {generalInfo.currentRole.title} at {generalInfo.currentRole.company.name}.
          </div>
          <div className="text-custom-light text-opacity-50">
            Based in {generalInfo.location}.
          </div>
        </motion.div>
        <motion.div 
          id="hero-content-desktop" 
          className="hidden md:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              duration: 0.5,
          }}
        >
          <MacWindowCard>
            <div id="shine-animation" className="shine-wrapper">
                <div className="shine-small" />
                <div className="shine-big" />
            </div>
            <div id="window-bar" className="absolute top-0 flex items-center w-full pl-[1.25vw] bg-[linear-gradient(to_right,_rgba(242,242,242,0.1),_rgba(242,242,242,0.5)_50%,_rgba(242,242,242,0.1))] rounded-t-[1.25vmax] shadow-[0_10px_20px_4px_rgba(0,0,0,0.2)]
                sm:h-[6vh] 2xl:h-mac-window-header-2xl lg:h-mac-window-header-lg md:h-mad-window-header-md
                2xl:gap-x-mac-window-dots-2xl lg:gap-x-mac-window-dots-lg md:gap-x-mac-window-dots-md gap-x-2
            ">
                <div className="bg-[#FF6057] rounded-full border-[0.1vmax] border-[#E14640] shadow-[0_0_20px_2px_#f46b5d] md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl" />
                <div className="bg-[#FFBD2E] rounded-full border-[0.1vmax] border-[#DFA123] shadow-[0_0_20px_2px_#f9bd4e] md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl" />
                <div className="bg-[#27C93F] rounded-full border-[0.1vmax] border-[#1DAD2B] shadow-[0_0_20px_2px_#57c353] md:h-mac-window-dot-md md:w-mac-window-dot-md lg:h-mac-window-dot-lg lg:w-mac-window-dot-lg 2xl:h-mac-window-dot-2xl 2xl:w-mac-window-dot-2xl" />
            </div>
            <div id="window-content" className="flex flex-col justify-center w-full h-full p-16 gap-y-8">
              <div className="flex flex-col font-bold text-5xl lg:text-6xl 2xl:text-8xl leading-[90%] tracking-[-2px] text-shadow">
                <div className="inline-block">
                  Hi, I&apos;m Aidan.
                </div>
                <div className="inline-block">
                  I like to <span className="italic font-accent">build things.</span>
                </div>
              </div>
              <div className="flex flex-col items-end text-custom-light">
                  <h4>{generalInfo.currentRole.title} at {generalInfo.currentRole.company.name}.</h4>
                  <div className="text-custom-light text-opacity-50"> Based&nbsp;in&nbsp;{generalInfo.location}. </div>
              </div>
            </div>
          </MacWindowCard>
        </motion.div>
      </div>
    </section>
  )
}

const WorkCards = () => {
  
  return (
    <section id="work-cards">
      <div id="work-cards-content" className="flex flex-col gap-y-8 md:gap-y-10 2xl:gap-y-16 py-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl">
        {work
          .filter(item => item.spotlight)
          .sort((a, b) => a.index - b.index)
          .map((item, index) => (
            <motion.div
              key={index} 
              className="flex flex-col gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 0.5,
              }}
              viewport={{
                  once: true,
              }}
            >
              <LinkCard id={item.id} key={index} color={item.color}>
                <div className="flex flex-col justify-start w-full gap-y-2 pt-8 px-8">
                  <div className="flex flex-row justify-between items-center w-full z-40 pointer-events-none">
                    <h3>{item.title}</h3>
                    <TfiArrowRight className="2xl:text-4xl text-2xl transition-all duration-200 ease-in group-hover:translate-x-2" />
                  </div>
                  <div className="text-start 2xl:text-xl md:text-base text-sm z-40 pointer-events-none">
                    {item.association}&nbsp;
                    <span className="text-custom-light text-opacity-50">— {item.subtitle}</span>
                  </div>
                </div>
                <div className="pointer-events-none flex justify-center items-center relative 2xl:h-work-card-image-2xl lg:h-work-card-image-lg md:h-work-card-image-md h-work-card-image-default">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="absolute md:-bottom-16 md:group-hover:-bottom-10 lg:-bottom-16 lg:group-hover:-bottom-8 xl:-bottom-24 xl:group-hover:-bottom-14 p-4 md:p-0 transition-all duration-200 object-contain h-full"
                    />
                </div>
              </LinkCard>
            </motion.div>
        ))}
        <Link to="/work" className="md:hidden">View all work &rarr;</Link>
      </div>
    </section>
  );
};



export default function Index() {
  return (
    <>
      <Header />
      <main className="bg-main-page-mobile md:bg-work-page bg-no-repeat relative md:pb-40 2xl:pb-60 min-h-screen flex flex-col justify-evenly items-center bg-custom-dark text-custom-light">
        <Hero />
        <WorkCards />
      </main>
      <Footer />
    </>
  );
}
