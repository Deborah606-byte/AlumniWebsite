import { getUrls, DashboardBtn } from "../../index/imports";
import { Link } from "react-router-dom";

export default function Header() {
  const { homeUrl, eventsUrl, storiesUrl, opportunitiesUrl } = getUrls();
  return (
    <header>
      <nav className="flex justify-between items-center container mx-auto py-4 w-[80%]">
        <a href="" className="font-extrabold">
          <h1 className="text-secondary-200 text-2xl">
            <span className="text-secondary-100 text-3xl">A</span>lumni
            <span className="text-secondary-100 text-3xl">N</span>exus
          </h1>
        </a>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {[
              { name: "Home", url: homeUrl },
              { name: "Programs & Events", url: eventsUrl },
              { name: "Alumni Stories", url: storiesUrl },
              { name: "Career Opportunities", url: opportunitiesUrl },
            ].map(({ name, url }) => (
              <li key={name}>
                <Link
                  className="text-hover cursor-pointer"
                  aria-current="page"
                  to={url}
                >
                  {name}
                </Link>
              </li>
            ))}
            <DashboardBtn onClick={() => console.log("to dashboard")} />
          </ul>
        </div>
      </nav>
    </header>
  );
}
