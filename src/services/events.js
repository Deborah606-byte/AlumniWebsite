import { postApiRequest, getApiRequest, putApiRequest } from "./index";

const addEventUrl = "events/create";
const getEventsUrl = "events/all";
const updateventUrl = (id) => `events/update/${id}`;

export const fetchEventsApiRequest = async () => getApiRequest(getEventsUrl);
export const addEventApiRequest = async (data) =>
  postApiRequest({ ...data, url: addEventUrl });

export const updateEventApiRequest = async (data) =>
  putApiRequest({ ...data, url: updateventUrl(data.values._id) });
