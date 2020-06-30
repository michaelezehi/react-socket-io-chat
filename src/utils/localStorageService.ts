import { debounce } from "lodash";

export const setStorage = (
  key: string,
  value: string
): { error?: string } | void => {
  if (!key || !value) {
    return { error: "Failed to store value.. Invalid key or value." };
  }
  localStorage.setItem(key, value);
};

export const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const updateStorage = (
  key: string,
  value: string
): { error?: string } | void => {
  if (!key || !value) {
    return { error: "Failed to store value. Invalid key or value." };
  }
  localStorage.setItem(key, value);
};

export const deleteStorage = (key: string): { error?: string } | void => {
  if (!key) {
    return { error: "Delete from localStorage failed. Invalid key." };
  }
  localStorage.removeItem(key);
};

export const clearAll = (): void => localStorage.clear();

export const hasStoredItems = (): boolean => localStorage.length > 0;

export const isLocalStorageSupported = (): boolean => !!window.localStorage;

export const storeToLocalStorageDebounced = debounce(
  (key: string, value: string): void => {
    if (isLocalStorageSupported()) {
      if (getStorage(key)) {
        updateStorage(key, value);
      } else {
        setStorage(key, value);
      }
    }
  },
  1500,
  { leading: false }
);

export const storeToLocalStorage = (key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (getStorage(key)) {
      updateStorage(key, value);
    } else {
      setStorage(key, value);
    }
  }
};
