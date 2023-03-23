export default function setStorage(name, data) {
  try {
    return localStorage.setItem(name, data);
  } catch (ex) {}
}
