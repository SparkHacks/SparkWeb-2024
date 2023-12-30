
import { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';
import cloud from "../assets/cloud1.png";

const faqData = [
  { 
    id: 1,
    question: "How do I participate?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien ultrices, dictum erat vel, ultrices ligula. " 
  },
  { 
    id: 2,
    question: "Who is allowed to attend?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien ultrices, dictum erat vel, ultrices ligula. " 
  },
  { 
    id: 3,
    question: "How can I stay updated with the event?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien ultrices, dictum erat vel, ultrices ligula. " 
  },
  { 
    id: 4,
    question: "When and where will the event be located?", 
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at sapien ultrices, dictum erat vel, ultrices ligula. " 
  },
  { 
    id: 5,
    question: "Will it be free?", 
    answer: "Yes! SparkHacks will always be free." 
  },

];

export default function frqaskquest () {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? faqData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === faqData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full min-h-screen flex flex-col " id="FAQ">
      <div className="w-full flex justify-center items-center md:flex-row flex-col gap-5 h-full z-[1]">

        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="61" viewBox="0 0 68 61" fill="none">
          <g filter="url(#filter0_d_310_489)">
            <path d="M23.7944 17.5942C23.7944 17.5942 25.7095 4.76448 31.2475 4.02969C36.7856 3.29489 42.8211 16.4443 42.8211 16.4443C42.8211 16.4443 61.2957 13.8308 63.2696 17.5942C65.1794 21.2353 48.3043 31.0638 48.3043 31.0638C48.3043 31.0638 62.3386 45.5617 56.6349 50.2974C51.4807 54.5769 37.7765 41.9052 37.7765 41.9052C37.7765 41.9052 27.5739 57.744 21.5972 56.0466C15.3464 54.2714 23.0267 34.0205 23.0267 34.0205C23.0267 34.0205 4 30.531 4 24.9861C4 20.5656 23.7944 17.5942 23.7944 17.5942Z" fill="#FFCE6A"/>
          </g>
          <defs>
            <filter id="filter0_d_310_489" x="0" y="0" width="67.4199" height="60.1738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.807843 0 0 0 0 0.415686 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_489"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_489" result="shape"/>
            </filter>
          </defs>
        </svg>
        </div>

        <h1 className=" text-[#FFCE6A] text-center drop-shadow-[0px_0px_7px_#FFCE6A] font-poppin lg:text-[50px] 
        text-3xl font-[500]">Frequently Asked Questions</h1>
      </div>

      <div className="mt-[65px] z-[1] w-full h-full flex justify-center items-center md:flex-none flex-row">
        <motion.div 
        whileTap={{ scale: 0.9 }} 
        onClick={handlePrev} 
        className="md:hidden flex cursor-pointer">
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

        <div className="hidden px-[10%] w-full h-full md:flex justify-center items-center gap-[85px] flex-wrap  ">
          {faqData.map((data) => 
            <div key={data.id} className=" rounded-[26px] w-[319px] h-[283px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col px-3">
              <h1 className="text-[#FFDAB9] text-2xl  mt-4 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{data.question}</h1>
              <p className="text-[#FFDAB9] text-lg  mt-3 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{data.answer}</p>
            </div>
          )}
        </div>

        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, transition: "easeIn" }}
          className="flex px-[10%] w-[300px] h-full md:hidden justify-center items-center gap-[85px] flex-row overflow-hidden">
            <div className="rounded-[26px] max-w-[250px] max-h-[221.787px] min-w-[250px] min-h-[221.787px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col px-3">
              <h1 className="text-[#FFDAB9] text-[18px] mt-4 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">
                {faqData[currentIndex].question}
              </h1>
              <p className="text-[#FFDAB9] text-[14.107px] mt-3 font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">
                {faqData[currentIndex].answer}
              </p>
            </div>
        </motion.div>

        <motion.div 
        whileTap={{ scale: 0.9 }}
        onClick={handleNext} 
        className="md:hidden flex cursor-pointer">
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
            viewport={{ once: true, amount: .9  }}
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
