import { AppFooter } from "../../index/imports";

export default function HomeFooter() {
  return (
    <div className="bg-black/50">
      <div className="container mx-auto pt-36 pb-5 w-[80%]">
        <div className="grid lg:grid-cols-4 gap-10 mb-36">
          <div className="mt-12">
            <img className="" src="../images/ion_logo-electron.png" alt="" />
          </div>
          <div>
            <a href="#" className="font-extrabold">
              <h1 className="text-secondary-200 text-2xl">
                <span className="text-secondary-100 text-3xl">A</span>lumni
                <span className="text-secondary-100 text-3xl">N</span>exus
              </h1>
            </a>
            <p className="mt-5 text-secondary-200 font-light text-sm leading-relaxed">
              "Discover the power of alumni connections with AlumniNexus.
              Uniting past, present, and future, our platform fosters meaningful
              interactions, professional growth, and a lifelong bond among our
              community. Join us in shaping the legacy of excellence and
              opportunity."
            </p>
          </div>
          <div>
            <h4 className="text-secondary-100 font-medium text-3xl">
              Contact Details
            </h4>
            <div className="mt-5">
              <div className="flex justify-start space-x-4 mb-5">
                <i className="fa-solid fa-phone text-secondary-100"></i>
                <p className="text-secondary-200 font-light text-sm">
                  +230-7869-9070
                </p>
              </div>
              <div className="flex justify-start space-x-4 mb-5">
                <i className="fa-solid fa-globe text-secondary-100"></i>
                <p className="text-secondary-200 font-light text-sm">
                  www.alumninexus.org
                </p>
              </div>
              <div className="flex justify-start space-x-4">
                <i className="fa-solid fa-envelope text-secondary-100"></i>
                <p className="text-secondary-200 font-light text-sm">
                  alumninexus@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-secondary-100 font-medium text-3xl">Events</h4>
            <ul className="text-secondary-200 font-light text-sm mt-5">
              <a className="hover:text-hover" href="#">
                <li className="mb-5">Professional Development Workshops</li>
              </a>
              <a className="hover:text-hover" href="#">
                <li className="mb-5">Networking Mixers</li>
              </a>
              <a className="hover:text-hover" href="#">
                <li>Campus Events</li>
              </a>
            </ul>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
