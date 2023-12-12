import { postApiRequest } from "./index";

const addEventUrl = "events/create";

export const addEventApiRequest = async (data) =>
  postApiRequest({ ...data, url: addEventUrl });
