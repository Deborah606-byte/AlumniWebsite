export default function Admin() {
  return (
    <>
      {" "}
      <div className="bg-secondary-100">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-3 bg-primary p-10 space-y-12">
            <a href="#" className="font-extrabold">
              <h1 className="text-secondary-200 text-2xl">
                <span className="text-secondary-100 text-3xl">A</span>lumni
                <span className="text-secondary-100 text-3xl">N</span>exus
              </h1>
            </a>
            <div>
              <a
                href="#"
                className="text-secondary-100 font-semibold text-2xl dashboard-menu-item"
                data-section="dashboard"
                onclick="toggleSection('dashboard')"
              >
                Dashboard
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-user text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
              >
                Adminstrator
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-users-line text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
                data-section="members"
                onclick="showSection('members')"
              >
                Members
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-calendar-days text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
                data-section="events"
                onclick="showSection('events')"
              >
                Events
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-calendar-check text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
                data-section="myevents"
                onclick="showSection('myevents')"
              >
                My Events
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-calendar-check text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
                data-section="jobs"
                onclick="showSection('jobs')"
              >
                Job Opportunities
              </a>
            </div>
            <div className="relative space-x-10">
              <span className="absolute left-0">
                <i className="fa-solid fa-gear text-secondary-200"></i>
              </span>
              <a
                href="#"
                className="text-secondary-100 font-medium dashboard-menu-item"
                data-section="settings"
                onclick="showSection('settings')"
              >
                Settings
              </a>
            </div>
          </div>

          <div className="col-span-9 p-10">
            <div className="flex justify-end container mx-auto">
              <ul className="flex space-x-4">
                <li className="relative group">
                  <div className="relative inline-block text-secondary-200 cursor-pointer">
                    <img
                      className="rounded-full h-10 w-10 border-2 border-secondary-200"
                      src="../images/admin.avif"
                      alt=""
                    />
                    <div className="profile-dropdown hidden absolute z-10 right-0 mt-2 w-48 bg-primary rounded-lg shadow-lg border border-secondary-300">
                      <ul className="py-1">
                        <li>
                          <a
                            id="update-profile-form"
                            href="#"
                            className="block px-4 py-2 text-secondary-200 hover:text-hover"
                          >
                            Update Profile
                          </a>
                        </li>
                        <li>
                          <a
                            id="logout-form"
                            href=""
                            className="block px-4 py-2 text-secondary-200 hover:text-hover"
                          >
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="pt-2">
                  <a className="text-primary">Deborah Ama Paintsil</a>
                </li>
              </ul>
            </div>

            {/* <!-- dashboard --> */}
            <div
              id="dashboard"
              className="bg-secondary-200 p-8 rounded-lg mt-10 dashboard-section"
            >
              {/* <!-- Content for the dashboard section --> */}
              <h3 className="text-secondary-100 font-semibold text-2xl pb-4">
                Dashboard Overview
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {/* <!-- Statistics Card 1 --> */}
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="text-secondary-100 text-lg font-medium">
                    Total Members
                  </h4>
                  <p className="text-secondary-200 text-2xl font-bold">500</p>
                </div>

                {/* <!-- Statistics Card 2 --> */}
                <div className="bg-primary p-4 rounded-lg">
                  <h4 className="text-secondary-100 text-lg font-medium">
                    Events This Month
                  </h4>
                  <p className="text-secondary-200 text-2xl font-bold">15</p>
                </div>

                {/* <!-- Latest Members List --> */}
                <div className="col-span-2 mt-6">
                  <h4 className="text-secondary-100 text-lg font-medium mb-4">
                    Latest Members
                  </h4>
                  <ul className="list-disc list-inside text-primary">
                    <li>John Doe</li>
                    <li>Jane Smith</li>
                    <li>Bob Johnson</li>
                  </ul>
                </div>

                {/* <!-- Recent Events List --> */}
                <div className="col-span-2 mt-6">
                  <h4 className="text-secondary-100 text-lg font-medium mb-4">
                    Recent Events
                  </h4>
                  <ul className="list-disc list-inside text-primary">
                    <li>Event A - Date</li>
                    <li>Event B - Date</li>
                    <li>Event C - Date</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- Members --> */}
            <div
              id="members"
              className="bg-secondary-200 p-8 rounded-lg mt-10 hidden"
            >
              <div className="flex justify-between mb-5">
                <p>Alumni Members</p>
                <div className="relative space-x-2">
                  <span className="absolute left-5 mt-2">
                    <i className="fa-solid fa-circle-plus text-secondary-100 hover:text-hover"></i>
                  </span>
                  <button
                    id="open-admin-member-form"
                    className="addMemberButton rounded-full text-secondary-200 border-secondary-300 px-8 bg-primary py-2 hover:text-hover"
                  >
                    Add Member
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-6 py-4">
                {/* <!-- Header row for column labels --> */}
                <div className="text-primary text-lg mb-2">Username</div>
                <div className="text-primary text-lg mb-2">First name</div>
                <div className="text-primary text-lg mb-2">Last name</div>
                <div className="text-primary text-lg mb-2">Graduation Year</div>
                <div className="text-primary text-lg mb-2">Email</div>
                <div className="text-primary text-lg mb-2">Action</div>

                {/* <!-- Alumni user data --> */}
                <div>Dee</div>
                <div>Deborah</div>
                <div>Paintsil</div>
                <div>2015</div>
                <div style="word-wrap: break-word">
                  d.paintsil@alustudent.com
                </div>
                <div className="pl-4">
                  <span id="" className="cursor-pointer dropdown-toggle">
                    <i className="fa-solid fa-ellipsis-vertical text-primary"></i>
                  </span>

                  {/* <!-- Dropdown Menu --> */}
                  <div className="dropdown-menu hidden absolute right-0 mt-2 w-40 bg-primary rounded-lg shadow-lg border border-secondary-300">
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          id=""
                          className="open-admin-edit-form block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Edit Alumni
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          id=""
                          className="open-admin-delete-form block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Delete Alumni
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Additional Alumni Members (you can add more rows as needed) --> */}
                <div>JohnD</div>
                <div>John</div>
                <div>Doe</div>
                <div>2010</div>
                <div style="word-wrap: break-word">john.doe@email.com</div>
                <div className="pl-4">
                  <span id="" className="cursor-pointer dropdown-toggle">
                    <i className="fa-solid fa-ellipsis-vertical text-primary"></i>
                  </span>
                  <div className="dropdown-menu hidden absolute right-0 mt-2 w-40 bg-primary rounded-lg shadow-lg border border-secondary-300">
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          id=""
                          className="open-admin-edit-form block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Edit Alumni
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          id=""
                          className="open-admin-delete-form block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Delete Alumni
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Add more alumni members as needed --> */}
              </div>

              {/* <!-- Chart --> */}
              <div className="" style="max-width: 300px">
                <canvas id="graduationChart" width="300" height="300"></canvas>
              </div>
            </div>

            {/* <!-- events --> */}
            <div
              id="events"
              className="bg-secondary-200 p-8 rounded-lg mt-10 hidden"
            >
              <h3 className="text-secondary-100 font-semibold text-2xl pb-4">
                Programs & Events
              </h3>
              <div className="flex justify-between">
                <p>Created Events</p>
                <div className="relative space-x-2">
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
                </div>
              </div>

              <div className="grid grid-cols-6 py-5 space-x-4">
                {/* <!-- Sample Event Data --> */}
                <div className="">
                  <p className="text-primary text-lg mb-2">Category</p>
                  <p>Professional Development</p>
                </div>
                <div>
                  <p className="text-primary text-lg mb-2">Date</p>
                  <p>Sep 12, 2023</p>
                </div>
                <div>
                  <p className="text-primary text-lg mb-2">Time</p>
                  <p>02:30 pm</p>
                </div>
                <div>
                  <p className="text-primary text-lg mb-2">Duration</p>
                  <p>4 hours</p>
                </div>
                <div>
                  <p className="text-primary text-lg mb-2">Location</p>
                  <p>ALC Campus</p>
                </div>
                <div>
                  <p className="text-primary text-lg mb-2">Action</p>
                  <span id="dropdown-toggle" className="cursor-pointer">
                    <i className="fa-solid fa-ellipsis-vertical text-primary"></i>
                  </span>
                  {/* <!-- Dropdown Menu --> */}
                  <div
                    id="dropdown-menu"
                    className="hidden absolute right-0 mt-2 w-40 bg-primary rounded-lg shadow-lg border border-secondary-300"
                  >
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          id="edit-event-form"
                          className="updateEventbutton block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Edit Event
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="deleteEventbutton block px-4 py-2 text-secondary-200 hover:text-hover"
                        >
                          Delete Event
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Chart --> */}
              <div className="mt-10">
                <h4 className="text-secondary-100 font-semibold text-lg mb-4">
                  Event Categories Chart
                </h4>
                <canvas
                  id="eventCategoryChart"
                  width="400"
                  height="200"
                ></canvas>
              </div>
            </div>

            {/* <!-- myevents --> */}
            <div
              id="myevents"
              className="bg-secondary-200 p-8 rounded-lg mt-10 hidden"
            >
              <div className="grid grid-cols-2 gap-10">
                <div className="card shadow-sm relative bg-secondary-300">
                  <img
                    src="../images/audience-seminar-applauding-young-black-woman-lectern_625516-3573.avif"
                    alt="seminar"
                    className="w-full"
                  />

                  <div className="absolute top-[52%] left-0 bg-black/50 w-full">
                    <ul className="list-disc px-6 py-2">
                      <li className="text-secondary-200 font-medium">
                        Leadership Skills
                      </li>
                      <li className="text-secondary-200 font-medium">
                        Management
                      </li>
                      <li className="text-secondary-200 font-medium">
                        Personal Development
                      </li>
                    </ul>
                  </div>

                  <div className="absolute top-2 right-5">
                    <span id="" className="dropdown-toggle cursor-pointer">
                      <i className="fa-solid fa-ellipsis-vertical text-primary"></i>
                    </span>
                    {/* <!-- Dropdown Menu --> */}
                    <div
                      id=""
                      className="dropdown-menu hidden absolute right-0 mt-2 w-40 bg-primary rounded-lg shadow-lg border border-secondary-300"
                    >
                      <ul className="py-1">
                        <li>
                          <a
                            id=""
                            className="edit-event-form cursor-pointer block px-4 py-2 text-secondary-200 hover:text-hover"
                          >
                            Edit Event
                          </a>
                        </li>
                        <li>
                          <a className="delete-event-form cursor-pointer block px-4 py-2 text-secondary-200 hover:text-hover">
                            Delete Event
                          </a>
                        </li>
                      </ul>
                    </div>
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
              </div>
            </div>

            {/* <!-- jobs --> */}
            <div
              id="jobs"
              className="bg-secondary-200 p-8 rounded-lg mt-10 hidden"
            >
              <h3 className="text-secondary-100 font-semibold text-2xl pb-4">
                Job Opportunities
              </h3>

              {/* <!-- Sample Job Opportunities --> */}
              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">Software Engineer</h4>
                <p className="text-secondary-100 mb-2">
                  Company: Tech Solutions Inc.
                </p>
                <p className="text-secondary-100 mb-2">
                  Location: Anytown, USA
                </p>
                <p className="text-secondary-100 mb-2">
                  Posted on: October 15, 2023
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">
                  Marketing Specialist
                </h4>
                <p className="text-secondary-100 mb-2">
                  Company: MarketingPros Ltd.
                </p>
                <p className="text-secondary-100 mb-2">
                  Location: Cityville, USA
                </p>
                <p className="text-secondary-100 mb-2">
                  Posted on: October 10, 2023
                </p>
              </div>

              {/* <!-- more job opportunities as needed --> */}
            </div>

            {/* <!-- settings --> */}
            <div
              id="settings"
              className="bg-secondary-200 p-8 rounded-lg mt-10 hidden"
            >
              <h3 className="text-secondary-100 font-semibold text-2xl pb-4">
                Admin Settings
              </h3>

              {/* <!-- General Settings --> */}
              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">General Settings</h4>
                <p className="text-secondary-100 mb-2">Language: English</p>
                <p className="text-secondary-100 mb-2">Timezone: UTC+0</p>
                <p className="text-secondary-100 mb-2">
                  Notification Preferences: Email
                </p>
              </div>

              {/* <!-- Security Settings --> */}
              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">Security Settings</h4>
                <p className="text-secondary-100 mb-2">Change Password</p>
                <p className="text-secondary-100 mb-2">
                  Two-Factor Authentication: Enabled
                </p>
              </div>

              {/* <!-- Theme Settings --> */}
              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">Theme Settings</h4>
                <p className="text-secondary-100 mb-2">
                  Current Theme: Dark Mode
                </p>
                <p className="text-secondary-100 mb-2">Customize Theme</p>
              </div>

              {/* <!-- Account Settings --> */}
              <div className="mb-4">
                <h4 className="text-primary text-lg mb-2">Account Settings</h4>
                <p className="text-secondary-100 mb-2">
                  Profile Visibility: Public
                </p>
                <p className="text-secondary-100 mb-2">Deactivate Account</p>
              </div>

              {/* <!-- Add more settings options as needed --> */}
            </div>
          </div>
        </div>
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
                id="username"
                autocomplete="username"
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
                    name="file-upload"
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
    <script src="../js/admin.js"></script>
    <script src="../js/logout.js"></script>
    <script src="../js/memberChart.js"></script>
    <script src="../js/eventChart.js"></script> */}
    </>
  );
}
