// this should be put into its own component file
function StarHeader({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-center items-center md:flex-row flex-col gap-5 h-full z-[1]">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="61" viewBox="0 0 68 61" fill="none">
          <g filter="url(#filter0_d_310_489)">
            <path
              d="M23.7944 17.5942C23.7944 17.5942 25.7095 4.76448 31.2475 4.02969C36.7856 3.29489 42.8211 16.4443 42.8211 16.4443C42.8211 16.4443 61.2957 13.8308 63.2696 17.5942C65.1794 21.2353 48.3043 31.0638 48.3043 31.0638C48.3043 31.0638 62.3386 45.5617 56.6349 50.2974C51.4807 54.5769 37.7765 41.9052 37.7765 41.9052C37.7765 41.9052 27.5739 57.744 21.5972 56.0466C15.3464 54.2714 23.0267 34.0205 23.0267 34.0205C23.0267 34.0205 4 30.531 4 24.9861C4 20.5656 23.7944 17.5942 23.7944 17.5942Z"
              fill="#FFCE6A"
            />
          </g>
          <defs>
            <filter id="filter0_d_310_489" x="0" y="0" width="67.4199" height="60.1738" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.807843 0 0 0 0 0.415686 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_489" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_489" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      <h1
        className=" text-[#FFCE6A] text-center drop-shadow-[0px_0px_7px_#FFCE6A] font-poppin lg:text-[50px] 
        text-3xl font-[500]"
      >
        {text}
      </h1>
    </div>
  );
}

const schedulingData = [
  {
    date: "February 16th",
    day: "Tuesday",
    events: [
      {
        time: "2:45pm",
        title: "Check In",
      },
      {
        time: "3:30pm",
        title: "Opening Remarks",
      },
      {
        time: "4:00pm",
        title: "Introduction to Git and GitHub",
      },
      {
        time: "5:00pm",
        title: "Continuous Deployment of Cloud Native Applications",
      },
      {
        time: "6:00pm",
        title: "Introduction to App Development with React Native",
      },
      {
        time: "6:00pm",
        title: "Introduction to Web Development with React",
      },
      {
        time: "7:00pm",
        title: "Dinner Social",
      },
      {
        time: "9:00pm",
        title: "End of Day 1",
      },
    ],
  },
  {
    date: "February 17th",
    day: "Wednesday",
    events: [
      {
        time: "2:45pm",
        title: "Check In",
      },
      {
        time: "3:30pm",
        title: "Opening Remarks",
      },
      {
        time: "4:00pm",
        title: "Introduction to Git and GitHub",
      },
      {
        time: "5:00pm",
        title: "Continuous Deployment of Cloud Native Applications",
      },
      {
        time: "6:00pm",
        title: "Introduction to App Development with React Native",
      },
      {
        time: "6:00pm",
        title: "Introduction to Web Development with React",
      },
      {
        time: "7:00pm",
        title: "Dinner Social",
      },
      {
        time: "9:00pm",
        title: "End of Day 1",
      },
    ],
  },
];

function ScheduleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[26px] min-w-[30rem] border-4 border-[#FFDAB9] border-[4px_solid_#FFDAB9] shadow-[0px_0px_4px_0px_#FFDAB9] backdrop-blur-[19.5px] flex flex-col p-6 text-white font-poppin">
      {children}
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="w-full min-h-screen">
      <StarHeader text="Schedule" />

      <div class="flex flex-wrap items-center justify-center gap-5 my-10">
        {schedulingData.map((day, i) => (
          <ScheduleCard key={i}>
            <h1 className="text-3xl font-[500]">{day.date}</h1>
            <h1 className="text-2xl font-poppin font-[500] mb-5">{day.day}</h1>
            <div className="flex flex-col gap-5">
              {day.events.map((event, j) => (
                <p className="text-lg" key={j}>
                  {event.time} - {event.title}
                </p>
              ))}
            </div>
          </ScheduleCard>
        ))}
      </div>
    </section>
  );
}
