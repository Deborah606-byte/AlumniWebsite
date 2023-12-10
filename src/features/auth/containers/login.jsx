import {
  Form,
  TextInput,
  PasswordInput,
  SubmitButton,
  loginImage,
} from "../index/imports";
import LoginFooter from "../components/login-footer";
import LoginHeader from "../components/login-header";

export default function LoginComponent() {
  const { username, password } = {};
  const handleInputChange = (e) => console.log(e);
  const handleFormSubmit = (e) => console.log(e);

  return (
    <div className="grid lg:grid-cols-2 container mx-auto mt-20">
      <div className="">
        <img className="w-full" src={loginImage} alt="" />
      </div>
      <div className="mx-auto bg-secondary-300 w-full">
        <div className="flex flex-col items-start space-y-4 mt-12">
          <LoginHeader />
          <Form onSubmit={handleFormSubmit}>
            <TextInput
              iconClass="fa-solid fa-user text-primary"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <PasswordInput value={password} onChange={handleInputChange} />
            <SubmitButton>Log in</SubmitButton>
          </Form>
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}
