export default function Calendar() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <div className="grid lg:grid-cols-3 gap-4">
        <div>
          <h4 className="text-secondary-100 font-medium text-2xl mb-8">
            Alumni Stories
          </h4>
          <div className="pr-4 border-r border-secondary-200">
            <div className="flex justify-start space-x-4 mb-8">
              <img className="w-36 h-28 mt-2" src="../images/sa1.png" alt="" />
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
              <img className="w-36 h-28 mt-2" src="../images/sa2.png" alt="" />
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
              <img className="w-36 h-28 mt-2" src="../images/sa3.png" alt="" />
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Samuella B.
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "The shared stories section has been a source of inspiration,
                  providing insights and connections that have significantly
                  influenced my trajectory."
                </p>
              </div>
            </div>

            <div className="flex justify-start space-x-4 mb-8">
              <img className="w-36 h-28 mt-2" src="../images/sa4.png" alt="" />
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Queen N.
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "The AlumniNexus not only helped me reconnect with peers but
                  also provided a platform to share insights and contribute to a
                  thriving community."
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
                <p className="text-secondary-100 font-light text-sm">Manager</p>
                <p className="text-secondary-200 text-sm text-justify">
                  "Lead the way. Explore managerial opportunities where you can
                  drive innovation, inspire teams, and shape the future of your
                  professional path."
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
                  aesthetics, and problem-solving converge. Join us in crafting
                  visual narratives that leave a lasting impact."
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
                <p className="text-secondary-100 font-medium text-center">7</p>
                <p className="text-secondary-200 font-medium">NOV</p>
              </div>
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Career Accelerator Forum
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "Join our Career Accelerator Forum, a dynamic workshop series
                  where industry leaders share insights, trends, and strategies
                  to propel your career to new heights."
                </p>
              </div>
            </div>

            <div className="flex justify-start space-x-4 mb-8">
              <div className="px-4 py-2">
                <p className="text-secondary-200 font-medium">SUN</p>
                <p className="text-secondary-100 font-medium text-center">13</p>
                <p className="text-secondary-200 font-medium">NOV</p>
              </div>
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Connect & Collaborate Soiree
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "Forge meaningful connections. Join our Connect & Collaborate
                  Soiree, where professionals from diverse fields come together
                  to network, exchange ideas, and build lasting collaborations."
                </p>
              </div>
            </div>

            <div className="flex justify-start space-x-4 mb-8">
              <div className="px-4 py-2">
                <p className="text-secondary-200 font-medium">TUES</p>
                <p className="text-secondary-100 font-medium text-center">22</p>
                <p className="text-secondary-200 font-medium">NOV</p>
              </div>
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Homecoming Extravaganza
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "Our Homecoming Extravaganza is a joyous reunion where alumni,
                  students, and faculty gather to celebrate the spirit of our
                  alma mater. Join us for a nostalgic journey and create new
                  memories."
                </p>
              </div>
            </div>

            <div className="flex justify-start space-x-4">
              <div className="px-4 py-2">
                <p className="text-secondary-200 font-medium">MON</p>
                <p className="text-secondary-100 font-medium text-center">28</p>
                <p className="text-secondary-200 font-medium">NOV</p>
              </div>
              <div>
                <p className="text-secondary-100 font-light text-sm">
                  Giving Back Day
                </p>
                <p className="text-secondary-200 text-sm text-justify">
                  "Engage in meaningful projects, and make a positive impact on
                  the community. It's an opportunity to enhance your leadership
                  skills while contributing to a greater cause. Let's unite for
                  a day of service and make a difference together."
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
  );
}
