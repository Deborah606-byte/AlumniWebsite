import {
  journeyImage,
  studentSmiley,
  blairImage,
  drewImage,
  andrewImage,
  girlImage,
} from "../index/imports";

export default function Testimonials() {
  return (
    <>
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
                      "AlumniNexus balances tradition and innovation perfectly.
                      A community that understands the diverse needs of its
                      alumni, fostering both connection and growth."
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
    </>
  );
}
