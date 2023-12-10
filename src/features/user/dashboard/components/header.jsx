import { doctor } from "../../index/imports";

export default function Header() {
  return (
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
                  src={doctor}
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
  );
}
