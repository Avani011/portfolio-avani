"use client";

import Image from "next/image";
import { useEffect } from "react";
import Card from "@/components/Card";
import cardData from "@/data/cardData";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  })

  return (
    <div
      className="main"
    >
      <Nav />

      <section id="main" className="home flex flex-col items-center sm:max-lg:h-fit w-full xl:gap-8 md:gap-16 sm:gap-10">
        <button type="button" className="mt-16 md:mt-10 sm:mt-8 gren-btn">
          <div className="w-2 h-2 sm:max-md:w-1 sm:max-md:h-1 bg-green rounded-full"></div>
          Available
        </button>

        <Image 
          src="/home.svg"
          alt="home-quote"
          width={1177}
          height={235}
          className="md:w-3/4 sm:w-3/4"
        />

        <h2 className="text-white font-inter lg:text-xl sm:max-lg:mb-16 md:text-lg sm:text-xxs">FRONTEND DEVELOPER & UI/UX DESIGNER</h2>
      </section>

      <section id="about" className="home flex flex-col justify-center sm:max-lg:h-fit xl:gap-36 items-center bg-primary lg:gap-28 md:gap-20 sm:gap-10">
        <div className="flex flex-row sm:max-md:flex-col justify-center sm:max-lg:mt-20 xl:gap-48 w-4/5 mt-20 items-center lg:gap-36 md:gap-20 sm:gap-9">
          <div className="flex flex-col sm:max-md:justify-center sm:max-md:items-center lg:gap-28 sm:gap-8 md:max-lg:gap-16 lg:h-72 md:max-lg:h-60 sm:h-fit">
            <h2 className="xl:text-5xl font-bold flex-start lg:text-4xl md:text-3xl">Hi, I am Avani.</h2>
            <button className="black-btn">
              <svg width="13" height="13" className=" lg:w-7 md:max-lg:w-2 sm:w-1.5" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.021 3.414L1.414 12.021L0 10.607L8.607 2H1.02V0H12.02V11H10.02L10.021 3.414Z" fill="black"/>
              </svg>
              
              Get in Touch
            </button>
          </div>

          <div className="flex flex-col xl:w-30rem md:gap-12 md:w-7/12 sm:w-85% sm:gap-8">
            <p className="float-none text-wrap xl:text-2xl lg:max-xl:text-xl md:text-base sm:text-sm relative">I'm a passionate front-end and UI/UX 
              developer who crafts unique designs and 
              codes them into innovative solutions. With 
              a growth mindset and focus on clean, 
              high-quality design.
            </p>

              <p className="float-none text-wrap xl:text-2xl lg:max-xl:text-xl sm:text-sm md:text-base">Im a passionate front-end and UI/UX 
              developer who crafts unique designs and 
              codes them into innovative solutions. With 
              a growth mindset and focus on clean, 
              high-quality design.
            </p>
          </div>
        </div>

        <div className="w-full flex sm:max-lg:mb-10 sm:max-md:invisible">
          <div className="bg-secondary w-96 xl:h-4 lg:max-xl:h-3 md:h-2"></div>
        </div>
        
      </section>

      <section id="skills" className="home sm:max-lg:h-fit flex flex-col items-center justify-center lg:gap-16 sm:max-lg:gap-10">
        <h1 className="font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:max-lg:mt-14 sm:text-3xl text-white">SKILLS</h1>

        <Skills />
      </section>

      <section id="project" className="w-full h-screen sm:max-lg:h-fit bg-primary flex items-center">
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

      <section id="contact" className="home flex flex-col justify-around sm:max-lg:h-fit sm:max-lg:justify-center gap-16 ">
        <div className="flex flex-col justify-between lg:gap-28 md:max-lg:gap-20 sm:gap-14 items-center mt-20">

          <div className="flex flex-col text-center gap-11">
            <h1 className="font-semibold xl:text-7xl lg:tsxt-6xl md:text-4xl sm:text-3xl text-primary">Let's Have a Chat !</h1>
            <a href="mailto:avaniagarwal110@gmail.com" className="text-primary lg:text-2xl md:text-lg sm:text-sm hover:text-green">avaniagarwal110@gmail.com</a>
          </div>

          <div className="flex flex-row sm:max-md:flex-col justify-around lg:gap-24 sm:gap-10 md:gap-16">
            <button className="white-btn hover:border-green hover:text-green"
              onClick={() => window.location.href = "tel:+91-8107513477"}
            >
              <svg className="fill-current lg:w-10 md:w-6 sm:w-4" width="35" height="35" viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.36083 2.9794C10.1356 1.21482 13.0581 1.52836 14.5442 3.51461L16.3846 5.97044C17.595 7.58628 17.4871 9.84378 16.0506 11.2715L15.7035 11.6186C15.6642 11.7643 15.6602 11.9173 15.6919 12.0648C15.7837 12.6598 16.281 13.9198 18.3635 15.9907C20.446 18.0615 21.7148 18.5573 22.3185 18.6507C22.4707 18.6812 22.6278 18.6768 22.7779 18.6375L23.3729 18.0454C24.6504 16.7767 26.6104 16.539 28.1912 17.3979L30.9767 18.9146C33.364 20.2096 33.9662 23.4529 32.0121 25.3969L29.9398 27.4561C29.2865 28.105 28.4085 28.6461 27.3381 28.7467C24.6985 28.9932 18.5487 28.6782 12.084 22.2513C6.05083 16.2517 4.89291 11.0192 4.74562 8.44086C4.6727 7.13711 5.28812 6.03461 6.0727 5.25586L8.36083 2.9794ZM12.7942 4.82565C12.0548 3.83836 10.6781 3.75961 9.90229 4.53107L7.6127 6.80607C7.13145 7.2844 6.90104 7.81232 6.9302 8.3169C7.04687 10.3659 7.9802 15.0865 13.6269 20.7011C19.5506 26.5898 25.0208 26.7663 27.1354 26.5679C27.5671 26.5286 27.9958 26.304 28.3969 25.9059L30.4677 23.8452C31.3106 23.0082 31.1254 21.4827 29.9325 20.8352L27.1471 19.32C26.3771 18.9029 25.4758 19.04 24.9158 19.5971L24.2523 20.2577L23.4794 19.4819C24.2523 20.2577 24.2508 20.2592 24.2494 20.2592L24.2479 20.2621L24.2435 20.2665L24.2333 20.2752L24.2115 20.2957C24.1499 20.3528 24.0836 20.4045 24.0131 20.4502C23.8965 20.5275 23.7419 20.6136 23.5479 20.685C23.1542 20.8323 22.6321 20.9111 21.9875 20.8119C20.7231 20.6179 19.0475 19.7561 16.8206 17.5423C14.5952 15.3286 13.726 13.6632 13.5306 12.4002C13.43 11.7557 13.5102 11.2336 13.659 10.8398C13.7408 10.6183 13.858 10.4114 14.006 10.2273L14.0527 10.1763L14.0731 10.1544L14.0819 10.1457L14.0862 10.1413L14.0892 10.1384L14.5092 9.72128C15.1333 9.09857 15.2208 8.06753 14.6331 7.28148L12.7942 4.82565Z"/>
              </svg>

              Phone
            </button>

            <button className="white-btn hover:border-green hover:text-green"
              onClick={() => window.location.href = "https://linkedin.com/in/avani110"}
            >
              <svg className="fill-current lg:w-10 md:w-6 sm:w-4" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.625 1.875C4.63044 1.875 3.67661 2.27009 2.97335 2.97335C2.27009 3.67661 1.875 4.63044 1.875 5.625V24.375C1.875 25.3696 2.27009 26.3234 2.97335 27.0266C3.67661 27.7299 4.63044 28.125 5.625 28.125H24.375C25.3696 28.125 26.3234 27.7299 27.0266 27.0266C27.7299 26.3234 28.125 25.3696 28.125 24.375V5.625C28.125 4.63044 27.7299 3.67661 27.0266 2.97335C26.3234 2.27009 25.3696 1.875 24.375 1.875H5.625ZM7.69125 9.93188C8.2855 9.93188 8.85541 9.69581 9.27561 9.27561C9.69581 8.85541 9.93188 8.2855 9.93188 7.69125C9.93188 7.097 9.69581 6.52709 9.27561 6.10689C8.85541 5.68669 8.2855 5.45063 7.69125 5.45063C7.097 5.45063 6.52709 5.68669 6.10689 6.10689C5.68669 6.52709 5.45063 7.097 5.45063 7.69125C5.45063 8.2855 5.68669 8.85541 6.10689 9.27561C6.52709 9.69581 7.097 9.93188 7.69125 9.93188ZM9.56625 24.0244V11.6888H5.81625V24.0244H9.56625ZM12.0562 11.6888H15.8063V13.3406C16.3594 12.4744 17.5744 11.3081 19.8337 11.3081C22.53 11.3081 23.9944 13.095 23.9944 16.4944C23.9944 16.6575 24.0094 17.4019 24.0094 17.4019V24.0225H20.2594V17.4037C20.2594 16.4944 20.0681 14.7075 18.0469 14.7075C16.0238 14.7075 15.8531 16.9538 15.8063 18.4237V24.0225H12.0562V11.6888Z"/>
              </svg>

              LinkedIn
            </button>

            <button className="white-btn hover:border-green hover:text-green" 
              onClick={() => window.location.href = "https://github.com/Avani011"}
            >
              <svg className="fill-current lg:w-10 md:w-6 sm:w-4" width="31" height="31" viewBox="0 0 31 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.93759C8.00188 1.93759 1.9375 8.15696 1.9375 15.8488C1.9375 21.9326 5.735 27.1057 11.0244 29.0045C11.7413 29.1788 11.625 28.6751 11.625 28.307V25.8851C7.5175 26.3888 7.34313 23.5795 7.07188 23.1145C6.51 22.1457 5.1925 21.8938 5.59938 21.4288C6.52938 20.9251 7.49813 21.5451 8.6025 23.2307C9.39688 24.4513 10.9663 24.2382 11.7606 24.0445C11.935 23.3082 12.3031 22.6688 12.8069 22.1457C8.54438 21.3707 6.76188 18.697 6.76188 15.5195C6.76188 13.9695 7.24625 12.5551 8.23438 11.412C7.61438 9.53259 8.2925 7.92446 8.38938 7.67259C10.1525 7.51759 11.9738 8.97071 12.1288 9.08696C13.1363 8.81571 14.2794 8.66071 15.5581 8.66071C16.8369 8.66071 17.98 8.81571 19.0069 9.08696C19.3556 8.81571 21.0413 7.57571 22.6881 7.71134C22.785 7.94384 23.4438 9.53259 22.8625 11.3926C23.8506 12.5357 24.335 13.9695 24.335 15.5195C24.335 18.697 22.5525 21.3707 18.2706 22.1457C18.6395 22.5165 18.9295 22.958 19.1231 23.4438C19.3169 23.9282 19.4138 24.4513 19.4138 24.9745V28.4813C19.4331 28.7526 19.4138 29.0432 19.8594 29.0432C25.2263 27.1832 29.0819 21.9713 29.0819 15.8488C29.0819 8.15696 23.0175 1.91821 15.5194 1.91821L15.5 1.93759Z"/>
              </svg>

              GitHub
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full sm:max-lg:mb-16">
            <h6 className="text-primary sm:max-md:text-sm ml-14 sm:max-md:ml-10">© 2024 Avani</h6>
            <h6 className="text-primary sm:max-md:text-sm mr-20 sm:max-md:mr-10">Made By Avani</h6>
        </div>

      </section>
    </div>
  );
}
