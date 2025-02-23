"use client";

import { useEffect } from "react";
import cardData from "@/data/cardData";
import { Nav, About, Contact, Skills, Main, Card } from "@/components";
import LocomotiveScroll from 'locomotive-scroll';
import { CustomLocomotiveScrollOptions } from "@/types";

export default function Home() {

  useEffect(() => {
    // Explicitly type the variable
    let locomotiveScrollInstance: LocomotiveScroll | undefined;

    (async () => {
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        const options: CustomLocomotiveScrollOptions = {
          el: scrollContainer as HTMLElement, // Type assertion
          smooth: true,
        };

        locomotiveScrollInstance = new LocomotiveScroll(options);
      }
    })();

    // Cleanup function to destroy the instance when the component unmounts
    return () => {
      if (locomotiveScrollInstance) {
        locomotiveScrollInstance.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container className="main">
      <Nav />

      <section className="home">
        <Main />
      </section>

      <section>
        <About />
      </section>

      <section id="skills" className="home">
        <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:max-lg:mt-14 sm:text-3xl text-white">SKILLS</h1>

        <Skills />
      </section>

      <section id="project">
        <div className="flex flex-col justify-around lg:gap-28 md:gap-20 sm:gap-14 sm:max-lg:mt-14 sm:max-lg:mb-16 h-fit w-auto">
          <div className="flex justify-center">
            <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">My Work</h1>
          </div>


          <div className="relative w-full">
            <div className="flex flex-row sm:max-md:flex-col gap-8 sm:max-md:gap-11 px-4 overflow-x-scroll hide-scrollbar whitespace-nowrap">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  size={card.size}
                  source={card.source}
                  name={card.name}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
          <Contact />
      </section>
    </div>
  );
}
