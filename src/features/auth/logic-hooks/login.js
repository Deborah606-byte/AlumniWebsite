import { useState } from "react";

const DEFAULT_VALUES = {
    password: "",
    username: "",
};
export default function useLoginLogic() {
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

    return { values, handleInputChange, handleSubmit };
}
