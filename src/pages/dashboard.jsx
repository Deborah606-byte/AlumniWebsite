export default function Dashboard() {
  return (
    <div className="bg-primary">
      <header className="bg-secondary-100">
        <nav className="flex justify-between items-center container mx-auto py-2">
          <a href="#" className="font-extrabold">
            <h1 className="text-secondary-200 text-2xl">
              <span className="text-primary text-3xl">A</span>lumni
              <span className="text-primary text-3xl">N</span>exus
            </h1>
          </a>
          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="relative space-x-2">
                <span className="absolute left-5">
                  <i className="fa-solid fa-circle-plus text-secondary-100 hover:text-hover"></i>
                </span>
                <a
                  id="open-event-form"
                  className="addEventButton rounded-full text-secondary-200 border-secondary-300 px-8 bg-primary py-2 hover:text-hover"
                  href=""
                >
                  Add Event
                </a>
              </li>
              <li className="relative group">
                <div className="relative inline-block text-secondary-200 cursor-pointer">
                  <img
                    className="rounded-full h-10 w-10 border-2 border-secondary-200"
                    src="../images/doctor 2.png"
                    alt=""
                  />
                  <div className="profile-dropdown hidden absolute z-10 right-0 mt-2 w-48 bg-primary rounded-lg shadow-lg border border-secondary-300">
                    <ul className="py-1">
                      <li>
                        <a
                          id="update-profile-form"
                          className="block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Update Profile
                        </a>
                      </li>
                      <li>
                        <a
                          id="logout-form"
                          className="block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!-- rendering events --> */}
      <div className="container mx-auto py-10">
        <div id="event-container" className="grid lg:grid-cols-3 gap-10"></div>
      </div>

      {/* <!-- adding event --> */}
      <div
        id="event-modal"
        className="fixed inset-0 z-50 items-center justify-center hidden mt-4"
      >
        <form
          action=""
          method=""
          id="event-form"
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        >
          <div className="flex justify-between">
            <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
              Add Event
            </h2>
            <span id="close-form">
              <i className="fa-solid fa-xmark text-primary"></i>
            </span>
          </div>

          {/* <!-- Event Name --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventCategory"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Categories
              </label>
              <select
                id="eventCategory"
                name="eventCategory"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
              >
                <option value="None">None</option>
                <option value="Professional Development">
                  Professional Development
                </option>
                <option value="Networking">Networking</option>
                <option value="Campus Events">Campus Events</option>
              </select>
            </div>

            <div className="w-1/2 px-2">
              <label
                for="eventName"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
            </div>
          </div>

          {/* <!-- event description and event speaker --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventSpeaker"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Speaker
              </label>
              <input
                type="text"
                id="events"
                name="eventSpeaker"
                className="w-full p-2 mb-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
              <input
                type="text"
                id="events"
                name="eventSpeaker"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label
                for="eventDescription"
                className="block text-secondary-100 text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* <!-- event Agenda --> */}
          <div className="mb-4 -mx-2">
            <div className="px-2">
              <label
                for="eventAgenda"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Agenda
              </label>
              <textarea
                id="eventAgenda"
                name="eventAgenda"
                className="w-full block p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* <!-- Date and Time --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventDate"
                className="block text-secondary-100 text-sm font-medium"
              >
                Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                for="eventTime"
                className="block text-secondary-100 text-sm font-medium"
              >
                Time
              </label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
          </div>

          {/* <!--  Duration and Location--> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventDuration"
                className="block text-secondary-100 text-sm font-medium"
              >
                Duration (hours)
              </label>
              <input
                type="number"
                id="eventDuration"
                name="eventDuration"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                for="eventLocation"
                className="block text-secondary-100 text-sm font-medium"
              >
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
          </div>

          {/* <!-- Buttons --> */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
              onclick="cancelEvent()"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>

      {/* <!-- update event --> */}
      <div
        id=""
        className="update-event-modal fixed inset-0 z-50 justify-center mt-4 bg-white p-8 rounded-lg shadow-2xl hidden max-w-2xl mx-auto"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
            Update Event
          </h2>
          <span id="">
            <i className="close-update fa-solid fa-xmark text-primary"></i>
          </span>
        </div>
        <form action="" method="">
          {/* <!-- event category --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventCategory"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Category
              </label>
              <input
                type="text"
                id="eventCategory"
                name="eventCategory"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label
                for="eventName"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
          </div>

          {/* <!-- event description and event speaker --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventSpeaker"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Speaker
              </label>
              <input
                type="text"
                id="events"
                name="eventSpeaker"
                className="w-full p-2 mb-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
              <input
                type="text"
                id="events"
                name="eventSpeaker"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label
                for="eventDescription"
                className="block text-secondary-100 text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* <!-- event Agenda --> */}
          <div className="mb-4 -mx-2">
            <div className="px-2">
              <label
                for="eventAgenda"
                className="block text-secondary-100 text-sm font-medium"
              >
                Event Agenda
              </label>
              <textarea
                id="eventAgenda"
                name="eventAgenda"
                className="w-full block p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* <!-- Date and Time --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventDate"
                className="block text-secondary-100 text-sm font-medium"
              >
                Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="w-full p-2 rounded-lg border-gray-500 border-2 placeholder:text-secondary-200/50"
                required
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                for="eventTime"
                className="block text-secondary-100 text-sm font-medium"
              >
                Time
              </label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
          </div>

          {/* <!--  Duration and Location--> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="eventDuration"
                className="block text-secondary-100 text-sm font-medium"
              >
                Duration (hours)
              </label>
              <input
                type="number"
                id="eventDuration"
                name="eventDuration"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                for="eventLocation"
                className="block text-secondary-100 text-sm font-medium"
              >
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                className="w-full p-2 rounded-lg border-gray-500 border-2"
                required
              />
            </div>
          </div>

          {/* <!-- Buttons --> */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
              onclick="cancelEvent()"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>

      {/* <!-- deleting an event --> */}

      <div
        id=""
        className="delete-event-modal fixed inset-0 z-50 justify-center mt-4 bg-white p-8 rounded-lg shadow-sm max-w-sm hidden mx-auto"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
            Delete Event
          </h2>
          <span id="">
            <i className="close-delete fa-solid fa-xmark text-primary"></i>
          </span>
        </div>
        <form id="delete-event" action="" method="POST">
          <p className="text-secondary-100 mb-2">Delete this event:</p>
          <input type="radio" id="yes" name="yes" value="yes" />
          <label for="yes" className="text-primary text-sm font-medium">
            Yes
          </label>
          <br />
          <input type="radio" id="no" name="no" value="no" />
          <label for="yes" className="text-primary text-sm font-medium">
            No
          </label>

          <br />
          <br />
          {/* <!-- Button --> */}
          <button
            type="submit"
            className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
          >
            Delete Event
          </button>
        </form>
      </div>

      {/* <!-- update profile --> */}
      <div
        id="profile-modal"
        className="fixed inset-0 z-50 items-center justify-center hidden mt-4"
      >
        <form
          action=""
          method="POST"
          id="profile-form"
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        >
          <div className="flex justify-between">
            <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
              Update my profile
            </h2>
            <span id="close-profile-form">
              <i className="fa-solid fa-xmark text-primary"></i>
            </span>
          </div>

          {/* <!-- Name --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="first-name"
                className="block text-secondary-100 text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                autocomplete="given-name"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                placeholder="First Name"
              />
            </div>

            <div className="w-1/2 px-2">
              <label
                for="last-name"
                className="block text-secondary-100 text-sm font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="last-name"
                autocomplete="family-name"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* <!-- username and email --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="username"
                className="block text-secondary-100 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="update-username"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                placeholder="Username Eg:janesmith"
              />
            </div>

            <div className="w-1/2 px-2">
              <label
                for="email"
                className="block text-secondary-100 text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                placeholder="Email"
              />
            </div>
          </div>

          {/* <!-- year group and telephone --> */}
          <div className="mb-4 flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                for="group"
                className="block text-secondary-100 text-sm font-medium"
              >
                Year Group
              </label>
              <input
                id="group"
                type="text"
                name="group"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                placeholder="Year Group"
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                for="tel"
                className="block text-secondary-100 text-sm font-medium"
              >
                Telephone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                placeholder="230-5908-4528"
              />
            </div>
          </div>

          {/* <!--  profile photo--> */}
          <label for="photo" className="block text-sm font-medium text-primary">
            Photo
          </label>
          <div className="flex items-center gap-x-3">
            <svg
              className="h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
            <button
              type="button"
              className="rounded-lg bg-seconday-100 px-2.5 py-1.5 text-sm font-semibold text-secondary-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Change
            </button>
          </div>

          <label
            for="cover-photo"
            className="block text-sm font-medium leading-6 text-primary"
          >
            Cover photo
          </label>
          <div className="flex justify-center rounded-lg border border-dashed border-primary px-8 py-6">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-hover px-6"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="fileUpload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>

          {/* <!-- Buttons --> */}
          <div className="flex justify-between mt-2">
            <button
              type="button"
              className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
              onclick="cancelUpdateProfile()"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
            >
              Update profile
            </button>
          </div>
        </form>
      </div>

      {/* <!-- logout --> */}
      <div
        id="logout-modal"
        className="fixed inset-0 z-50 items-center justify-center hidden mt-4"
      >
        <form
          action=""
          method=""
          id="logout-form"
          className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
        >
          <div className="flex justify-between">
            <h2 className="text-2xl text-secondary-100 font-semibold mb-6">
              Log Out
            </h2>
            <span id="close-logout-form">
              <i className="fa-solid fa-xmark text-primary"></i>
            </span>
          </div>

          {/* <!-- Name --> */}
          <p className="text-secondary-100">Log out of my Dashboard</p>

          {/* <!-- Buttons --> */}
          <div className="flex justify-between mt-2">
            <button
              type="button"
              className="bg-secondary-300 text-secondary-200 rounded-lg py-2 px-4 hover:text-hover"
              onclick="cancelLogout()"
            >
              Cancel
            </button>
            <button
              id="dashboard_logout"
              type="button"
              className="bg-primary text-secondary-100 rounded-lg py-2 px-4 hover:text-hover"
            >
              Log Out
            </button>
          </div>
        </form>
      </div>

      {/* <script src="../js/profile.js"></script>
    <script src="../js/addEvent.js"></script>
    <script src="../js/updateEvent.js"></script>
    <script src="../js/deleteEventDashboard.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../services/dashboard.js"></script>
    <script src="../services/events.js"></script> */}
    </div>
  );
}
