import { audienceImage, carousel1, homecomingImage } from "../index/imports";

export default function UpcomingEvents() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <h3 className="text-secondary-100 text-4xl mb-8 font-bold">
        Upcoming Events
      </h3>
      <div className="grid lg:grid-cols-3 gap-10">
        {/* <!-- leadership summit --> */}
        <div className="card shadow-sm relative bg-secondary-300 w-80">
          <img src={audienceImage} alt="seminar" className="w-full" />
          <div className="absolute top-[40.5%] left-0 bg-black/50 w-full">
            <ul className="list-disc px-6 py-2">
              <li className="text-secondary-200 font-medium">
                Leadership Skills
              </li>
              <li className="text-secondary-200 font-medium">Management</li>
              <li className="text-secondary-200 font-medium">
                Personal Development
              </li>
            </ul>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary px-4 py-2">
              <p className="text-secondary-200 font-medium">Nov</p>
              <p className="text-secondary-200 font-medium">23</p>
            </div>
            <div className="p-2">
              <p className="text-primary font-medium text-2xl mb-2">
                Leadership Summit
              </p>
              <div className="relative">
                <span className="absolute">
                  <i className="fa-regular fa-clock text-primary"></i>
                </span>
                <p className="pl-6 text-secondary-200 font-semibold text-">
                  12:00 noon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- themed mixers --> */}
        <div className="card shadow-sm relative bg-secondary-300 w-80">
          <img src={carousel1} alt="carosel" />
          <div className="absolute top-[40.5%] left-0 bg-black/50 w-full">
            <ul className="list-disc px-6 py-2">
              <li className="text-secondary-200 font-medium">Back to campus</li>
              <li className="text-secondary-200 font-medium">
                Alumni wine tasting
              </li>
              <li className="text-secondary-200 font-medium">
                Networking in the park
              </li>
            </ul>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary px-4 py-2">
              <p className="text-secondary-200 font-medium">Dec</p>
              <p className="text-secondary-200 font-medium">10</p>
            </div>
            <div className="p-2">
              <p className="text-primary font-medium text-2xl mb-2">
                Themed Mixers
              </p>
              <div className="relative">
                <span className="absolute">
                  <i className="fa-regular fa-clock text-primary"></i>
                </span>
                <p className="pl-6 text-secondary-200 font-semibold text-">
                  14:30 pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- homecoming --> */}
        <div className="card shadow-sm relative bg-secondary-300 w-80">
          <img src={homecomingImage} alt="seminar" className="w-full" />
          <div className="absolute top-[40.5%] left-0 bg-black/50 w-full">
            <ul className="list-disc px-6 py-2">
              <li className="text-secondary-200 font-medium">Sports games</li>
              <li className="text-secondary-200 font-medium">
                Alumni activities
              </li>
              <li className="text-secondary-200 font-medium">Campus tours</li>
            </ul>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary px-4 py-2">
              <p className="text-secondary-200 font-medium">Dec</p>
              <p className="text-secondary-200 font-medium">20</p>
            </div>
            <div className="p-2">
              <p className="text-primary font-medium text-2xl mb-2">
                Homecoming
              </p>
              <div className="relative">
                <span className="absolute">
                  <i className="fa-regular fa-clock text-primary"></i>
                </span>
                <p className="pl-6 text-secondary-200 font-semibold text-">
                  10:00 am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
