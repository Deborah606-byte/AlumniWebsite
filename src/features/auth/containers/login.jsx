import { Form, TextInput, PasswordInput, SubmitButton } from "../index/imports";
import LoginFooter from "../components/login-footer";
import LoginHeader from "../components/login-header";

export default function LoginComponent() {
  const { username, password } = {};
  const handleInputChange = (e) => console.log(e);
  const handleFormSubmit = (e) => console.log(e);

  return (
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
  );
}
