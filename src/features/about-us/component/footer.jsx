import { logoElectron } from "../index/imports";

export default function Footer() {
  return (
    <div className="bg-black/50">
      <div className="container mx-auto pt-36 pb-5 w-[80%]">
        <div className="grid lg:grid-cols-4 gap-10 mb-36">
          <div className="mt-12">
            <img className="" src={logoElectron} alt="" />
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

        <hr className="h-[2px] my-6 bg-secondary-100 opacity-60" />

        <div className="flex justify-between">
          <p className="text-sm text-secondary-200 font-light">
            &copy; 2023 AlumniNexus. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="text-secondary-100 w-5 h-5 fill-current rounded-full"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="text-secondary-100 w-5 h-5 fill-current rounded-full"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="text-secondary-100 w-5 h-5 fill-current rounded-full"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}