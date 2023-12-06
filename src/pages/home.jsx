export default function Home() {
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
                <a
                  className="text-hover cursor-pointer"
                  aria-current="page"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-secondary-100 hover:text-hover"
                >
                  Programs & Events
                </a>
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
                  Career Opportunities
                </a>
              </li>

              <button
                id="dashboard-link"
                className="uppercase bg-secondary-100 hover:scale-110 py-2 px-4 text-center text-secondary-200 rounded-lg"
              >
                My dashboard
              </button>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!-- carousel for hero section --> */}
      <div className="img-slider relative h-screen overflow-hidden">
        <div className="carousel relative flex h-full">
          <div className="slide w-full h-full relative">
            <img
              src="../images/carousel1.PNG"
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
              <h2 className="text-5xl font-semibold uppercase leading-relaxed">
                Alumni Community: <br />
                Where Lifelong <br />
                Bonds Form
              </h2>
            </div>
          </div>

          <div className="slide w-full h-full relative">
            <img
              src="../images/carousel2.PNG"
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
              <h2 className="text-5xl font-semibold uppercase leading-relaxed">
                Crafting Success <br />
                Stories Together
              </h2>
            </div>
          </div>

          <div className="slide w-full h-full relative">
            <img
              src="../images/carousel3.PNG"
              alt=""
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 text-secondary-200 text-center w-full">
              <h2 className="text-5xl font-semibold uppercase leading-relaxed">
                Celebrating Memories, <br />
                Creating Futures
              </h2>
            </div>
          </div>
        </div>

        <div className="dots flex justify-center mt-4 absolute bottom-4 left-0 right-0">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* <!-- upcoming events --> */}
      <div className="bg-secondary-300/30">
        <div className="container grid lg:grid-cols-12 py-16 mx-auto gap-8 w-[80%]">
          <div className="lg:col-span-5">
            <img
              className="h-[90%] w-full"
              src="../images/happy-joyful-friends-talking-laughing_1262-21146.jpg"
              alt=""
            />
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

      {/* <!-- dashboard --> */}
      <div className="container mx-auto py-16 w-[80%]">
        <h2 className="text-secondary-100 text-3xl font-bold">
          My Alumni Nexus Dashboard
        </h2>
        <div className="grid lg:grid-cols-2 mt-8 gap-16">
          <div>
            <span>
              <i className="fa-solid fa-user text-secondary-200"></i>
            </span>
            <h4 className="text-secondary-100 font-medium py-4 text-2xl">
              Update My Information
            </h4>
            <p className="text-secondary-200 text-justify">
              Keep your profile up-to-date. Showcase your achievements, share
              your journey, and connect with fellow alumni by effortlessly
              updating your personal and professional information.
            </p>

            <div className="mt-8">
              <a href="/dashboard">
                <button className="uppercase bg-secondary-100 hover:scale-110 py-2 px-4 text-center text-secondary-200 rounded-lg">
                  Go to dashboard
                </button>
              </a>
            </div>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-users text-secondary-200"></i>
            </span>
            <h4 className="text-secondary-100 font-medium py-4 text-2xl">
              Create Events
            </h4>
            <p className="text-secondary-200 text-justify">
              Take the lead in alumni engagement. Organize and promote events
              that matter to you and your community. From professional
              development workshops to memorable reunions, your Alumni Nexus
              Dashboard is your platform to bring alumni together.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- alumni calendar, stories and events --> */}
      <div className="container mx-auto py-16 w-[80%]">
        <div className="grid lg:grid-cols-3 gap-4">
          <div>
            <h4 className="text-secondary-100 font-medium text-2xl mb-8">
              Alumni Stories
            </h4>
            <div className="pr-4 border-r border-secondary-200">
              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2"
                  src="../images/sa1.png"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Anna B. K
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Connecting with fellow graduates and sharing experiences on
                    the platform has been a game-changer in my professional
                    journey."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2"
                  src="../images/sa2.png"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Andrews Q.
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Through shared stories, I've found mentors, collaborators,
                    and a network that propels me forward. This platform is a
                    beacon for alumni success."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2"
                  src="../images/sa3.png"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Samuella B.
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "The shared stories section has been a source of
                    inspiration, providing insights and connections that have
                    significantly influenced my trajectory."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2"
                  src="../images/sa4.png"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Queen N.
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "The AlumniNexus not only helped me reconnect with peers but
                    also provided a platform to share insights and contribute to
                    a thriving community."
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="">
                <button className="bg-secondary-300 hover:scale-110 py-2 px-24 text-center text-secondary-200">
                  View Alumni Stories
                </button>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-secondary-100 font-medium text-2xl mb-8">
              Career Opportunities
            </h4>
            <div className="px-4 border-r border-secondary-200">
              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2 rounded-full"
                  src="../images/manager.avif"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Manager
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Lead the way. Explore managerial opportunities where you
                    can drive innovation, inspire teams, and shape the future of
                    your professional path."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2 rounded-full"
                  src="../images/developer.avif"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Developer
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Dive into a world of coding, problem-solving, and tech
                    innovation. Join us on the cutting edge of technology and
                    bring your skills to new heights."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <img
                  className="w-36 h-28 mt-2 rounded-full"
                  src="../images/secretary.avif"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Secretary
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Explore opportunities to be the organizational backbone,
                    coordinating efforts, and ensuring smooth operations in a
                    dynamic work environment."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4">
                <img
                  className="w-36 h-28 mt-2 rounded-full"
                  src="../images/designer.avif"
                  alt=""
                />
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Designer
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Elevate your career as a Designer, where innovation,
                    aesthetics, and problem-solving converge. Join us in
                    crafting visual narratives that leave a lasting impact."
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a href="">
                <button className="bg-secondary-300 hover:scale-110 py-2 px-16 text-center text-secondary-200">
                  View Career opportunity
                </button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-secondary-100 font-medium text-2xl mb-5">
              Event Calendar
            </h4>
            <div className="pl-4">
              <h4 className="text-secondary-100 font-light mb-4">
                November 2023
              </h4>
              <div className="flex justify-start space-x-4 mb-8">
                <div className="px-4 py-2">
                  <p className="text-secondary-200 font-medium">MON</p>
                  <p className="text-secondary-100 font-medium text-center">
                    7
                  </p>
                  <p className="text-secondary-200 font-medium">NOV</p>
                </div>
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Career Accelerator Forum
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Join our Career Accelerator Forum, a dynamic workshop
                    series where industry leaders share insights, trends, and
                    strategies to propel your career to new heights."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <div className="px-4 py-2">
                  <p className="text-secondary-200 font-medium">SUN</p>
                  <p className="text-secondary-100 font-medium text-center">
                    13
                  </p>
                  <p className="text-secondary-200 font-medium">NOV</p>
                </div>
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Connect & Collaborate Soiree
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Forge meaningful connections. Join our Connect &
                    Collaborate Soiree, where professionals from diverse fields
                    come together to network, exchange ideas, and build lasting
                    collaborations."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4 mb-8">
                <div className="px-4 py-2">
                  <p className="text-secondary-200 font-medium">TUES</p>
                  <p className="text-secondary-100 font-medium text-center">
                    22
                  </p>
                  <p className="text-secondary-200 font-medium">NOV</p>
                </div>
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Homecoming Extravaganza
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Our Homecoming Extravaganza is a joyous reunion where
                    alumni, students, and faculty gather to celebrate the spirit
                    of our alma mater. Join us for a nostalgic journey and
                    create new memories."
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-4">
                <div className="px-4 py-2">
                  <p className="text-secondary-200 font-medium">MON</p>
                  <p className="text-secondary-100 font-medium text-center">
                    28
                  </p>
                  <p className="text-secondary-200 font-medium">NOV</p>
                </div>
                <div>
                  <p className="text-secondary-100 font-light text-sm">
                    Giving Back Day
                  </p>
                  <p className="text-secondary-200 text-sm text-justify">
                    "Engage in meaningful projects, and make a positive impact
                    on the community. It's an opportunity to enhance your
                    leadership skills while contributing to a greater cause.
                    Let's unite for a day of service and make a difference
                    together."
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a href="">
                  <button className="bg-secondary-300 hover:scale-110 py-2 px-24 text-center text-secondary-200">
                    View Alumni Events
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- alumni story --> */}
      <div className="container mx-auto py-16 w-[80%]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative">
            <img
              className="h-full w-[70%]"
              src="../images/Sam Eshun.png"
              alt="Story"
            />
            <p className="absolute top-[92%] text-secondary-200 text-3xl font-bold">
              Samuella Eshun
            </p>
          </div>
          <div>
            <h4 className="text-secondary-100 text-3xl font-bold mb-8">
              Alumni Interview
            </h4>
            <p className="text-secondary-200 font-light text-xl text-justify leading-relaxed">
              Driven by her passion for education, Samuella founded a
              scholarship program, providing underprivileged students with
              access to quality education. Her commitment to philanthropy earned
              her recognition, with accolades celebrating her contributions to
              both the business world and the community.
              <br />
              <br />
              Today, Samuella Eshun continues to shape tomorrow's leaders. As a
              sought-after speaker at AlumniNexus events, she shares insights,
              lessons, and the guiding principle that fueled her success:
              "Empower others, and you'll find empowerment in return."
            </p>
            <div className="mt-8 text-center">
              <a href="">
                <button className="bg-secondary-300 hover:text-hover py-2 px-24 text-center text-secondary-200">
                  View Samuella's Story
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- gallery --> */}
      <div className="container mx-auto py-16 w-[80%]">
        <img src="../images/gallery.png" alt="" />
      </div>

      {/* <!-- footer begins here --> */}
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
    <script src="../js/carousel.js"></script> */}
    </div>
  );
}
