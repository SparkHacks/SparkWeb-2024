
import { useState } from 'react';
import { motion  } from 'framer-motion';
import cloud from "../assets/cloud1.png";
import StarHeader from "./StarHeader.tsx";

const faqData = [
  { 
    id: 1,
    question: "Who can participate?", 
    answer: "SparkHacks is open to anyone! Whether you're a freshman with no coding experience or a senior with a keen interest in technology, you are welcome to join. We encourage diversity and a mix of skills to create a dynamic and enriching experience for all participants." 
  },
  { 
    id: 2,
    question: "What is the deadline to apply for SparkHacks?", 
    answer: "There is no deadline to apply but we will be accepting applications on a rolling basis and will close registrations once we hit a certain threshold. Please apply as soon as possible since we only have a limited number of spots available! Encourage the rest of your team to apply as soon as possible as well."},
  { 
    id: 3,
    question: "Is SparkHacks overnight?", 
    answer: "Unfortunately, at this time we cannot offer an overnight Hackathon experience. You are welcome to continue hacking at home within the hacking period but we cannot provide facilities for sleeping on campus." 
  },
  { 
    id: 4,
    question: "How are projects judged, and what is the criteria?", 
    answer: "The Judging Criteria will be available within the HackPack. A panel of experienced judges from the industry along with faculty will evaluate the projects and determine the winners." 
  },
  { 
    id: 5,
    question: "What if I don’t want to code?", 
    answer: "No problem! We have a No-Code track where you can take one of our prompts and implement it using Figma!" 
  },
  { 
    id: 6,
    question: "Do I need a team to participate in SparkHacks?", 
    answer: "Yes, teams should have at least 2 members and up to 5 members. We will be having a Team Formation Social to help you find potential teammates!" 
  },
  { 
    id: 7,
    question: "Can I start working on my project before SparkHacks begins?", 
    answer: "No, all projects must be started and developed during SparkHacks. Participants are expected to attend the opening session to learn of the tracks and corresponding prompts." 
  },
  { 
    id: 8,
    question: "Where can I find SparkHacks resources?", 
    answer: "All SparkHacks resources, including guidelines, workshops, resources to help you best prepare, and other relevant information, will be available in the HackPack." 
  },
  { 
    id: 9,
    question: "How to find support during the hackathon?", 
    answer: "Mentors will be available throughout SparkHacks in person as well as through Discord to provide guidance, answer questions, and assist participants with technical challenges. You can reach out to a mentor at any time during SparkHacks!" 
  },
  { 
    id: 10,
    question: "How can I submit my project?", 
    answer: "All submissions will be made through Devpost which is also how we will be keeping track of teams. There will be a session to familiarize yourself with how to submit your project through Devpost during the hackathon." 
  },
  { 
    id: 11,
    question: "What prizes are available for winners?", 
    answer: "Prizes may vary, but typically winners will receive recognition as well as valuable tech gadgets. Prizes are track-specific and the list of prizes can be found in the HackPack." 
  },
  { 
    id: 12,
    question: "Whom should I contact if I have questions?", 
    answer: "You can reach out to the Exec Team through sparkhacks@uic.edu, or on Instagram @sparkhacksuic or LinkedIn - SparkHacks" 
  },

];


export default function frqaskquest () {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [FAQDirection, setFAQDirection] = useState("left"); 

  const handlePrev = () => {
    setFAQDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? faqData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setFAQDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex === faqData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full md:min-h-screen flex flex-col bg-[length:300px_300px] " id="faq">
      <StarHeader text="Frequently Asked Questions" />

      <div className=" overflow-x-hidden mt-[65px] z-[1] w-full h-full flex justify-center items-center md:flex-none flex-row">
        <motion.div 
        onClick={handlePrev} 
        className="md:hidden flex cursor-pointer border-2 rounded-full w-[30px] h-[30px] justify-center items-center border-[#FFDAB9] mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
            <g filter="url(#filter0_d_317_547)">
              <path d="M11 2L3 8.5L11 15" stroke="#FFDAB9" strokeLinecap="round"/>
            </g>
            <defs>
              <filter id="filter0_d_317_547" x="0.837168" y="0.130137" width="12.0327" height="16.7397" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.684931"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.807843 0 0 0 0 0.415686 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_317_547"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_317_547" result="shape"/>
              </filter>
            </defs>
          </svg>
        </motion.div>

        <div className="hidden w-full h-full md:flex justify-center items-center gap-[85px] flex-wrap overflow-x-hidden  ">
          {faqData.map((data) => 
            <div key={data.id} className=" rounded-[26px] w-[380px] h-[380px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col px-3">
              <h1 className="text-[#FFDAB9] text-2xl  mt-4 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{data.question}</h1>
              <p className="text-[#FFDAB9] text-lg  mt-3 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{data.answer}</p>
            </div>
          )}
        </div>

        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: FAQDirection === "right" ? 50 : -50  }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: FAQDirection === "right" ? -50 : 50 }}
          transition={{ duration: 0.5, transition: "easeIn" }}
          className="flex px-[2%] w-[290px] h-[290px] md:hidden justify-center items-center gap-[85px] flex-row overflow-hidden">
            <div className="rounded-[26px] w-[290px] h-[290px] min-w-[290px] min-h-[290px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col px-3">
              <h1 className="text-[#FFDAB9] text-[18px] mt-4 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">
                {faqData[currentIndex].question}
              </h1>
              <p className="text-[#FFDAB9] text-[14.107px] mt-3 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">
                {faqData[currentIndex].answer}
              </p>
            </div>
        </motion.div>

        <motion.div 
        onClick={handleNext} 
        className="md:hidden flex cursor-pointer border-2 rounded-full w-[30px] h-[30px] justify-center items-center border-[#FFDAB9] ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
            <g filter="url(#filter0_d_317_546)">
              <path d="M2 15L10 8.5L2 2" stroke="#FFDAB9" strokeLinecap="round"/>
            </g>
            <defs>
              <filter id="filter0_d_317_546" x="0.130137" y="0.130137" width="12.0327" height="16.7397" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.684931"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.807843 0 0 0 0 0.415686 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_317_546"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_317_546" result="shape"/>
              </filter>
            </defs>
          </svg>
        </motion.div>

      </div>

      <div className="w-full min-h-[1250px] absolute overflow-y-visible ">
          <div className="overflow-x-hidden -top-[300px] absolute w-full min-h-[1250px]">
            <motion.img
            initial={{  x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: .8  }}
            src={cloud.src} alt="" className="absolute md:-right-[218px] -right-[80px] md:w-[817px] md:h-[319px] w-[300px] h-[120px] "></motion.img>
            <motion.img
            initial={{ x: 200 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: .7  }} 
            src={cloud.src} alt="" className="absolute md:-left-[407px] -left-[72px] top-[300px] md:w-[817px] md:h-[319px] w-[300px] h-[120px]"></motion.img>
            <motion.img
            initial={{ x: -200 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: .7  }} 
            src={cloud.src} alt="" className="absolute md:-right-[306px] -right-[100px]  top-[600px] md:w-[817px] md:h-[319px] w-[300px] h-[120px]"></motion.img>
            <motion.img
            initial={{ x: 200 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: .4  }} 
            src={cloud.src} alt="" className="absolute md:-left-[300px] -left-[90px]  top-[900px] md:w-[817px] md:h-[319px] w-[300px] h-[120px]"></motion.img>
          </div>
      </div>
      
      
    </section>
  )
}
