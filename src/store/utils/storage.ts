export const setItem = (itemName: string, value: string) =>
  window.localStorage.setItem(itemName, value);
export const getItem = (itemName: string) => window.localStorage.getItem(itemName);
export const removeItem = (itemName: string) =>
  window.localStorage.removeItem(itemName);
