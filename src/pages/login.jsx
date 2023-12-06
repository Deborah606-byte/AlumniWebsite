export default function Login() {
  return (
    <body class="bg-primary">
      <div class="grid lg:grid-cols-2 container mx-auto mt-20">
        <div class="">
          <img class="w-full" src="../images/login.jpg" alt="" />
        </div>
        <div class="mx-auto bg-secondary-300 w-full">
          <div class="flex flex-col items-start space-y-4 mt-12">
            <a href="#" class="font-extrabold mx-auto">
              <h1 class="text-secondary-200 text-2xl mx-auto">
                <span class="text-secondary-100 text-3xl">A</span>lumni
                <span class="text-secondary-100 text-3xl">N</span>exus
              </h1>
            </a>
            <h2 class="text-primary mx-auto font-semibold text-4xl">
              Member Login!
            </h2>
            <form
              id="loginForm"
              action=""
              class="flex flex-col items-start space-y-4 max-w-xl mx-auto w-full md:w-[50%]"
            >
              <div class="relative w-full flex items-center">
                <span class="absolute top-2 left-5">
                  <i class="fa-solid fa-user text-primary"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  required
                  class="block w-full p-2 pl-10 rounded-lg border-gray-500 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Username"
                />
              </div>
              <div class="relative w-full flex items-center">
                <span class="absolute top-2 left-5">
                  <i class="fa-solid fa-lock text-primary"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="block w-full p-2 pl-10 rounded-lg border-gray-500 mb-2 border-2 placeholder:pl-2 placeholder:text-secondary-100/50"
                  placeholder="Password"
                />
                <span
                  id="togglePassword"
                  class="absolute top-2 right-5 cursor-pointer"
                >
                  <i class="fa-regular fa-eye-slash text-primary"></i>
                </span>
              </div>
              <button
                type="submit"
                class="rounded-full text-secondary-200 bg-primary mx-auto px-5 py-2"
              >
                Log in
              </button>
            </form>
            <a class="mx-auto" href="">
              Forgot Password?
            </a>
            <div class="flex mx-auto space-x-2 text-sm">
              <p>Don't have an account</p>
              <a
                class="text-secondary-200 hover:underline hover:text-primary"
                href="/auth/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <script src="../services/login.js"></script>
      <script src="../js/password.js"></script>
    </body>
  );
}
