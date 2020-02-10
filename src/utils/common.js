import { USER_DATA_STORAGE } from '../configs';

export function clearStorages() {
  localStorage.removeItem(USER_DATA_STORAGE);
}

export function setUserData(value) {
  localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(value));
}

export function getUserData() {
  const retval = localStorage.getItem(USER_DATA_STORAGE);

  return JSON.parse(retval);
}
