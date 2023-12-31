export default function Stories() {
  return (
    <div className="bg-primary">
      <header>
        <nav className="flex justify-between items-center container mx-auto py-4 w-[80%] relative">
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
              <li>
                <a
                  href="/events"
                  className="text-secondary-100 hover:text-hover"
                >
                  Programs & Events
                </a>
              </li>
              <li>
                <a className="text-hover" href="">
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

      <main className="container mx-auto w-[80%]">
        <section id="story1" className="hero container story-container">
          {/* <!-- partnership goes here --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative overflow-hidden">
              <img
                src="../images/story1.avif"
                className="w-[600px] h-[500px] object-none"
              />
              <div className="absolute bottom-10 ml-12">
                <p className="text-secondary-200 font-semibold text-2xl mb-2">
                  Samuella Eshun
                </p>
                <p className="text-secondary-200 font-light text-xl">
                  Founder and CEO of Girls Brigade
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pt-28 px-6">
                <h3 className="text-secondary-100 text-4xl font-bold mb-8">
                  My Story
                </h3>
                <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
                  Fueled by an unyielding commitment to education, I founded a
                  scholarship program that seeks to break down barriers for
                  underprivileged students. <br />
                  This initiative goes beyond financial support; it's a gateway
                  to a brighter future for countless individuals. <br />
                  The impact of this program has been profound, and I am humbled
                  by the recognition it has garnered in both the business world
                  and the community.
                </p>
              </div>
              <div className="absolute top-0">
                <svg
                  width="480"
                  height="500"
                  viewBox="0 0 350 580"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99977 0.5C-10.5001 31.5 42.8229 85.2856 73.7599 72.116C112.431 55.654 65.9434 30.0464 44.9622 46.2036C23.981 62.3608 2.58837 91.0169 33.0317 112.661C77.9999 144.633 60.203 89.5689 151.925 122.112C193.888 137 221.016 191.402 193.888 218.14C151.925 259.5 185.265 275.757 219 287.951C246 297.711 250.92 257.952 271.5 285C306.5 331 197.617 336.632 208 383.5C221.118 442.714 296.5 392.232 296.5 440C296.5 478.5 238 495 280.281 541.284C313.311 577.44 350.5 562.5 349 579.5"
                    stroke="#00D285"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-10">
            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              I am Samuella Eshun, and my journey is a testament to the
              transformative power of education and the boundless possibilities
              that arise when passion meets purpose. As the Founder and CEO of
              Girls Brigade, my mission extends beyond the boardroom. It is
              about empowering young women and instilling in them the belief
              that they can overcome any obstacle. Girls Brigade is not just an
              organization; it's a platform for positive change.
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              In the realm of business, my approach has always been rooted in
              innovation and a dedication to excellence. I believe in making a
              difference, and the numerous accolades I've received are a
              testament to the impact of this philosophy. I am driven by a
              belief in the transformative power of education and the importance
              of giving back to the community. My journey is a testament to the
              idea that success is not just measured by personal achievements
              but by the positive impact one can make on the lives of others.
            </p>

            <p className="text-secondary-200 text-xl mb-10 leading-relaxed text-center italic lg:px-28">
              "Empower others, and you'll find empowerment in return" is not
              just a motto for me; it's a guiding principle that shapes every
              decision I make. Giving back to the community is not an
              obligation; it's a privilege.
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              Today, I continue to shape tomorrow's leaders. My role as a
              speaker at AlumniNexus events allows me to share my insights and
              experiences. My story is not just about personal success; it's
              about empowerment, resilience, and the transformative power of
              education.
            </p>

            {/* <!-- fun fact --> */}
            <div className="border-dotted border-[3px] border-secondary-100 p-10 text-center">
              <p className="text-secondary-100 font-medium uppercase mb-2">
                Fun Fact
              </p>
              <p className="text-secondary-200 leading-relaxed">
                Did you know that Samuella Eshun, in addition to her inspiring
                <br />
                work in education and philanthropy, <br />
                is an avid collector of antique typewriters?
              </p>
            </div>

            <p className="text-secondary-200 leading-relaxed text-justify mt-10">
              In my journey, I've learned that true success is not just measured
              by personal achievements but by the positive impact one can make
              on the lives of others. My story is an invitation to join me on a
              path of meaningful change and a reminder that each of us has the
              power to leave a lasting legacy of empowerment.
            </p>
          </div>
        </section>

        <section id="story2" className="hero container story-container">
          {/* <!-- story goes here --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative overflow-hidden">
              <img
                src="../images/stories.avif"
                className="w-[600px] h-[500px] object-none"
              />
              <div className="absolute bottom-10 ml-12">
                <p className="text-secondary-200 font-semibold text-2xl mb-2">
                  Anna Blue Kilang
                </p>
                <p className="text-secondary-200 font-light text-xl">
                  Founder and CEO of Quantum Dynamics Tech Solutions
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pt-28 px-6">
                <h3 className="text-secondary-100 text-4xl font-bold mb-8">
                  My Story
                </h3>
                <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
                  At the helm of Quantum Dynamics Tech Solutions, I lead a team
                  of visionary technologists dedicated to pushing the boundaries
                  of innovation. <br />
                  Known for pioneering breakthroughs in quantum computing,
                  Quantum Dynamics is at the forefront of transforming how the
                  world processes information.
                </p>
              </div>
              <div className="absolute top-0">
                <svg
                  width="480"
                  height="500"
                  viewBox="0 0 350 580"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99977 0.5C-10.5001 31.5 42.8229 85.2856 73.7599 72.116C112.431 55.654 65.9434 30.0464 44.9622 46.2036C23.981 62.3608 2.58837 91.0169 33.0317 112.661C77.9999 144.633 60.203 89.5689 151.925 122.112C193.888 137 221.016 191.402 193.888 218.14C151.925 259.5 185.265 275.757 219 287.951C246 297.711 250.92 257.952 271.5 285C306.5 331 197.617 336.632 208 383.5C221.118 442.714 296.5 392.232 296.5 440C296.5 478.5 238 495 280.281 541.284C313.311 577.44 350.5 562.5 349 579.5"
                    stroke="#00D285"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-10">
            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              I am Anna Simmons, the driving force behind Quantum Dynamics Tech
              Solutions. My journey is one fueled by a passion for innovation
              and a relentless pursuit of pushing technological boundaries. As
              the Founder and CEO, Quantum Dynamics stands as a testament to
              what happens when brilliant minds converge to redefine what's
              possible in the realm of quantum computing.
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              In the ever-evolving landscape of technology, my leadership
              emphasizes collaboration and inclusivity. Quantum Dynamics isn't
              just a company; it's a hub of creativity and groundbreaking
              discoveries. Together, we are shaping the future of how the world
              interacts with information, and I take pride in leading this
              transformative journey.
            </p>

            <p className="text-secondary-200 text-xl mb-10 leading-relaxed text-center italic lg:px-28">
              "Fueling innovation is not just a job; it's a calling. In every
              line of code we write, we are scripting a new chapter for the
              future of technology."
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              Today, I continue to shape tomorrow's tech landscape. My role as a
              speaker at Quantum Tech Summits allows me to share my insights and
              experiences. My story is not just about personal success; it's
              about empowering minds, fostering innovation, and the
              transformative power of technology.
            </p>

            {/* <!-- fun fact --> */}
            <div className="border-dotted border-[3px] border-secondary-100 p-10 text-center">
              <p className="text-secondary-100 font-medium uppercase mb-2">
                Fun Fact
              </p>
              <p className="text-secondary-200 leading-relaxed">
                Did you know that Anna Kilang, apart from her tech pursuits,
                <br />
                is an avid rock climber with a goal
                <br />
                to conquer some of the world's most challenging peaks?
              </p>
            </div>

            <p className="text-secondary-200 leading-relaxed text-justify mt-10">
              In my journey, I've learned that true success is not just measured
              by personal achievements but by the positive impact one can make
              on the lives of others. My story is an invitation to join me on a
              path of meaningful change and a reminder that each of us has the
              power to leave a lasting legacy of empowerment.
            </p>
          </div>
        </section>

        <section id="story3" className="hero container story-container">
          {/* <!-- story goes here --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative overflow-hidden">
              <img
                src="../images/andrew.avif"
                className="w-[600px] h-[500px] object-none"
              />
              <div className="absolute bottom-10 ml-12">
                <p className="text-secondary-200 font-semibold text-2xl mb-2">
                  Andrew Quansah
                </p>
                <p className="text-secondary-200 font-light text-xl">
                  Founder of Prosperity Advisory Group
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pt-28 px-6">
                <h3 className="text-secondary-100 text-4xl font-bold mb-8">
                  My Story
                </h3>
                <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
                  Prosperity Advisory Group, founded by Andrew Thompson, stands
                  as a beacon of financial wisdom and strategic counsel. <br />
                  As a financial consultancy, the organization is committed to
                  empowering individuals and businesses to navigate the
                  complexities of finance with confidence.
                </p>
              </div>
              <div className="absolute top-0">
                <svg
                  width="480"
                  height="500"
                  viewBox="0 0 350 580"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99977 0.5C-10.5001 31.5 42.8229 85.2856 73.7599 72.116C112.431 55.654 65.9434 30.0464 44.9622 46.2036C23.981 62.3608 2.58837 91.0169 33.0317 112.661C77.9999 144.633 60.203 89.5689 151.925 122.112C193.888 137 221.016 191.402 193.888 218.14C151.925 259.5 185.265 275.757 219 287.951C246 297.711 250.92 257.952 271.5 285C306.5 331 197.617 336.632 208 383.5C221.118 442.714 296.5 392.232 296.5 440C296.5 478.5 238 495 280.281 541.284C313.311 577.44 350.5 562.5 349 579.5"
                    stroke="#00D285"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-10">
            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              I am Andrew Quansah, the Founder and CEO of Prosperity Advisory
              Group. My story revolves around empowering individuals and
              businesses to achieve financial prosperity. At Prosperity Advisory
              Group, we go beyond traditional financial consultancy — we are
              architects of financial well-being, guiding our clients towards a
              secure and prosperous future.
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              My leadership philosophy centers on integrity and a client-centric
              approach. Prosperity Advisory Group is more than just a
              consultancy; it's a partner in our clients' financial journeys.
              With a commitment to personalized services, we navigate the
              complexities of finance together, ensuring each step is a stride
              towards lasting financial success.
            </p>

            <p className="text-secondary-200 text-xl mb-10 leading-relaxed text-center italic lg:px-28">
              "Financial well-being is not a destination; it's a journey we
              embark on together. Each financial decision is a step towards
              prosperity."
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              Today, I continue to shape financial destinies. My role as a
              keynote speaker at Financial Empowerment Forums allows me to share
              my insights and experiences. My story is not just about personal
              success; it's about empowering individuals, fostering financial
              literacy, and the transformative power of sound financial
              planning.
            </p>

            {/* <!-- fun fact --> */}
            <div className="border-dotted border-[3px] border-secondary-100 p-10 text-center">
              <p className="text-secondary-100 font-medium uppercase mb-2">
                Fun Fact
              </p>
              <p className="text-secondary-200 leading-relaxed">
                Did you know that Andrew Quansah, beyond his financial
                expertise,
                <br />
                is a passionate salsa dancer, <br />
                infusing rhythm into the world of finance?
              </p>
            </div>

            <p className="text-secondary-200 leading-relaxed text-justify mt-10">
              In my journey, I've learned that true success is not just measured
              by personal achievements but by the positive impact one can make
              on the lives of others. My story is an invitation to join me on a
              path of financial empowerment and a reminder that prosperity is
              achievable for all.
            </p>
          </div>
        </section>

        <section id="story4" className="hero container story-container">
          {/* <!-- story goes here --> */}
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative overflow-hidden">
              <img
                src="../images/queen.avif"
                className="w-[600px] h-[500px] object-none"
              />
              <div className="absolute bottom-10 ml-12">
                <p className="text-secondary-200 font-semibold text-2xl mb-2">
                  Queen Mabena Nino
                </p>
                <p className="text-secondary-200 font-light text-xl">
                  Founder of Canvas of Change Foundation
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="pt-28 px-6">
                <h3 className="text-secondary-100 text-4xl font-bold mb-8">
                  My Story
                </h3>
                <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
                  At the heart of artistic activism, Canvas of Change
                  Foundation, led by Queen Mabena, channels the transformative
                  power of art for societal impact. <br />
                  The foundation supports artists who use their craft to address
                  pressing social issues, fostering a community where creativity
                  and advocacy intersect.
                </p>
              </div>
              <div className="absolute top-0">
                <svg
                  width="480"
                  height="500"
                  viewBox="0 0 350 580"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99977 0.5C-10.5001 31.5 42.8229 85.2856 73.7599 72.116C112.431 55.654 65.9434 30.0464 44.9622 46.2036C23.981 62.3608 2.58837 91.0169 33.0317 112.661C77.9999 144.633 60.203 89.5689 151.925 122.112C193.888 137 221.016 191.402 193.888 218.14C151.925 259.5 185.265 275.757 219 287.951C246 297.711 250.92 257.952 271.5 285C306.5 331 197.617 336.632 208 383.5C221.118 442.714 296.5 392.232 296.5 440C296.5 478.5 238 495 280.281 541.284C313.311 577.44 350.5 562.5 349 579.5"
                    stroke="#00D285"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-10">
            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              I am Queen Mabena, the visionary behind Canvas of Change
              Foundation. My journey is intricately woven with the
              transformative power of art and its ability to drive societal
              change. As the Founder and CEO, the foundation is more than an
              organization; it's a canvas where artistic activism meets social
              impact.
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              Canvas of Change Foundation is a haven for artists committed to
              addressing pressing social issues. Under my leadership, we amplify
              diverse voices through art, fostering a community where creativity
              becomes a catalyst for positive transformation. Join me in this
              artistic journey where every stroke on the canvas paints a story
              of change.
            </p>

            <p className="text-secondary-200 text-xl mb-10 leading-relaxed text-center italic lg:px-28">
              "Art is not just a form of expression; it's a powerful tool for
              change. With every stroke, we paint a brighter future for
              humanity."
            </p>

            <p className="text-secondary-200 mb-10 leading-relaxed text-justify">
              Today, I continue to shape artistic narratives. My role as a
              curator at International Art Expositions allows me to share my
              insights and experiences. My story is not just about personal
              success; it's about empowering artists, fostering social change,
              and the transformative power of artistic expression.
            </p>

            {/* <!-- fun fact --> */}
            <div className="border-dotted border-[3px] border-secondary-100 p-10 text-center">
              <p className="text-secondary-100 font-medium uppercase mb-2">
                Fun Fact
              </p>
              <p className="text-secondary-200 leading-relaxed">
                Did you know that Queen Mabena, in addition to her passion{" "}
                <br />
                for art, is an avid beekeeper, <br />
                cultivating a garden that buzzes with creativity?
              </p>
            </div>

            <p className="text-secondary-200 leading-relaxed text-justify mt-10">
              In my journey, I've learned that true success is not just measured
              by personal achievements but by the positive impact one can make
              on the lives of others. My story is an invitation to join me on a
              path of artistic revolution and a reminder that each artistic
              expression holds the power to change the world.
            </p>
          </div>
        </section>

        {/* <!-- Navigation buttons --> */}
        <div className="flex justify-between mb-8">
          {/* <!-- Back arrow (Backward)--> */}
          <div className="flex items-center justify-center">
            <button
              className="text-secondary-100 text-lg hover:text-secondary-200"
              onclick="prevStory()"
            >
              <i className="fas fa-chevron-left"></i> View Previous Story
            </button>
          </div>

          {/* <!-- Right Arrow (Forward) --> */}
          <div className="flex items-center justify-center">
            <button
              className="text-secondary-100 text-lg hover:text-secondary-200"
              onclick="nextStory()"
            >
              View Next Story <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </main>

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

      {/* <script src="../js/story.js"></script> */}
    </div>
  );
}
