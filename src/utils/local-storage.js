const LOCAL_STORE_KEY = "alumi-web";

export const saveUserToLocalStorage = (user) => {
  try {
    const serializedState = JSON.stringify(user);
    localStorage.setItem(LOCAL_STORE_KEY, serializedState);
  } catch (err) {
    console.log(err);
  }
};
export const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORE_KEY);
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const deleteUserFromLocalStorage = () =>
  localStorage.removeItem(LOCAL_STORE_KEY);
