import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="home">
      <div className="about-div">
        <div className="about-row1">
          <h2 className="about-h2">Hi, I am Avani.</h2>
          <Link href="https://drive.google.com/file/d/1HBFEhZCc2WphayHGN-V8yxI_-iNRefpB/view">
            <button className="black-btn">
              <svg
                width="13"
                height="13"
                className=" lg:w-7 md:max-lg:w-2 sm:w-1.5"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.021 3.414L1.414 12.021L0 10.607L8.607 2H1.02V0H12.02V11H10.02L10.021 3.414Z"
                  fill="black"
                />
              </svg>
              My Resume
            </button>
          </Link>
        </div>

        <div className="about-row2">
          <p className="about-p">
            I&apos;m a passionate front-end and UI/UX developer who crafts
            unique designs and codes them into innovative solutions. With a
            growth mindset and focus on clean, high-quality design.
          </p>

          <p className="about-p">
            Im a passionate front-end and UI/UX developer who crafts unique
            designs and codes them into innovative solutions. With a growth
            mindset and focus on clean, high-quality design.
          </p>
        </div>
      </div>

      <div className="about-row3">
        <div className="about-line"></div>
      </div>
    </div>
  );
};

export default About;
