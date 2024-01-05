class LocalStorageService {
  setItem (key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem (key: string): string {
    return localStorage.getItem(key);
  }

  removeItem (key: string): void {
    localStorage.removeItem(key);
  }
};

export const localStorageService = new LocalStorageService();
