import StarHeader from "./StarHeader.tsx"

const teamMember = [
  {
    name: "Nandana Sheri",
    title: "Co-Director",
    image: "/team/naan.JPG",
    linkedin: "https://www.linkedin.com/in/nandana-sheri/"
  },
  {
      name: "Darlene Marchan",
      title: "Co-Director",
      image: "/team/darlene.JPG",
      linkedin: "https://www.linkedin.com/in/darlene-marchan/"
  },
  {
      name: "Jelena Gvero",
      title: "Outreach - Team Lead",
      linkedin: "https://www.linkedin.com/in/jelena-gvero-b24666250/",
      image: "/team/jelena.JPG",
  },
  {
    name: "Sahaja Peddaveerannagari\n",
    title: "Logistics - Team Lead",
    image: "/team/sahaja.JPG",
    linkedin: "https://www.linkedin.com/in/sahaja-reddyp/"
},
  {
    name: "Emily Mendoza",
    title: "Logistics - Team Lead",
    image: "/team/emily.JPG",
    linkedin: "https://www.linkedin.com/in/emily-v-mendoza37/"
  },
  {
    name: "Sarvani Kunapareddy",
    title: "Communications - Team Lead",
    image: "/team/sarv.JPG",
    linkedin: "https://www.linkedin.com/in/sarvani-kunapareddy-287a17203 "
  },
  {
    name: "Chenille Lawrence",
    title: "Experience - Team Lead",
    image: "/team/chenille.JPG",
    linkedin: "https://www.linkedin.com/in/chenille-lawrence/"
  },
  {
    name: "Hamza Gaziuddin",
    title: "Web Dev - Team Lead",
    image: "/team/hamza.JPG",
    linkedin: "https://www.linkedin.com/in/hamza-gaziuddin/"
  },
  {
      name: "Kevin Cordero",
      title: "Web Dev - Team Lead",
      image: "/team/kevin.JPG",
      linkedin: "https://www.linkedin.com/in/kevin-cordero/"
  },
  {
      name: "Sana Topia",
      title: "Outreach",
      image: "/team/sana.JPG",
      linkedin: "https://www.linkedin.com/in/sana-topia-9172ba225/"
  },
  {
      name: "Ciara Taylor",
      title: "Outreach",
      image: "/team/ciara.JPG",
      linkedin: "https://www.linkedin.com/in/ciara-taylor-6a6620230/"
  },
  {
      name: "Fey Ogutuga",
      title: "Outreach",
      image: "/team/fey.JPG",
      linkedin: "https://www.linkedin.com/in/fey-ogutuga-8b89a0216/"
  },

  {
      name: "Aarav Sukartha",
      title: "Logistics",
      image: "/team/aarav.JPG",
      linkedin: "https://www.linkedin.com/in/aarav-surkatha/"
  },
  {
      name: "Tai Ta",
      title: "Logistics",
      image: "/team/tai.JPG",
      linkedin: "https://www.linkedin.com/in/taita/"
  },
  {
      name: "Niharika Patil",
      title: "Logistics",
      image: "/team/niharika.JPG",
      linkedin: "https://www.linkedin.com/in/niharika-patil1468/"
  },
  {
      name: "Garima Goel",
      title: "Communications ",
      image: "/team/garima.JPG",
      linkedin: "https://www.linkedin.com/in/garimagoels"
  },
  {
      name: "David Romero",
      title: "Communications ",
      image: "/team/david.JPG",
      linkedin: "https://www.linkedin.com/in/david-joel-romero"
  },
  {
      name: "Kaustubha Medikundam",
      title: "Communications ",
      image: "/team/kau.JPG",
      linkedin: "https://www.linkedin.com/in/kmedikundam"
  },
  {
      name: "Daniel Mroz",
      title: "Communications ",
      image: "/team/daniel.JPG",
      linkedin: "https://www.linkedin.com/in/daniel-mroz-328496228"
  },
  {
      name: "Krisha Patel",
      title: "Experience  ",
      image: "/team/krisha.JPG",
      linkedin: "https://www.linkedin.com/in/krisha-patel-61b458220/ "
  },
  {
      name: "Yamaan Nandolia",
      title: "Experience  ",
      image: "/team/yamaan.JPG",
      linkedin: "https://www.linkedin.com/in/yamaan-nandolia-09abb1215/"
  },
  {
      name: "Rahin Jain",
      title: "Experience  ",
      image: "/team/anonymous.JPG",
      linkedin: "https://www.linkedin.com/in/rahinj/"
  },
  {
      name: "Erika Sy",
      title: "Experience  ",
      image: "/team/erika.JPG",
      linkedin: "https://www.linkedin.com/in/erika-sy-0aba6025b/"
  },
  {
      name: "Flora Huang",
      title: "Web Dev",
      image: "/team/flora.JPG",
      linkedin: "https://www.linkedin.com/in/fhuang113/"
  },
  {
      name: "Sam Effendy",
      title: "Web Dev",
      image: "/team/sam.JPG",
      linkedin: "https://www.linkedin.com/in/samef/"
  },
  {
      name: "Angel Carbajal",
      title: "Web Dev",
      image: "/team/angel.JPG",
      linkedin: "https://www.linkedin.com/in/angel-carbajal/"
  },
  {
      name: "Zi Jun Wang",
      title: "Web Dev  ",
      image: "/team/anonymous.JPG",
      linkedin: "https://www.linkedin.com/in/zi-jun-wang/"
  }
]


