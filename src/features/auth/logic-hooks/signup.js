import { useState } from "react";

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
    const [values, setValues] = useState(DEFAULT_VALUES);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedValues = { ...values, [name]: value };
        return setValues(updatedValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("values", values);
    };

    const handleSignCancel = () => console.log("canceling...")

    return { values, handleInputChange, handleSubmit, handleSignCancel };
}
