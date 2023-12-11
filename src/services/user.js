import { postApiRequest } from "./index";

// USER URLs
const loginUrl = "users/login";
const logoutUrl = "";
const signupUrl = "users/signup";
const updateUserUrl = "";
const deleteUserUrl = "";

export const loginApiRequest = async (data) =>
  postApiRequest({ ...data, url: loginUrl });

export const signupApiRequest = async (data) =>
  postApiRequest({ ...data, url: signupUrl });
