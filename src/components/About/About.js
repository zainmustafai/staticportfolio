import Card from "./Card";
import polgon from "./polygon.svg";
import SkillsSection from "./SkillsSection";
import SectionHeading from "../SectionHeading/SectionHeading";
import { IoIosSpeedometer } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";

const About = ({refVar}) => {
  const features = [
    {
      title: "Fast",
      paragraph:
        "Fast load times and lag free interaction, my highest priority.",
      icon: <IoIosSpeedometer />,
    },
    {
      title: "Intuitive",
      paragraph:
        "Fast load times and lag free interaction, my highest priority.",
      icon: <AiFillBulb />,
    },
    {
      title: "Responsive",
      paragraph:
        "Fast load times and lag free interaction, my highest priority.",
      icon: <MdDevices />,
    },
    {
      title: "Dynamic",
      paragraph:
        "Fast load times and lag free interaction, my highest priority.",
      icon: <FaRocket />,
    },
  ];
  return (
    <section 
    ref={refVar}
    className="about-container w-full text-center bg-[#252934] bubbles " id="about">
      <SectionHeading text={"ABOUT"} colorCode={"fff"} />
      <div className="cards mt-16 w-full px-2 sm:px-2 lg:px-52 xl:px-56">
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
        >
          {features.map((items) => {
            let i = 1;
            return (
              <div>
                <Card
                  key={i + 1}
                  imgSrc={polgon}
                  className="inline-block"
                  title={items.title}
                  paragraph={items.paragraph}
                  icon={items.icon}
                />
              </div>
            );
          })}
        </div>
        <SkillsSection />
      </div>
      
    </section>
  );
};

export default About;
