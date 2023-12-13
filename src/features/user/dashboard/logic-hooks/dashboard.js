import { useState } from "react";
import { loadUserFromLocalStorage } from "../../index/imports";

export const MODAL_COMPONENTS = {
  add: "ADD_COMPONENT",
  edit: "EDIT_COMPONENT",
  delete: "DELETE_COMPONENT",
};

export default function useDashboardLogic() {
  const [modalComponent, setModalComponent] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const currentUser = loadUserFromLocalStorage();

  console.log({ currentUser });

  const isModalOpen = Boolean(modalComponent);
  const isAddComponent = modalComponent === MODAL_COMPONENTS.add;
  const isEditComponent = modalComponent === MODAL_COMPONENTS.edit;
  const isDeleteComponent = modalComponent === MODAL_COMPONENTS.delete;

  const openModal = (component) => setModalComponent(component);
  const closeModal = () => setModalComponent("");

  const setEvent = (event) => {
    const component =
      typeof event === "string"
        ? MODAL_COMPONENTS.delete
        : MODAL_COMPONENTS.edit;

    setSelectedEvent(event);
    return openModal(component);
  };

  return {
    state: {
      selectedEvent,
      isModalOpen,
      isAddComponent,
      isEditComponent,
      isDeleteComponent,
    },
    handlers: { openModal, closeModal, setEvent },
  };
}
