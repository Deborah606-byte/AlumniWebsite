import { postApiRequest, getApiRequest } from "./index";

const addEventUrl = "events/create";
const getEventsUrl = "events/all";

export const fetchEventsApiRequest = async () => getApiRequest(getEventsUrl);
export const addEventApiRequest = async (data) =>
  postApiRequest({ ...data, url: addEventUrl });
