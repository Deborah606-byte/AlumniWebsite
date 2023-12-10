export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center container mx-auto py-4 w-[80%]">
        <a href="#" className="font-extrabold">
          <h1 className="text-secondary-200 text-2xl">
            <span className="text-secondary-100 text-3xl">A</span>lumni
            <span className="text-secondary-100 text-3xl">N</span>exus
          </h1>
        </a>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="text-secondary-100 hover:text-hover" href="/home">
                Home
              </a>
            </li>
            <li className="">
              <a className="cursor-pointer text-hover">Programs & Events</a>
            </li>
            <li>
              <a
                className="text-secondary-100 hover:text-hover"
                href="/stories"
              >
                Alumni Stories
              </a>
            </li>
            <li>
              <a
                className="text-secondary-100 hover:text-hover"
                href="/opportunity"
              >
                Career Opportunity
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
