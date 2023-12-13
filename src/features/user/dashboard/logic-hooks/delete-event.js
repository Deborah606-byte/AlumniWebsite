import { useState } from "react";
import { deleteEventApiRequest } from "../../index/imports";

export default function useDeleteEventLogic(setup) {
  const { eventId, onClose: closeModal } = setup;
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const { error } = await deleteEventApiRequest(eventId);

    setIsLoading(false);
    if (error) return alert(`Failed to Delete Event \n ${error}`);

    return closeModal();
  };

  return { isLoading, handleDelete };
}
