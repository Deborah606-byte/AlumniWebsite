import AppFooter from "../../../components/ui/app-footer";
import Modal from "../../../components/ui/modal";
import DashboardBtn from "../../../components/buttons/dashboard-btn";
import Form from "../../../components/form/form";
import SubmitButton from "../../../components/buttons/submit";
import {
  carousel1,
  carousel2,
  carousel3,
  friends,
  sameshun,
  gallery,
  sa1,
  sa2,
  sa3,
  sa4,
  designer,
  manager,
  developer,
  secretary,
  doctor,
  audienceImage,
} from "../../../data/images/images";
import useForm from "../../../hooks/use-form-logic";
import { getUrls } from "../../../data/constants/routes";
import { loadUserFromLocalStorage } from "../../../utils/local-storage";
import {
  addEventApiRequest,
  fetchEventsApiRequest,
  updateEventApiRequest,
} from "../../../services/events";

export { AppFooter, Modal, DashboardBtn, Form, SubmitButton, getUrls };
export { loadUserFromLocalStorage, useForm };
export { addEventApiRequest, fetchEventsApiRequest, updateEventApiRequest };
export {
  carousel1,
  carousel2,
  carousel3,
  friends,
  sameshun,
  gallery,
  sa1,
  sa2,
  sa3,
  sa4,
  designer,
  manager,
  developer,
  secretary,
  doctor,
  audienceImage,
};
