export const useSessionStorage = (key: string): boolean => {
  const storedValue = sessionStorage.getItem(key);
  if (!storedValue) {
    return false;
  } else {
    return true;
  }
};
