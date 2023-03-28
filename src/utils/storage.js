export function setStorage(name, data) {
  try {
    return localStorage.setItem(name, data);
  } catch (ex) {}
}

export function removeStorage(name) {
  try {
    return localStorage.removeItem(name);
  } catch (ex) {}
}
