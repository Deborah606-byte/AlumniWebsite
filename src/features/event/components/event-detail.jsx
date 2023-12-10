export default function EventDetail() {
  return (
    <div className="container mx-auto py-16 w-[80%]">
      <h2 className="text-secondary-100 text-3xl font-bold mb-8">
        Event Details
      </h2>
      <h3 className="text-secondary-100 text-2xl font-medium mb-4">
        International Alumni Mixers
      </h3>
      <p className="text-secondary-200 mb-4">
        November 7, 2023 | African Leadership Campus, Pamplemousses
      </p>

      <div className="flex justify-start space-x-8 mb-4">
        <img className="w-5 h-5" src="../images/logos_google-meet.png" alt="" />
        <p className="text-secondary-200 font-thin text-sm">
          Join with Google Meet
        </p>
        <i className="fa-solid fa-copy text-secondary-300"></i>
      </div>

      <img
        src="../images/homecoming.jpg"
        alt="Event Banner"
        className="mb-4 w-full h-auto rounded-lg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-secondary-100 text-xl font-medium">
            Event Details
          </h2>
          <p className="text-secondary-200 text-sm">Date: November 7, 2023</p>
          <p className="text-secondary-200 text-sm">Time: 10:00 AM - 4:00 PM</p>
          <p className="text-secondary-200 text-sm">
            Location: African Leadership Campus, <br />
            Pamplemousses
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-secondary-100 text-xl font-medium">Agenda</h2>
          <ul className="text-secondary-200 text-sm space-y-4">
            <li>10:00 AM - Registration</li>
            <li>11:00 AM - Opening Ceremony</li>
            <li>12:30 PM - Lunch</li>
            <li>2:00 PM - Speakers presentation</li>
            <li>3:30 PM - Networking Session</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-secondary-100 text-xl font-medium">Speakers</h2>
          <ul className="text-secondary-200 text-sm space-y-4">
            <li>John Doe - CEO, AlumniNexus</li>
            <li>Jane Smith - Scholarship Recipient</li>
            {/* <!-- Add more speakers as needed --> */}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-secondary-100 text-xl font-medium">
          Event Description
        </h2>
        <p className="text-secondary-200 text-base font-light leading-relaxed mb-4">
          Join us for our International Alumni Mixers, a vibrant celebration of
          our global alumni community. Whether you reside in bustling cities or
          serene landscapes, these mixers provide a unique platform to connect
          with fellow alumni from around the world. Engage in enriching
          conversations, share your experiences, and establish enduring
          connections that transcend borders.
        </p>

        <p className="text-secondary-200 text-base font-light leading-relaxed mb-4">
          The event will feature a dynamic agenda, including insightful
          discussions, networking sessions, and opportunities to rediscover the
          diverse talents within our alumni network. No matter where life has
          taken you since graduation, these mixers offer a chance to rekindle
          old connections and forge new ones.
        </p>

        <p className="text-secondary-200 text-base font-light italic">
          Don't miss this exciting opportunity to be part of a worldwide network
          of alumni excellence. Join us at our next International Alumni Mixer
          and experience the power of global connections.
        </p>
      </div>

      {/* <!-- invited guests --> */}
      <div className="py-10">
        <h3 className="text-secondary-100 font-medium text-xl">
          300 People Invited
        </h3>
        <div className="flex space-x-4">
          <img
            className="rounded-full w-24 h-24"
            src="../images/blair.png"
            alt=""
          />
          <img
            className="rounded-full w-24 h-24"
            src="../images/andrew.png"
            alt=""
          />
          <img
            className="rounded-full w-24 h-24"
            src="../images/drew.png"
            alt=""
          />
          <img
            className="rounded-full w-24 h-24"
            src="../images/girl 1.png"
            alt=""
          />
          <img
            className="rounded-full w-24 h-24"
            src="../images/sa1.png"
            alt=""
          />
          <div className="mt-8">
            <i className="fa-solid fa-plus text-secondary-300"></i>
            <i className="fa-solid fa-plus text-secondary-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
