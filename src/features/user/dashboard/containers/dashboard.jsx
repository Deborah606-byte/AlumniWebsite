import Header from "../components/header";
import AddEvent from "./add-event";
import DeleteEvent from "./delete-event";
import Events from "./events";
import UpdateEvent from "./update-event";
import UpdateProfile from "../../profile/containers/update-profile";
import Logout from "../../../auth/containers/logout";
import { Modal } from "../../index/imports";
import useDashboardLogic, { MODAL_COMPONENTS } from "../logic-hooks/dashboard";

export default function DashboardComponent() {
  const { state, handlers } = useDashboardLogic();
  const { openModal, closeModal, setEvent } = handlers;
  const {
    isModalOpen,
    isAddComponent,
    isDeleteComponent,
    isEditComponent,
    selectedEvent,
  } = state;

  return (
    <>
      <Header openAddEvent={() => openModal(MODAL_COMPONENTS.add)} />
      <Events setEvent={setEvent} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isAddComponent && <AddEvent onClose={closeModal} />}
        {isEditComponent && (
          <UpdateEvent event={selectedEvent} onClose={closeModal} />
        )}
        {isDeleteComponent && (
          <DeleteEvent event={selectedEvent} onClose={closeModal} />
        )}
      </Modal>

      {/* <UpdateProfile /> */}
      {/* <Logout /> */}
    </>
  );
}
