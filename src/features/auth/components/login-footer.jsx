export default function LoginFooter() {
  return (
    <>
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
    </>
  );
}
