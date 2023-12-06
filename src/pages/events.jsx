export default function Events() {
  return (
    <div className="bg-primary">
      <header>
        <nav className="flex justify-between items-center container mx-auto py-4 w-[80%]">
          <a href="#" className="font-extrabold">
            <h1 className="text-secondary-200 text-2xl">
              <span className="text-secondary-100 text-3xl">A</span>lumni
              <span className="text-secondary-100 text-3xl">N</span>exus
            </h1>
          </a>
          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="text-secondary-100 hover:text-hover" href="/home">
                  Home
                </a>
              </li>
              <li className="">
                <a className="cursor-pointer text-hover">Programs & Events</a>
              </li>
              <li>
                <a
                  className="text-secondary-100 hover:text-hover"
                  href="/stories"
                >
                  Alumni Stories
                </a>
              </li>
              <li>
                <a
                  className="text-secondary-100 hover:text-hover"
                  href="/opportunity"
                >
                  Career Opportunity
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

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

      {/* <!-- All Alumni Events --> */}
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
                  Our International Alumni Mixers are a celebration of the
                  global reach of AlumniNexus. These events are dedicated to our
                  alumni who live abroad, providing them with a unique
                  opportunity to connect with fellow alumni in their local
                  regions.
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
                  experiences, and build valuable professional connections.
                  Don't miss this opportunity to strengthen your network.
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
                  This event is designed to provide alumni with valuable
                  insights and practical tips for professional growth. If you
                  are looking to start your own career or join a firm this event
                  is for you.
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
                  Our International Alumni Mixers are a celebration of the
                  global reach of AlumniNexus. These events are dedicated to our
                  alumni who live abroad, providing them with a unique
                  opportunity to connect with fellow alumni in their local
                  regions.
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
                  experiences, and build valuable professional connections.
                  Don't miss this opportunity to strengthen your network.
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
                  This event is designed to provide alumni with valuable
                  insights and practical tips for professional growth. If you
                  are looking to start your own career or join a firm this event
                  is for you.
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

      {/* <!-- subscribe --> */}
      <div className="bg-black/30">
        <div className="container mx-auto w-[80%]">
          <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-secondary-100 sm:text-4xl">
                    Subscribe to our newsletter.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-secondary-200">
                    Stay connected with AlumniNexus! Subscribe to our newsletter
                    for the latest updates, exclusive alumni stories, and
                    upcoming event announcements. Join our community and never
                    miss out on exciting news.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label for="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-secondary-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-hover px-3.5 py-2.5 text-sm font-semibold text-secondary-200 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-secondary-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-secondary-100">
                      Weekly articles
                    </dt>
                    <dd className="mt-2 leading-7 text-secondary-200">
                      Explore thought-provoking articles in our weekly
                      newsletter. Discover insights, success stories, and
                      valuable tips from fellow alumni
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-secondary-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-secondary-100">
                      No spam
                    </dt>
                    <dd className="mt-2 leading-7 text-secondary-200">
                      We promise no spam—just meaningful content to keep you
                      informed and inspired.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer starts here --> */}
      <div className="bg-black/50">
        <div className="container mx-auto pt-36 pb-5 w-[80%]">
          <div className="grid lg:grid-cols-4 gap-10 mb-36">
            <div className="mt-12">
              <img className="" src="../images/ion_logo-electron.png" alt="" />
            </div>
            <div>
              <a href="#" className="font-extrabold">
                <h1 className="text-secondary-200 text-2xl">
                  <span className="text-secondary-100 text-3xl">A</span>lumni
                  <span className="text-secondary-100 text-3xl">N</span>exus
                </h1>
              </a>
              <p className="mt-5 text-secondary-200 font-light text-sm leading-relaxed">
                "Discover the power of alumni connections with AlumniNexus.
                Uniting past, present, and future, our platform fosters
                meaningful interactions, professional growth, and a lifelong
                bond among our community. Join us in shaping the legacy of
                excellence and opportunity."
              </p>
            </div>
            <div>
              <h4 className="text-secondary-100 font-medium text-3xl">
                Contact Details
              </h4>
              <div className="mt-5">
                <div className="flex justify-start space-x-4 mb-5">
                  <i className="fa-solid fa-phone text-secondary-100"></i>
                  <p className="text-secondary-200 font-light text-sm">
                    +230-7869-9070
                  </p>
                </div>
                <div className="flex justify-start space-x-4 mb-5">
                  <i className="fa-solid fa-globe text-secondary-100"></i>
                  <p className="text-secondary-200 font-light text-sm">
                    www.alumninexus.org
                  </p>
                </div>
                <div className="flex justify-start space-x-4">
                  <i className="fa-solid fa-envelope text-secondary-100"></i>
                  <p className="text-secondary-200 font-light text-sm">
                    alumninexus@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-secondary-100 font-medium text-3xl">
                Events
              </h4>
              <ul className="text-secondary-200 font-light text-sm mt-5">
                <a className="hover:text-hover" href="#">
                  <li className="mb-5">Professional Development Workshops</li>
                </a>
                <a className="hover:text-hover" href="#">
                  <li className="mb-5">Networking Mixers</li>
                </a>
                <a className="hover:text-hover" href="#">
                  <li>Campus Events</li>
                </a>
              </ul>
            </div>
          </div>

          <hr className="h-[2px] my-6 bg-secondary-100 opacity-60" />

          <div className="flex justify-between">
            <p className="text-sm text-secondary-200 font-light">
              &copy; 2023 AlumniNexus. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="text-secondary-100 w-5 h-5 fill-current rounded-full"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="text-secondary-100 w-5 h-5 fill-current rounded-full"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="text-secondary-100 w-5 h-5 fill-current rounded-full"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <script src="../js/navbar.js"></script>
    <script src="../js/alumniEvents.js"></script> */}
    </div>
  );
}