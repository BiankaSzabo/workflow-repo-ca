import { describe, it, expect, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage.js";

const storageMock = (() => {
  let store = {};
  return {
    getItem: (key) => {
      if (store[key] !== undefined) {
        return store[key];
      } else {
        return null;
      }
    },
    setItem: (key, value) => {
      store[key] = value;
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

globalThis.localStorage = storageMock;

// Mock localStorage for testing
beforeEach(() => {
  localStorage.clear();
});

describe("getUsername", () => {
  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Bianka" });
    expect(getUsername()).toBe("Bianka");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });
});
