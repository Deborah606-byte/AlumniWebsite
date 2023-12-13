import axios from "axios";

export async function sendGetRequest(payload) {
  const { url, token } = payload;
  return await axios.get(url, { headers: { Authorization: token } });
}

export async function sendPostRequest(payload) {
  const { url, values, token } = payload;
  return await axios.post(url, values, { headers: { Authorization: token } });
}

export async function sendPutRequest(payload) {
  const { url, values, token } = payload;
  return await axios.put(url, values, { headers: { Authorization: token } });
}
