import SignUpHeader from "../components/signup-header";
import {
  EmailInput,
  Form,
  NumberInput,
  PasswordInput,
  SubmitButton,
  TextInput,
} from "../index/imports";

export default function SignUpComponent() {
  const { username, firstName, lastName, email, group, phone } = {};
  const handleInputChange = (e) => console.log(e);

  return (
    <div className="grid lg:grid-cols-2 container mx-auto py-12">
      <SignUpHeader />
      <div className="mx-auto w-full bg-secondary-200 py-10">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-primary mx-auto font-semibold text-xl">
            Create An Account
          </h2>
          <Form>
            <TextInput
              iconClass="fa-solid fa-user text-primary"
              name="username"
              placeholder="Username Eg:janesmith"
              value={username}
              onChange={handleInputChange}
            />
            <TextInput
              iconClass="fa-solid fa-user text-primary"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange}
            />
            <TextInput
              iconClass="fa-solid fa-user text-primary"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange}
            />
            <EmailInput
              iconClass="fa-solid fa-envelope text-primary"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            <TextInput
              iconClass="fa-solid fa-users text-primary"
              name="group"
              placeholder="Year Group"
              value={group}
              onChange={handleInputChange}
            />
            <NumberInput
              name="phone"
              placeholder="230-5908-4528"
              value={phone}
              onChange={handleInputChange}
            />
            <TextInput
              iconClass="fa-solid fa-location-dot"
              name="address"
              placeholder="Address"
              value={address}
              onChange={handleInputChange}
            />
            <PasswordInput value={password} onChange={handleInputChange} />

            <div className="flex mx-auto space-x-32">
              <a
                className="rounded-full bg-secondary-100 text-secondary-200 px-4 py-2 hover:underline hover:text-primary"
                href="/about"
              >
                Cancel
              </a>
              <SubmitButton>Sign Up</SubmitButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
