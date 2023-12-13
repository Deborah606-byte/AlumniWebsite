import { useState } from "react";
import {
  useForm,
  loadUserFromLocalStorage,
  addEventApiRequest,
} from "../../index/imports";
const DEFAULT_VALUES = {
  eventCategory: "",
  eventName: "",
  eventSpeaker: "",
  eventSpeaker_aux: "",
  eventDescription: "",
  eventAgenda: "",
  eventDate: "",
  eventTime: "",
  eventDuration: 0,
  eventLocation: "",
};
export default function useAddEventLogic(methods) {
  const { setEvents, closeModal } = methods;
  const { token, user } = loadUserFromLocalStorage();
  const { values, handleInputChange } = useForm(DEFAULT_VALUES);
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
      { userId: user._id, eventSpeaker: [] }
    );
    const payload = { token, values: formData };
    const { error } = await addEventApiRequest(payload);

    setIsLoading(false);
    if (error) return alert(`Failed to Add Event \n ${error}`);

    return closeModal;
  };

  return { isLoading, values, handleInputChange, handleSubmit };
}
