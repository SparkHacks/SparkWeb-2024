import { motion  } from 'framer-motion';
import StarHeader from "./StarHeader.tsx";

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
  {
    name: "Blue Cross Blue Shield Illinois",
    image: "sponsorLogo/bcbs.png",
  },
  {
    name: "CodePath",
    image: "sponsorLogo/codepath.png",
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
      <StarHeader text="Sponsor"/>
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
