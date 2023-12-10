export default function UpcomingEvent() {
  return (
    <div className="bg-secondary-300/30">
      <div className="container mx-auto w-[80%]">
        <div className="grid lg:grid-cols-12 py-16 mx-auto gap-8">
          <div className="lg:col-span-7">
            <div className="relative">
              <img
                className="h-full w-full opacity-50"
                src="../images/gathering.jpg"
                alt=""
              />
              <div className="time absolute top-1/2 transform -translate-y-1/2 left-20 text-center w-full">
                <div className="flex mx-auto space-x-10">
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
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12">
            <div className="flex justify-start space-x-4">
              <h3 className="text-secondary-200 text-2xl font-medium tracking-wide uppercase">
                Upcoming Events
              </h3>
              <p className="text-secondary-200 uppercase text-xs mt-1">
                November 7, 2023
              </p>
            </div>

            <h3 className="text-secondary-200 text-2xl font-bold uppercase mt-4 tracking-wider">
              Annual Meetup, Gathering <br />
              and scholarship presentation
            </h3>
            <div className="relative mt-2">
              <span className="absolute">
                <i className="fa-solid fa-location-dot text-secondary-300"></i>
              </span>
              <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide mt-12">
                African Leadership Campus, Pamplemousses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
