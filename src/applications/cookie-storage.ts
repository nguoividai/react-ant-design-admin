import Cookies from "js-cookie";

class CookieStorage {
  // Returns the number of key/value pairs
  static get length(): Promise<number> {
    return new Promise((resolve) => {
      const allCookies = Cookies.get();
      resolve(Object.keys(allCookies).length);
    });
  }

  // Removes all key/value pairs
  static clear(): Promise<void> {
    return new Promise((resolve) => {
      const allCookies = Cookies.get();
      for (const key in allCookies) {
        Cookies.remove(key);
      }
      resolve();
    });
  }

  // Returns the current value associated with the given key, or null if not exists
  static getItem(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      const value = Cookies.get(key);
      resolve(value ?? null);
    });
  }

  // Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs
  static key(index: number): Promise<string | null> {
    return new Promise((resolve) => {
      const allCookies = Cookies.get();
      const keys = Object.keys(allCookies);
      if (index >= 0 && index < keys.length) {
        resolve(keys[index]);
      } else {
        resolve(null);
      }
    });
  }

  // Removes the key/value pair with the given key, if it exists
  static removeItem(key: string): Promise<void> {
    return new Promise((resolve) => {
      Cookies.remove(key);
      resolve();
    });
  }

  // Sets the value of the pair identified by key to value, creating a new key/value pair if none existed
  static setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        Cookies.set(key, value);
        resolve();
      } catch {
        reject(
          new DOMException("QuotaExceededError", "The quota has been exceeded")
        );
      }
    });
  }
}

export default CookieStorage;
