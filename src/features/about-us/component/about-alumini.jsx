import { meetImage, heritageImage, calendarImage } from "../index/imports";

export default function AboutAlumini() {
  return (
    <div id="about-nexus" className="container mx-auto pb-16 w-[80%]">
      <h3 className="text-secondary-100 font-bold text-4xl mb-8">Discover</h3>
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
              essence of our vibrant community. Our meetups offer you the chance
              to reunite with old friends and create new connections within the
              alumni network. Whether it's a casual gathering, a professional
              networking event, or a themed mixer, our meetups are where
              cherished memories are relived and new stories are written. Join
              us at our next meetup and be part of the alumni magic!
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
              AlumniNexus has a rich heritage, woven into the very fabric of our
              alma mater's history. We're part of an enduring legacy of academic
              excellence, innovation, and achievement. Our heritage represents
              the traditions, values, and shared experiences that define us. As
              we celebrate our shared history, we invite you to explore the
              roots of our journey, appreciate our collective achievements, and
              become an integral part of this proud heritage.
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
              gatherings are designed to celebrate our diversity, nurture our
              skills, and bring our community together. Each event is a unique
              opportunity to connect with fellow alumni, learn, grow, and create
              lasting memories. Explore our upcoming events, RSVP, and become an
              active participant in our dynamic community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
