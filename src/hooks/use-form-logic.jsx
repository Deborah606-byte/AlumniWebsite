import { useState } from "react";

export default function useFormLogic(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = { ...values, [name]: value };
    return setValues(updatedValues);
  };

  return { values, handleInputChange };
}
