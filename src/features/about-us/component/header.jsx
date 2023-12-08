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
        <div className="md:hidden">
          <button onClick={() => console.log("Toggle")} className="menu-icon">
            <i className="fa-solid fa-bars text-secondary-100"></i>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex flex-col md:flex-row items-center gap-8">
            <li>
              <a className="text-hover" aria-current="page" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="text-secondary-100 hover:text-hover" href="">
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-secondary-100 hover:text-hover"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="text-secondary-100 hover:text-hover"
                href="#speakers"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                className="rounded-full text-secondary-200 border-2 border-secondary-300 px-8 hover:bg-secondary-100 py-2"
                href="/auth/login"
              >
                Log in
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="md:hidden nav-links py-10 hidden">
        <ul className="flex flex-col items-center gap-4">
          <li>
            <a
              className="text-secondary-100 hover:text-hover"
              aria-current="page"
              href=""
            >
              About Us
            </a>
          </li>
          <li>
            <a className="text-secondary-100 hover:text-hover" href="">
              FAQ
            </a>
          </li>
          <li>
            <a
              className="text-secondary-100 hover:text-hover"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a className="text-secondary-100 hover:text-hover" href="#speakers">
              Speakers
            </a>
          </li>
          <li>
            <a
              className="rounded-full text-secondary-200 border-2 border-secondary-100 px-8 hover:bg-primary py-2"
              href="/auth/login"
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
