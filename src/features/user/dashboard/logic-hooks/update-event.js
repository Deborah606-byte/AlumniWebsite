import { useState } from "react";
import { useForm, updateEventApiRequest } from "../../index/imports";

export default function usUpdateEventLogic(setup) {
  const { event, closeModal } = setup;
  const { values, handleInputChange } = useForm(getEventValues(event));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const formData = Object.entries(values).reduce(
      (res, current) => {
        const [key, value] = current;

        if (key.includes("eventSpeaker")) {
          res.eventSpeaker.push(value);
          return res;
        }

        res[key] = value;
        return res;
      },
      { eventSpeaker: [] }
    );
    const { error } = await updateEventApiRequest({ values: formData });

    setIsLoading(false);
    if (error) return alert(`Failed to Edit Event \n ${error}`);

    return closeModal();
  };

  return { isLoading, values, handleInputChange, handleSubmit };
}

const getEventValues = (event) => {
  const values = {};
  for (const key in event) {
    let value = event[key];

    if (key === "eventSpeaker") {
      const arr = value;
      value = arr[0];
      if (arr.length > 1) values["eventSpeaker_aux"] = arr[1];
    }

    if (key === "eventDate") value = value.slice(0, 10);

    values[key] = value;
  }

  return values;
};
