import loginImage from "../data/images/login.jpg";

export default function Login() {
  return (
    <div className="bg-primary">
      <div className="grid lg:grid-cols-2 container mx-auto mt-20">
        <div className="">
          <img className="w-full" src={loginImage} alt="" />
        </div>
        <div className="mx-auto bg-secondary-300 w-full">
          <div className="flex flex-col items-start space-y-4 mt-12">
            <a href="#" className="font-extrabold mx-auto">
              <h1 className="text-secondary-200 text-2xl mx-auto">
                <span className="text-secondary-100 text-3xl">A</span>lumni
                <span className="text-secondary-100 text-3xl">N</span>exus
              </h1>
            </a>
            <h2 className="text-primary mx-auto font-semibold text-4xl">
              Member Login!
            </h2>
            <form
              id="loginForm"
              action=""
              className="flex flex-col items-start space-y-4 max-w-xl mx-auto w-full md:w-[50%]"
            >
              <div className="relative w-full flex items-center">
                <span className="absolute top-2 left-5">
                  <i className="fa-solid fa-user text-primary"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  required
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Username"
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
                  className="block w-full p-2 pl-10 rounded-lg border-gray-500 mb-2 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Password"
                />
                <span
                  id="togglePassword"
                  className="absolute top-2 right-5 cursor-pointer"
                >
                  <i className="fa-regular fa-eye-slash text-primary"></i>
                </span>
              </div>
              <button
                type="submit"
                className="rounded-full text-secondary-200 bg-primary mx-auto px-5 py-2"
              >
                Log in
              </button>
            </form>
            <a className="mx-auto" href="">
              Forgot Password?
            </a>
            <div className="flex mx-auto space-x-2 text-sm">
              <p>Don't have an account</p>
              <a
                className="text-secondary-200 hover:underline hover:text-primary"
                href="/auth/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <script src="../services/login.js"></script>
      <script src="../js/password.js"></script> */}
    </div>
  );
}
