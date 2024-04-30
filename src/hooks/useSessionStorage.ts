// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSessionStorage = (key: string): any | boolean => {
  const storedValue = sessionStorage.getItem(key);
  if (!storedValue) {
    return false;
  } else {
    return storedValue;
  }
};
