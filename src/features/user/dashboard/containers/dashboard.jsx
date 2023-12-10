import Header from "../components/header";
import AddEvent from "./add-event";
import DeleteEvent from "./delete-event";
import Events from "./events";
import UpdateEvent from "./update-event";
import UpdateProfile from "../../profile/containers/update-profile";
import Logout from "../../../auth/containers/logout";

export default function DashboardComponent() {
  return (
    <>
      <Header />
      <Events />
      <AddEvent />
      <UpdateEvent />
      <DeleteEvent />
      <UpdateProfile />
      <Logout />
    </>
  );
}
