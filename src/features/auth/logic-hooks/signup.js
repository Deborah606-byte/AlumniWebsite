import { useFormLogic } from "../index/imports";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("values", values);
    };

    const handleSignCancel = () => console.log("canceling...")

    return { values, handleInputChange, handleSubmit, handleSignCancel };
}
