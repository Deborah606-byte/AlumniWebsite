import image1 from "../data/images/Frame 21.png";
import meetImage from "../data/images/meet.png";
import heritageImage from "../data/images/heritage.png";
import calendarImage from "../data/images/calendar.png";
import goalImage from "../data/images/goal.png";
import approachImage from "../data/images/approach.png";
import missionImage from "../data/images/mission.png";
import audienceImage from "../data/images/audience-seminar-applauding-young-black-woman-lectern_625516-3573.avif";
import carousel1 from "../data/images/carousel1.png";
import homecomingImage from "../data/images/homecoming.jpg";
import journeyImage from "../data/images/journey.png";
import studentSmiley from "../data/images/medium-shot-smiley-graduate-student 1.png";
import drewImage from "../data/images/drew.png";
import andrewImage from "../data/images/andrew.png";
import speaker1 from "../data/images/speaker1.png";
import speaker2 from "../data/images/speaker2.png";
import speaker3 from "../data/images/speaker3.avif";
import speaker4 from "../data/images/speaker4.avif";
import logoElectron from "../data/images/ion_logo-electron.png";
import girlImage from "../data/images/girl 1.png";
import blairImage from "../data/images/blair.png";

export default function AboutUs() {
  return (
    <div>
      <div className="bg-primary">
        <header>
          <nav className="flex justify-between items-center container mx-auto py-4 w-[80%]">
            <a href="#" className="font-extrabold">
              <h1 className="text-secondary-200 text-2xl">
                <span className="text-secondary-100 text-3xl">A</span>lumni
                <span className="text-secondary-100 text-3xl">N</span>exus
              </h1>
            </a>
            <div className="md:hidden">
              <button
                onClick={() => console.log("Toggle")}
                className="menu-icon"
              >
                <i className="fa-solid fa-bars text-secondary-100"></i>
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ul className="flex flex-col md:flex-row items-center gap-8">
                <li>
                  <a className="text-hover" aria-current="page" href="">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-secondary-100 hover:text-hover" href="">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-100 hover:text-hover"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary-100 hover:text-hover"
                    href="#speakers"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-full text-secondary-200 border-2 border-secondary-300 px-8 hover:bg-secondary-100 py-2"
                    href="/auth/login"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="md:hidden nav-links py-10 hidden">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <a
                  className="text-secondary-100 hover:text-hover"
                  aria-current="page"
                  href=""
                >
                  About Us
                </a>
              </li>
              <li>
                <a className="text-secondary-100 hover:text-hover" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-secondary-100 hover:text-hover"
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="text-secondary-100 hover:text-hover"
                  href="#speakers"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  className="rounded-full text-secondary-200 border-2 border-secondary-100 px-8 hover:bg-primary py-2"
                  href="/auth/login"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* <!-- herosection starts here --> */}
        <div className="grid lg:grid-cols-2 py-16 container mx-auto w-[80%]">
          <div>
            <img className="w-[full]" src={image1} alt="" />
          </div>
          <div>
            <h3 className="text-secondary-100 text-4xl mb-8 font-bold">
              Alumni History
            </h3>
            <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
              <span className="text-bold text-2xl">F</span>or decades, our
              esteemed university has been a nurturing ground for brilliant
              minds and a catalyst for countless success stories. Our journey as
              alumni began here, under the welcoming embrace of this
              institution, where we forged friendships, pursued knowledge, and
              laid the foundation for our futures.
            </p>
            <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
              <span className="text-bold text-2xl">A</span>s we take this
              journey forward, we invite you to become an integral part of our
              evolving story. Join us in rekindling old friendships, creating
              new ones, and advancing our professional and personal growth.
              Together, we'll continue to honor the legacy of AlumniNexus, a
              place where dreams are nurtured and bonds are forged.
            </p>
            <p className="text-secondary-200 mb-8 italic font-light leading-relaxed text-justify">
              Welcome to a space where history meets the present, where alumni
              past and present unite to shape the future.
            </p>
            <div className="flex justify-start space-x-8">
              <a href="/auth/signup">
                <button className="text-secondary-200 bg-secondary-100 hover:text-black rounded-full w-[7em] py-2">
                  Join Us
                </button>
              </a>
              <a href="/auth/login">
                <button className="rounded-full text-secondary-200 border-2 border-secondary-300 w-[7em] hover:text-hover py-2">
                  Sign In
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- about alumni --> */}
        <div id="about-nexus" className="container mx-auto pb-16 w-[80%]">
          <h3 className="text-secondary-100 font-bold text-4xl mb-8">
            Discover
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex lg:space-y-8 lg:space-x-8">
              <img
                className="w-[30%] h-[30%] lg:w-[30%] lg:h-[30%]"
                src={meetImage}
                alt=""
              />
              <div>
                <p className="text-secondary-100 text-2xl mb-4">Our Meetups</p>
                <p className="text-secondary-100">"Connect and Reconnect"</p>
                <p className="text-secondary-200 text-justify">
                  At AlumniNexus, we believe that meaningful connections are the
                  essence of our vibrant community. Our meetups offer you the
                  chance to reunite with old friends and create new connections
                  within the alumni network. Whether it's a casual gathering, a
                  professional networking event, or a themed mixer, our meetups
                  are where cherished memories are relived and new stories are
                  written. Join us at our next meetup and be part of the alumni
                  magic!
                </p>
              </div>
            </div>
            <div className="flex justify-between lg:space-y-8 lg:space-x-8">
              <img
                className="w-[30%] h-[30%] lg:w-[30%] lg:h-[30%]"
                src={heritageImage}
                alt=""
              />
              <div>
                <p className="text-secondary-100 text-2xl mb-4">Our Heritage</p>
                <p className="text-secondary-100">"A Legacy of Excellence"</p>
                <p className="text-secondary-200 text-justify">
                  AlumniNexus has a rich heritage, woven into the very fabric of
                  our alma mater's history. We're part of an enduring legacy of
                  academic excellence, innovation, and achievement. Our heritage
                  represents the traditions, values, and shared experiences that
                  define us. As we celebrate our shared history, we invite you
                  to explore the roots of our journey, appreciate our collective
                  achievements, and become an integral part of this proud
                  heritage.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] container mx-auto w-full mt-8">
            <div className="flex justify-between lg:space-y-8 lg:space-x-8">
              <img className="w-[20%] h-[20%]" src={calendarImage} alt="" />
              <div>
                <p className="text-secondary-100 text-2xl mb-4">Our Events</p>
                <p className="text-secondary-100">
                  "Where Moments Become Memories"
                </p>
                <p className="text-secondary-200 text-justify">
                  Our events are the heart and soul of AlumniNexus. From
                  professional development workshops to campus reunions, these
                  gatherings are designed to celebrate our diversity, nurture
                  our skills, and bring our community together. Each event is a
                  unique opportunity to connect with fellow alumni, learn, grow,
                  and create lasting memories. Explore our upcoming events,
                  RSVP, and become an active participant in our dynamic
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- alumni goals,values --> */}
        <div className="container mx-auto py-16 w-[80%]">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* <!-- goal --> */}
            <div className="bg-secondary-300 px-4 py-8 relative">
              <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
                Our Goal
              </p>
              <p className="text-primary text-justify">
                Our goal at AlumniNexus is to foster excellence among our alumni
                community. We aim to create a thriving environment where alumni
                can reconnect, engage, and grow both personally and
                professionally. Whether through networking, professional
                development, or shared experiences, we strive to empower our
                members to reach new heights in their careers and beyond.
              </p>
              <span className="absolute -top-8 lg:right-0">
                <img className="w-[30%] h-[30%]" src={goalImage} alt="" />
              </span>
            </div>
            {/* <!-- approach --> */}
            <div className="bg-secondary-300 px-4 py-8 relative">
              <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
                Our Approach
              </p>
              <p className="text-primary text-justify">
                At AlumniNexus, our approach to alumni engagement is rooted in
                inclusivity and diversity. We believe in a holistic approach
                that caters to the diverse needs and interests of our members.
                We're dedicated to offering a blend of professional development,
                networking, and cultural experiences that contribute to the
                personal and collective growth of our community.
              </p>
              <span className="absolute -top-8 lg:right-0">
                <img className="w-[30%] h-[30%]" src={approachImage} alt="" />
              </span>
            </div>
            {/* <!-- mission --> */}
            <div className="bg-secondary-300 px-4 py-8 relative">
              <p className="text-secondary-100 text-2xl mb-4 text-center font-bold">
                Our Mission
              </p>
              <p className="text-primary text-justify">
                Our mission at AlumniNexus is simple yet profound: to unite
                alumni for lifelong success. We're committed to creating a space
                where alumni can reconnect with their past, engage with their
                present, and envision a brighter future. Through our platform,
                we aspire to foster a sense of belonging, collaboration, and
                shared achievement among our alumni members.
              </p>
              <span className="absolute -top-8 lg:right-0">
                <img className="w-[30%] h-[30%]" src={missionImage} alt="" />
              </span>
            </div>
          </div>
        </div>

        {/* <!-- upcoming events --> */}
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
                  <li className="text-secondary-200 font-medium">
                    Back to campus
                  </li>
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
                  <li className="text-secondary-200 font-medium">
                    Sports games
                  </li>
                  <li className="text-secondary-200 font-medium">
                    Alumni activities
                  </li>
                  <li className="text-secondary-200 font-medium">
                    Campus tours
                  </li>
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

        {/* <!-- journey starts here --> */}
        <div className="container mx-auto py-16 w-[80%]">
          <h3 className="text-secondary-100 text-4xl font-bold">Our Journey</h3>
          <img src={journeyImage} alt="" />
        </div>

        {/* <!-- testimonials goes here --> */}
        <div id="testimonials" className="container mx-auto py-16 w-[80%]">
          <h3 className="text-secondary-100 text-4xl mb-16 font-bold">
            What Alumnus Say
          </h3>

          {/* <!-- first row --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex justify-center items-center">
              <div className="rhombus-container">
                <div className="rhombus border-8 border-secondary-300">
                  <div className="flex info mt-20 ml-4">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={studentSmiley}
                      alt="Your Image"
                    />
                    <div className="ml-4 -mt-8">
                      <h2 className="text-xl font-light mb-2 text-secondary-100">
                        Anthony Solomon
                      </h2>
                      <p className="text-sm text-secondary-200 mb-2">
                        "AlumniNexus is my go-to for rekindling old friendships
                        and discovering new opportunities. A thriving community
                        that truly understands the power of connection!"
                      </p>
                      <p className="text-sm font-light text-secondary-100">
                        Class of 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="rhombus-container">
                <div className="rhombus border-8 border-secondary-300">
                  <div className="flex info mt-20 ml-4">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={blairImage}
                      alt="Your Image"
                    />
                    <div className="ml-4 -mt-8">
                      <h2 className="text-xl font-light mb-2 text-secondary-100">
                        Blair Andrews
                      </h2>
                      <p className="text-sm text-secondary-200 mb-2">
                        AlumniNexus streamlines alumni engagement effortlessly.
                        From top-notch events to career goldmines, it's the
                        heartbeat of our vibrant community.
                      </p>
                      <p className="text-sm font-light text-secondary-100">
                        Class of 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- second row --> */}
          <div className="flex justify-center items-center">
            <div className="rhombus-container">
              <div className="rhombus border-8 border-secondary-300">
                <div className="flex info mt-20 ml-4">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={drewImage}
                    alt="Your Image"
                  />
                  <div className="ml-4 -mt-8">
                    <h2 className="text-xl font-light mb-2 text-secondary-100">
                      Drew Johnson
                    </h2>
                    <p className="text-sm text-secondary-200 mb-2">
                      "AlumniNexus simplifies my role as an alumni manager. The
                      dashboard is a game-changer for record management, making
                      engagement a joy."
                    </p>
                    <p className="text-sm font-light text-secondary-100">
                      Class of 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- third row --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex justify-center items-center">
              <div className="rhombus-container">
                <div className="rhombus border-8 border-secondary-300">
                  <div className="flex info mt-20 ml-4">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={andrewImage}
                      alt="Your Image"
                    />
                    <div className="ml-4 -mt-8">
                      <h2 className="text-xl font-light mb-2 text-secondary-100">
                        Andrew Waiter
                      </h2>
                      <p className="text-sm text-secondary-200 mb-2">
                        "AlumniNexus balances tradition and innovation
                        perfectly. A community that understands the diverse
                        needs of its alumni, fostering both connection and
                        growth."
                      </p>
                      <p className="text-sm font-light text-secondary-100">
                        Class of 2019
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="rhombus-container">
                <div className="rhombus border-8 border-secondary-300">
                  <div className="flex info mt-20 ml-6">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={girlImage}
                      alt="Your Image"
                    />
                    <div className="ml-4 -mt-8">
                      <h2 className="text-xl font-light mb-2 text-secondary-100">
                        Antionnete Eshun
                      </h2>
                      <p className="text-sm text-secondary-200 mb-2">
                        "AlumniNexus is my compass in the post-grad landscape.
                        Career opportunities, inspiring alumni stories—this
                        platform is an indispensable part of my professional
                        journey."
                      </p>
                      <p className="text-sm font-light text-secondary-100">
                        Class of 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- speakers here --> */}
        <div id="speakers" className="container mx-auto py-16 w-[80%]">
          <h3 className="text-secondary-100 text-4xl font-bold mb-5">
            Our Speakers
          </h3>

          <div className="grid lg:grid-cols-4 gap-10">
            <div>
              <img className="h-[300px] w-[300px]" src={speaker1} alt="" />
              <div className="text-secondary-200 text-center font-light leading-loose">
                <p className="text-secondary-100">Mrs. Eshun Araba Nsia</p>
                <p className="italic">Trailblazer Mentor</p>
                <p>
                  "Paving the way for future leaders with wisdom and
                  inspiration.""
                </p>
              </div>
            </div>
            <div>
              <img className="h-[300px] w-[300px]" src={speaker3} alt="" />
              <div className="text-secondary-200 text-center font-light leading-loose">
                <p className="text-secondary-100">Alexandra Akins</p>
                <p className="italic">Innovation Catalyst</p>
                <p>"Mentoring Momentum: Empowering Futures"</p>
              </div>
            </div>
            <div>
              <img className="h-[300px] w-[300px]" src={speaker4} alt="" />
              <div className="text-secondary-200 text-center font-light leading-loose">
                <p className="text-secondary-100">David Patel</p>
                <p className="italic">Leadership Luminary</p>
                <p>"Guiding Aspirations: Nurturing Potential"</p>
              </div>
            </div>
            <div>
              <img className="h-[300px] w-[300px]" src={speaker2} alt="" />
              <div className="text-secondary-200 text-center font-light leading-loose">
                <p className="text-secondary-100">Mrs. Rachel Turner</p>
                <p className="italic">Industry Visionary</p>
                <p>"Empowering Tomorrows: Fostering Growth"</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- footer starts here --> */}
        <div className="bg-black/50">
          <div className="container mx-auto pt-36 pb-5 w-[80%]">
            <div className="grid lg:grid-cols-4 gap-10 mb-36">
              <div className="mt-12">
                <img className="" src={logoElectron} alt="" />
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
      </div>
    </div>
  );
}
