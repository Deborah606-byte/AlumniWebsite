import { useFormLogic } from "../index/imports"

const DEFAULT_VALUES = {
    password: "",
    username: "",
};
export default function useLoginLogic() {
    const { values, handleInputChange } = useFormLogic(DEFAULT_VALUES);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("values", values);
    };

    return { values, handleInputChange, handleSubmit };
}
