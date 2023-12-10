import loginImage from "../data/images/login.jpg";
import { LoginComponent } from "./index";

export default function Login() {
  return (
    <div className="bg-primary">
      <div className="grid lg:grid-cols-2 container mx-auto mt-20">
        <div className="">
          <img className="w-full" src={loginImage} alt="" />
        </div>
        <LoginComponent />
      </div>

      {/* <script src="../services/login.js"></script>
      <script src="../js/password.js"></script> */}
    </div>
  );
}
