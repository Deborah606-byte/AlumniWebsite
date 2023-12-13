import { sendGetRequest, sendPostRequest } from "../libs/axios";

const baseUrl = "http://localhost:8102/api/";

export async function getApiRequest(endpoint, token = "") {
  const url = baseUrl + endpoint;
  try {
    const { data } = await sendGetRequest({ url, token });
    return { error: null, data };
  } catch (err) {
    const error = err.response?.data?.message ?? err.message;
    return { error, data: null };
  }
}

export async function postApiRequest(payload) {
  const url = baseUrl + payload.url;
  const token = payload.token ?? "";

  try {
    const { data } = await sendPostRequest({ ...payload, url, token });
    return { error: null, data };
  } catch (err) {
    const error = err.response?.data?.message ?? err.message;
    return { error, data: null };
  }
}
