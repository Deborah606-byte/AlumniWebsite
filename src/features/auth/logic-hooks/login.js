import { useNavigate } from "react-router-dom";
import {
  ROUTES,
  useFormLogic,
  loginApiRequest,
  saveUserToLocalStorage,
} from "../index/imports";

const DEFAULT_VALUES = {
  password: "",
  username: "",
};
export default function useLoginLogic() {
  const { values, handleInputChange } = useFormLogic(DEFAULT_VALUES);
  const navigate = useNavigate();

  const redirectToHome = () => {
    const { root: home } = ROUTES.home;
    return navigate(home, { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, data } = await loginApiRequest({ values });

    if (error) return alert(error);

    saveUserToLocalStorage(data.data);
    return redirectToHome();
  };

  return { values, handleInputChange, handleSubmit };
}
