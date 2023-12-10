export default function UpdateProfile() {
  return (
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
  );
}
