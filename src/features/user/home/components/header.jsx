import { Link } from "react-router-dom";
import { DashboardBtn } from "../../index/imports";

export default function Header({ links, onDashboardClick }) {
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
            {links.map(({ name, url }) => (
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
            <DashboardBtn onClick={onDashboardClick} />
          </ul>
        </div>
      </nav>
    </header>
  );
}
