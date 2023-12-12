import SignUpHeader from "../components/signup-header";
import {
  EmailInput,
  Form,
  NumberInput,
  PasswordInput,
  SubmitButton,
  TextInput,
} from "../index/imports";
import useSignUpLogic from "../logic-hooks/signup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faUserGroup, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

export default function SignUpComponent() {
  const { values, handleInputChange, handleSubmit } = useSignUpLogic();
  const {
    username,
    password,
    firstName,
    lastName,
    address,
    email,
    group,
    phone,
  } = values;

  return (
    <div className="grid lg:grid-cols-2 container mx-auto py-12">
      <SignUpHeader />
      <div className="mx-auto w-full bg-secondary-200 py-10">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-primary mx-auto font-semibold text-xl">
            Create An Account
          </h2>
          <Form onSubmit={handleSubmit} className="mx-auto space-y-4">
            <TextInput
              icon={<FontAwesomeIcon icon={faUser} className="text-primary" />}
              name="username"
              placeholder="Username Eg:janesmith"
              value={username}
              onChange={handleInputChange}
            />
            <TextInput
              icon={<FontAwesomeIcon icon={faUser} className="text-primary" />}
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange}
            />
            <TextInput
              icon={<FontAwesomeIcon icon={faUser} className="text-primary" />}
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange}
            />
            <EmailInput
              icon={<FontAwesomeIcon icon={faEnvelope} className="text-primary" />}
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            <TextInput
              icon={<FontAwesomeIcon icon={faUserGroup} className="text-primary" />}
              name="group"
              placeholder="Year Group"
              value={group}
              onChange={handleInputChange}
            />
            <NumberInput
            icon={<FontAwesomeIcon icon={faPhone} className="text-primary" />}
              name="phone"
              placeholder="230-5908-4528"
              value={phone}
              onChange={handleInputChange}
            />
            <TextInput
              icon={<FontAwesomeIcon icon={faLocation} className="text-primary" />}
              name="address"
              placeholder="Address"
              value={address}
              onChange={handleInputChange}
            />
            <PasswordInput value={password} onChange={handleInputChange} />

            <div className="flex mx-auto space-x-32">
              <SubmitButton>Sign Up</SubmitButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
