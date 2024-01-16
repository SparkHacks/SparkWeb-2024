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
      <div className="w-full px-[20%] h-full flex justify-center items-center">
        {teamMember.map((member) => 
          <div className="w-[200px] h-[250px] gap-2 flex flex-col justify-center items-center text-center">
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
              <h1 className="text-white text-md font-poppin">- {member.title} -</h1>
              
              
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