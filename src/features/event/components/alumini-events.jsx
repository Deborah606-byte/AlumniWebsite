export default function AluminiEvents() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <h3 className="text-secondary-100 font-extrabold text-3xl text-center mb-5">
        All Alumni Events
      </h3>

      <div className="flex items-center justify-center mx-auto py-10 space-x-4">
        <button className="bg-secondary-100 text-secondary-200 py-2 px-8 rounded-full">
          Search
        </button>
        <label
          className="text-secondary-100 font-medium text-xl"
          for="categorySelect"
        >
          Select Category:
        </label>
        <select
          className="bg-primary text-secondary-200 border-2 border-secondary-200 rounded-full px-4 py-2"
          id="categorySelect"
          onchange="searchEvents()"
        >
          <option className="mb-2" value="all">
            All Events
          </option>
          <option className="mb-2" value="professional">
            Professional Development
          </option>
          <option className="mb-2" value="networking">
            Networking
          </option>
          <option className="mb-2" value="campus">
            Campus Events
          </option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* <!-- networking --> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="networking"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/homecoming.jpg"
              alt="homecoming"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              International Alumni Mixers
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Dec</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                24
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Our International Alumni Mixers are a celebration of the global
                reach of AlumniNexus. These events are dedicated to our alumni
                who live abroad, providing them with a unique opportunity to
                connect with fellow alumni in their local regions.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  African Leadership Campus, Pamplemousses
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href="/details"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>

        {/* <!-- networking --> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="networking"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/carousel1.PNG"
              alt="homecoming"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              Alumni Networking Gala
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Nov</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                28
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Join us for an evening of networking and celebration at the
                Alumni Networking Gala. Connect with fellow alumni, share
                experiences, and build valuable professional connections. Don't
                miss this opportunity to strengthen your network.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  University of Mauritius, Moka South
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href="/details"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>

        {/* <!-- professional development --> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="professional"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/audience-seminar-applauding-young-black-woman-lectern_625516-3573.avif"
              alt="professonal"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              Career Development Workshop
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Dec</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                15
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Enhance your career skills at our Career Development Workshop.
                This event is designed to provide alumni with valuable insights
                and practical tips for professional growth. If you are looking
                to start your own career or join a firm this event is for you.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  Seminar room, ALC, Pamplemousses
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href="/details"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      {/* <!-- more events  --> */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10 hidden hidden-grid">
        {/* <!-- networking --> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="networking"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/homecoming.jpg"
              alt="homecoming"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              International Alumni Mixers
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Dec</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                24
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Our International Alumni Mixers are a celebration of the global
                reach of AlumniNexus. These events are dedicated to our alumni
                who live abroad, providing them with a unique opportunity to
                connect with fellow alumni in their local regions.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  African Leadership Campus, Pamplemousses
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href="/details"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>

        {/* <!-- networking --> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="professional"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/carousel1.PNG"
              alt="homecoming"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              Alumni Networking Gala
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Nov</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                28
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Join us for an evening of networking and celebration at the
                Alumni Networking Gala. Connect with fellow alumni, share
                experiences, and build valuable professional connections. Don't
                miss this opportunity to strengthen your network.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  University of Mauritius, Moka South
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href=""
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>

        {/* <!-- Campus Event--> */}
        <div
          className="card shadow-sm relative bg-secondary-300 w-80"
          data-category="campus"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover"
              src="../images/audience-seminar-applauding-young-black-woman-lectern_625516-3573.avif"
              alt="professonal"
            />
          </div>
          <div className="absolute top-1/3 left-0 bg-black/50 w-full text-center">
            <h4 className="text-secondary-100 font-medium text-xl mb-2">
              Career Development Workshop
            </h4>
          </div>
          <div className="flex justify-start space-x-8 mb-4">
            <div className="bg-primary py-16 px-4">
              <p className="text-secondary-200 font-medium mb-2">Dec</p>
              <p className="text-secondary-200 font-medium text-center mb-2">
                15
              </p>
              <p className="text-secondary-200 font-medium">2023</p>
            </div>
            <div className="p-2">
              <p className="text-secondary-200 text-sm font-light leading-relaxed">
                Enhance your career skills at our Career Development Workshop.
                This event is designed to provide alumni with valuable insights
                and practical tips for professional growth. If you are looking
                to start your own career or join a firm this event is for you.
              </p>

              <div className="relative mt-5">
                <span className="absolute">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                </span>
                <p className="pl-5 text-secondary-200 font-light text-sm tracking-wide">
                  Seminar room, ALC, Pamplemousses
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2 py-2">
            <a
              href="/details"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              View Details
            </a>
            <a
              href="/rsvp"
              className="bg-secondary-100 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      <div className="flex py-16 space-x-8">
        <hr className="w-[42%] bg-secondary-200 mt-2" />
        <div className="flex space-x-2">
          <a className="load-more-link text-secondary-200 font-light text-sm cursor-pointer hover:text-gray-500">
            Load more
          </a>
          <i className="fa-solid fa-angle-down text-secondary-200 mt-1 cursor-pointer hover:text-gray-500"></i>
        </div>
        <hr className="w-[42%] bg-secondary-200 mt-2" />
      </div>
    </div>
  );
}
