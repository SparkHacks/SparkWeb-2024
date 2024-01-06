import { motion  } from 'framer-motion';

const sponsors = [
  {
    name: "Discover",
    image: "sponsorLogo/discoverlogo.png",
  },
  {
    name: "UIC CS Department",
    image: "sponsorLogo/uiccslogo.png",
  },
  {
    name: "John Deere",
    image: "sponsorLogo/johndeerelogo.png",
  },
  {
    name: "Caterpillar",
    image: "sponsorLogo/caterpillarlogo.png",
  },
  {
    name: "Abbvie",
    image: "sponsorLogo/abbvielogo.png",
  },
  {
    name: "Publicis Sapient",
    image: "sponsorLogo/publicissapientlogo.png",
  },
  {
    name: "CME Group",
    image: "sponsorLogo/cmegrouplogo.png",
  },
]

const sponsorLength = sponsors.length
const logoWidth = 250
const logoGap = 30

const maequeeSponsor = {
  animate: {
    x: [0, -sponsorLength * (logoWidth + logoGap)],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      }
    }
  }
}

export default function Sponsor(){
  return(
    <section className="w-full flex flex-col overflow-x-hidden" id="sponsor">
      <div className="mt-20 w-full flex justify-center items-center md:flex-row flex-col gap-5 h-full z-[1]">
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
        text-3xl font-[500]">Sponsors</h1>
      </div>
      <motion.div
      variants={maequeeSponsor}
      animate="animate"
      className="flex flex-row w-full gap-[30px] mt-10 items-center">
          {sponsors.map((sponsor) => 
          <div key={sponsor.name}  className='group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[#FFDAB9] font-poppin '>{sponsor.name}</span>
            <img src={sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"></img>
            
            </div>
          )}
          {sponsors.map((sponsor) => 
          <div key={sponsor.name}  className='group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[#FFDAB9] font-poppin '>{sponsor.name}</span>
            <img src={sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"></img>
            
            </div>
          )}
          {sponsors.map((sponsor) => 
          <div key={sponsor.name}  className='group relative flex justify-center items-center min-h-[160px]'>
            <span className=' shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px]  absolute opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100  w-[70%] text-center text-[#FFDAB9] font-poppin '>{sponsor.name}</span>
            <img src={sponsor.image} width="250" height="250" className="object-contain min-w-[250px]"></img>
            
            </div>
          )}
      
      </motion.div>
      <div className='w-full h-full'>
        <div className='absolute overflow-x-hidden w-full h-[250px]'>
          <motion.img 
          initial={{ x: 0 }}
          whileInView={{  x: -4000 }}
          transition={{ duration: 20 }}
          viewport={{ once: true }}
          src="/airplane.png" alt="" className="absolute w-[200px] opacity-60 -right-[190px]"/>

          <motion.img 
          initial={{ x: 0 }}
          whileInView={{  x: 4000 }}
          transition={{ duration: 20, delay: 1 }}
          viewport={{ once: true }}
          src="/helicopter.png" alt="" className="absolute w-[150px] -bottom-0 opacity-60 -left-[150px]"/>
        </div>
      </div>
    </section>
  )
}
