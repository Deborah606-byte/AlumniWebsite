import { friends } from "../../index/imports";

export default function UpcomingEvents() {
  return (
    <div className="bg-secondary-300/30">
      <div className="container grid lg:grid-cols-12 py-16 mx-auto gap-8 w-[80%]">
        <div className="lg:col-span-5">
          <img className="h-[90%] w-full" src={friends} alt="" />
        </div>
        <div className="lg:col-span-7 relative">
          <h3 className="text-secondary-100 text-2xl font-medium tracking-wide">
            Upcoming Events
          </h3>
          <h3 className="text-secondary-200 text-2xl font-bold uppercase mt-4 tracking-wider">
            Annual Meetup, Gathering <br />
            and scholarship presentation
          </h3>
          <div className="relative mt-2">
            <span className="absolute">
              <i className="fa-solid fa-location-dot text-secondary-300"></i>
            </span>
            <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
              African Leadership Campus, Pamplemousses
            </p>
          </div>

          <div className="flex mx-auto space-x-8 mt-28">
            <div className="text-secondary-200 text-center">
              <p className="text-4xl font-medium mb-3">65</p>
              <p className="font-light">Days</p>
            </div>

            <div className="text-secondary-200 -mt-1">
              <p>.</p>
              <p>.</p>
            </div>

            <div className="text-secondary-200 text-center">
              <p className="text-4xl font-medium mb-3">30</p>
              <p className="font-light">Hours</p>
            </div>

            <div className="text-secondary-200 -mt-1">
              <p>.</p>
              <p>.</p>
            </div>

            <div className="text-secondary-200 text-center">
              <p className="text-4xl font-medium mb-3">45</p>
              <p className="font-light">Minutes</p>
            </div>

            <div className="text-secondary-200 -mt-1">
              <p>.</p>
              <p>.</p>
            </div>

            <div className="text-secondary-200 text-center">
              <p className="text-4xl font-medium mb-3">60</p>
              <p className="font-light">Seconds</p>
            </div>

            <div className="mt-6 pl-12">
              <a
                href=""
                className="bg-secondary-300 text-secondary-200 rounded-lg py-5 px-8 hover:text-hover"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="absolute top-6 right-5">
            <p className="bg-secondary-300/50 px-6 text-secondary-200 font-semibold text-2xl">
              21
            </p>
            <p className="bg-secondary-300/50 px-6 text-primary font-light">
              Dec
            </p>
            <p className="bg-secondary-300 px-6 text-primary font-light">
              2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
