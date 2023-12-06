export default function SignUp() {
  return (
    <div className="bg-primary">
      <div className="grid lg:grid-cols-2 container mx-auto py-12">
        <div className="bg-secondary-100 w-full py-32 px-8">
          <a href="#" clas="font-extrabold mx-auto">
            <h1 className="text-secondary-200 text-2xl text-center mb-4">
              <span className="text-primary text-3xl">A</span>lumni
              <span className="text-primary text-3xl">N</span>exus
            </h1>
          </a>
          <h2 className="text-primary text-center font-semibold text-4xl mb-4">
            Welcome!
          </h2>
          <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
            At AlumniNexus, the seeds of lifelong connections were sown.
            Graduating from this prestigious institution, we embarked on diverse
            paths, each alumni with a unique destination. Yet, our shared
            history at AlumniNexus continues to bind us together, forming a
            resilient network of talent and ambition.
          </p>

          {/* <!-- <img className="rounded-lg w-full mx-auto" src="../images/friends-toasting-with-glasses-wine-eating-barbeque-during-outdoor-party.jpg" alt=""> --> */}
          <p className="text-secondary-200 leading-mb italic text-center font-light mb-6">
            Today, this platform stands as a testament to our unwavering
            commitment to the values and spirit of AlumniNexus.
          </p>

          <div className="text-center">
            <p className="text-primary text-xl">Already have an account</p>
            <a
              className="text-secondary-200 hover:underline hover:text-primary"
              href="/auth/login"
            >
              Login
            </a>
          </div>
        </div>

        <div className="mx-auto w-full bg-secondary-200 py-10">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-primary mx-auto font-semibold text-xl">
              Create An Account
            </h2>
            <form
              id="signupForm"
              action=""
              method=""
              className="flex flex-col items-start space-y-4 max-w-xl mx-auto w-full md:w-[50%]"
            >
              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-user text-primary"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Username Eg:janesmith"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-user text-primary"></i>
                </span>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autocomplete="given-name"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="First Name"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-user text-primary"></i>
                </span>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autocomplete="family-name"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Last Name"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-envelope text-primary"></i>
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Email"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-users text-primary"></i>
                </span>
                <input
                  type="text"
                  name="group"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Year Group"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="230-5908-4528"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <input
                  type="address"
                  id="address"
                  name="address"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Address"
                />
              </div>

              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-lock text-primary"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Password"
                />
                <span
                  id="togglePassword"
                  className="absolute top-2 right-5 cursor-pointer"
                >
                  <i className="fa-regular fa-eye-slash text-primary"></i>
                </span>
              </div>

              <div className="flex mx-auto space-x-32">
                <a
                  className="rounded-full bg-secondary-100 text-secondary-200 px-4 py-2 hover:underline hover:text-primary"
                  href="/about"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  id="signupButton"
                  className="rounded-full text-secondary-200 bg-primary mx-auto px-5 py-2 hover:text-hover"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <script src="../services/signup.js"></script>
      <script src="../js//password.js"></script>
    </div>
  );
}
