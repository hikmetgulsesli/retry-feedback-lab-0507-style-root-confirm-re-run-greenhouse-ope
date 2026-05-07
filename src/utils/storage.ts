const STORAGE_KEY = "ecogrowth-ops-state";
const STORAGE_VERSION = 1;

export interface StorageData {
  version: number;
  leads: import("../types/domain").Lead[];
  settings: import("../types/domain").AppSettings;
  profile: import("../types/domain").UserProfile;
  notifications: import("../types/domain").Notification[];
}

export class StorageError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = "StorageError";
  }
}

export function loadFromStorage(): StorageData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StorageData;
    if (parsed.version !== STORAGE_VERSION) {
      // Migrate or reset
      return null;
    }
    return parsed;
  } catch (e) {
    const code = e instanceof SyntaxError ? "ERR_PARSE_FAILED" : "ERR_READ_FAILED";
    throw new StorageError(
      "Failed to read local cache data",
      code
    );
  }
}

export function saveToStorage(data: StorageData): void {
  try {
    const payload: StorageData = { ...data, version: STORAGE_VERSION };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    throw new StorageError(
      "Failed to write local cache data",
      "ERR_QUOTA_EXCEEDED"
    );
  }
}

export function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    throw new StorageError(
      "Failed to clear local cache data",
      "ERR_CLEAR_FAILED"
    );
  }
}

export function isStorageAvailable(): boolean {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
