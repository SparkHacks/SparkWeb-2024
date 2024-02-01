import { date } from "astro/zod";
import StarHeader from "./StarHeader.tsx";

const schedulingData = [
  {
    date: "February 9th",
    day: "Friday",
    events: [
      {
        time: "2:30 pm - 3:30 pm",
        title: "Check-In and Career Fair",
      },
      {
        time: "3:30 pm - 4:00 pm",
        title: "Opening Ceremony and Releasing Tracks & Prompts",
      },
      {
        time: "4:00 pm - 5:00 pm",
        title: "‘Creating a Basic Web App’ Workshop with John Deere",
      },
      {
        time: "4:00 pm - 5:00 pm",
        title: "Resume Review Workshop with CAT",
      },
      {
        time: "4:00 pm - 5:30 pm",
        title: "Brainstorm Project Ideas with Mentors",
      },
      {
        time: "5:00 pm - 6:30 pm",
        title: "‘How to Host your Hack Project using AWS’ with Discover",
      },
      {
        time: "5:00 pm - 6:00 pm",
        title: "Interviewing Tips and Tricks from Abbvie",
      },
      {
        time: "6:00 pm - 7:00 pm",
        title: "Intro to API Workshop with CAT",
      },
      {
        time: "7:00 pm - 8:00 pm",
        title: "Dinner",
      },
      {
        time: "8:00 pm - 9:00 pm",
        title: "Mario Kart Tournament with Insomnia Cookies",
      },
    ],
  },
  {
    date: "February 10th",
    day: "Saturday",
    events: [
      {
        time: "9:00 am - 10:00 am",
        title: "Check-In and Breakfast",
      },
      {
        time: "12:00 pm - 1:00 pm",
        title: "Destress Social with Anime",
      },
      {
        time: "1:00 pm - 2:00 pm",
        title: "Lunch",
      },
      {
        time: "2:30 pm - 3:00 pm",
        title: "How to Submit your Project: DevPost 101",
      },
      {
        time: "4:00 pm",
        title: "Project Submission Deadline",
      },
      {
        time: "4:15 pm - 5:15 pm",
        title: "Project Expo",
      },
      {
        time: "5:30 pm - 6:00 pm",
        title: "Meet your Organizers & SparkHacks 2025",
      },
      {
        time: "6:00 pm - 7:00 pm",
        title: "Announcement of Winners & Closing Ceremony",
      },
      {
        time: "7:00 pm - 8:00 pm",
        title: "Dinner",
      },
    ],
  },
];

const preWorkshop = [
  {
    date: "February 5th",
    time: "5:00 pm - 6:30 pm",
    description: "Git Yourself Together (Intro to Git and Version Control)",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    location: "ARC 136",
    maps: "https://maps.app.goo.gl/M1pk7PSRw5CJgKJ2A",
  },
  {
    date: "February 6th",
    time: "5:00 pm - 6:30 pm",
    description: "Intro to React.js and Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    location: "ARC 241",
    maps: "https://maps.app.goo.gl/M1pk7PSRw5CJgKJ2A",
  },
  {
    date: "February 7th",
    time: "5:00 pm - 6:30 pm",
    description: "Intro to Google Firebase (Backend)",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    location: "ARC 242",
    maps: "https://maps.app.goo.gl/M1pk7PSRw5CJgKJ2A",
  },
  {
    date: "February 8th",
    time: "5:00 pm - 6:30 pm",
    description: "Team Formation + Social",
    image: "https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png",
    location: "SELE 2260",
    maps: "https://maps.app.goo.gl/BxDWteiQ9seMLbch7",
  },
]

function ScheduleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[26px] w-[500px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col p-6 text-white font-poppin">
      {children}
    </div>
  );
}

function WorkshopCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[26px] w-[300px] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col py-3 px-6 text-white font-poppin justify-start items-center gap-4 text-center h-[320px]">
      {children}
    </div>
  );
}


export default function Schedule() {
  return (
    <section id="schedule" className="w-full min-h-screen bg-stars-pattern bg-[length:300px_300px] ">
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <StarHeader text="Pre-Hack Workshops" />
        <div className="flex flex-wrap items-center justify-center mt-12 gap-10">
          {preWorkshop.map((day, i) => (
            <WorkshopCard
              key={i}>
              <img src={day.image} alt="" className="w-20 h-20 pt-2 object-contain brightness-0 invert" />
              <div className="flex flex-wrap items-center justify-center gap-1 flex-col">
                <h1 className="text-3xl font-poppin font-[500]">{day.date}</h1>
                <a className=" text-[#FFCE6A] cursor-pointer" href={day.maps} target="_blank">{day.location}</a>
              </div>
              <h1 className="text-2xl font-poppin font-[500] ">{day.time}</h1>
              <p className="text-lg font-poppin pb-5">{day.description}</p>
            </WorkshopCard>
          ))}
        </div>
      </div>

      <StarHeader text="Schedule" />

      <div className="flex flex-wrap justify-center gap-28 my-10">
        {schedulingData.map((day, i) => (
          <ScheduleCard key={i}>
            <h1 className="text-3xl font-[500]">{day.date}</h1>
            <h1 className="text-2xl font-poppin font-[500] mb-5">{day.day}</h1>
            <div className="flex flex-col gap-5">
              {day.events.map((event, j) => (
                <p className="text-lg" key={j}>
                  <span className=" font-extrabold">{event.time}</span> | {event.title}
                </p>
              ))}
            </div>
          </ScheduleCard>
        ))}
      </div>
    </section>
  );
}