export default function Team(){
  return(
    <section className="w-full h-full">
      <StarHeader text="Meet the Team"/>
      <div className="mt-10 w-full px-[10%] h-full flex flex-wrap justify-center items-center">
        {teamMember.map((member) => 
          <div className="w-[250px] h-[250px] gap-2 flex flex-col justify-center items-center text-center">
            <div className="h-[150px] w-[150px] overflow-hidden rounded-3xl  border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] flex justify-center items-center">
              <img src={member.image} className="h-[150px] w-[150px] object-cover " />
              <div className="absolute h-[150px] w-[150px] rounded-3xl justify-center items-center flex transition duration-500 hover:opacity-100 opacity-0 bg-opacity-50 bg-[#FFDAB9] ">
                <a href={member.linkedin} target="_blank" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 19 20" fill="none">
                    <path d="M17.5 0H1.5C0.671875 0 0 0.671875 0 1.5V17.5C0 18.3281 0.671875 19 1.5 19H17.5C18.3281 19 19 18.3281 19 17.5V1.5C19 0.671875 18.3281 0 17.5 0ZM5.5 16.5H3V7H5.5V16.5ZM4.25 5.5C3.09375 5.5 2.25 4.65625 2.25 3.5C2.25 2.34375 3.09375 1.5 4.25 1.5C5.40625 1.5 6.25 2.34375 6.25 3.5C6.25 4.65625 5.40625 5.5 4.25 5.5ZM16.5 16.5H14V11.75C14 10.6875 13.8125 9.75 12.5 9.75C11.1875 9.75 11 10.6875 11 11.75V16.5H8.5V7H11V8.5C11.3125 7.625 12.125 6.5 14 6.5C15.875 6.5 16.5 7.625 16.5 9.25V16.5Z" fill="#fff"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-lg font-poppin">{member.name}</h1>
              <h1 className="text-white text-md font-poppin">{member.title}</h1>
              
              
            </div>
          </div>
        )}
      </div>
    </section>
  )
}



/* 
import StarHeader from "./StarHeader.tsx"

const teamMember = [
  {
    name: "Sparky D. Dragon",
    title: "Mascot",
    image: "/team/sparky.jpg",
    linkedin: "",
  },
]



export default function Team(){
  return(
    <section className="w-full h-full">
      <StarHeader text="Meet the Team"/>
      <div className="w-full px-[20%] h-full">
        {teamMember.map((member) => 
          <div className="w-[200px] h-[250px] gap-2 flex flex-col justify-center items-center text-center">
            <img src={member.image} className="h-[150px] w-[150px] rounded-3xl object-cover border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9]" />
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-lg font-poppin">{member.name}</h1>
              <div className="flex flex-row justify-center items-center text-white">
                <h1 className=" text-md font-poppin">- {member.title}</h1>
                <a href={member.linkedin} target="_blank" className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M17.5 0H1.5C0.671875 0 0 0.671875 0 1.5V17.5C0 18.3281 0.671875 19 1.5 19H17.5C18.3281 19 19 18.3281 19 17.5V1.5C19 0.671875 18.3281 0 17.5 0ZM5.5 16.5H3V7H5.5V16.5ZM4.25 5.5C3.09375 5.5 2.25 4.65625 2.25 3.5C2.25 2.34375 3.09375 1.5 4.25 1.5C5.40625 1.5 6.25 2.34375 6.25 3.5C6.25 4.65625 5.40625 5.5 4.25 5.5ZM16.5 16.5H14V11.75C14 10.6875 13.8125 9.75 12.5 9.75C11.1875 9.75 11 10.6875 11 11.75V16.5H8.5V7H11V8.5C11.3125 7.625 12.125 6.5 14 6.5C15.875 6.5 16.5 7.625 16.5 9.25V16.5Z" fill="#fff"/>
                  </svg>
                </a>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
 */