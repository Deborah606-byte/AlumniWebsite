import {
  postApiRequest,
  getApiRequest,
  putApiRequest,
  deleteApiRequest,
} from "./index";

const addEventUrl = "events/create";
const getEventsUrl = "events/all";
const updateEventUrl = (id) => `events/update/${id}`;
const deleteEventUrl = (id) => `events/delete/${id}`;

export const fetchEventsApiRequest = async () => getApiRequest(getEventsUrl);
export const deleteEventApiRequest = async (id) =>
  deleteApiRequest(deleteEventUrl(id));

export const addEventApiRequest = async (data) =>
  postApiRequest({ ...data, url: addEventUrl });

export const updateEventApiRequest = async (data) =>
  putApiRequest({ ...data, url: updateEventUrl(data.values._id) });
