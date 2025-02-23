import Image from "next/image";

const Skills = () => {
  return (
    <div className="skills-div">
        <div className="skills-row1">
            <div className="skills-css">
              <Image src="/next.svg" alt="next.js" width={72} height={72} className="skills-img6"></Image>
            </div>

            <div className="skills-css">
              <Image src="/react.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/redux.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/type.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/tail.svg" alt="next.js" width={72} height={72} className="skills-img6"></Image>
            </div>
        </div>

        <div className="skills-row2">
            <div className="skills-css">
              <Image src="/js.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/git.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/figma.svg" alt="next.js" width={50} height={50} className="figma"></Image>
            </div>

            <div className="skills-css">
              <Image src="/mui.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/boot.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>
        </div>

        <div className="skills-row2">
            <div className="skills-css">
              <Image src="/java.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/sql.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/ps.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/css.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>

            <div className="skills-css">
              <Image src="/html.svg" alt="next.js" width={72} height={72} className="skills-img"></Image>
            </div>
        </div>
    </div>
  );
}

export default Skills;
