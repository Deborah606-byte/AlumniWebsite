import { useNavigate } from "react-router-dom";
import { ROUTES, useFormLogic, signupApiRequest } from "../index/imports";

const DEFAULT_VALUES = {
  address: "",
  email: "",
  firstName: "",
  group: "",
  lastName: "",
  password: "",
  phone: "",
  username: "",
};
export default function useSignUpLogic() {
  const { values, handleInputChange } = useFormLogic(DEFAULT_VALUES);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    const { root: auth, login } = ROUTES.auth;
    const url = `${auth}/${login}`;
    return navigate(url, { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await signupApiRequest({ values });

    if (error) return alert(error);

    alert("Account created, please login...");
    return redirectToLogin();
  };

  const handleSignCancel = () => {};

  return { values, handleInputChange, handleSubmit, handleSignCancel };
}
