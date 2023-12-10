import { Link } from "react-router-dom";
import { ROUTES } from "../index/imports";

const { root: auth, signup } = ROUTES.auth;

export default function LoginFooter() {
  return (
    <>
      <a className="mx-auto" href="#">
        Forgot Password?
      </a>
      <div className="flex mx-auto space-x-2 text-sm">
        <p>Don't have an account</p>
        <Link
          className="text-secondary-200 hover:underline hover:text-primary"
          to={`${auth}/${signup}`}
          replace={true}
        >
          Sign up
        </Link>
      </div>
    </>
  );
}
