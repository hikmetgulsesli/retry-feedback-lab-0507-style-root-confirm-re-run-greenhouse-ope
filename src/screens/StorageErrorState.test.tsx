/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StorageErrorState } from "./StorageErrorState";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockRetryStorage = vi.fn();
const mockResetStorage = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "storage-error",
    previousScreen: "leads",
    leads: [],
    settings: {
      density: "comfortable",
      currency: "USD",
      criticalAlerts: true,
      dailySummary: false,
      timezone: "auto",
      criticalZoneAlerts: true,
    },
    profile: {
      firstName: "Elias",
      lastName: "Vance",
      title: "Lead Agronomist",
      sector: "Sector 4",
      email: "elias.vance@ecogrowth.ops",
      avatarUrl: "https://example.com/avatar.jpg",
      status: "active",
    },
    notifications: [],
    searchQuery: "",
    statusFilter: "",
    sourceFilter: "",
    profileOpen: false,
    storageError: { code: "ERR_READ_FAILED", message: "Failed to read local cache data" },
    editingLeadId: null,
    ...overrides,
  };
}

const mockActions: AppActions = {
  navigateTo: vi.fn(),
  goBack: vi.fn(),
  addLead: vi.fn(),
  updateLead: vi.fn(),
  deleteLead: vi.fn(),
  updateSettings: vi.fn(),
  updateProfile: vi.fn(),
  setSearchQuery: vi.fn(),
  setStatusFilter: vi.fn(),
  setSourceFilter: vi.fn(),
  toggleProfile: vi.fn(),
  markNotificationRead: vi.fn(),
  retryStorage: mockRetryStorage,
  resetStorage: mockResetStorage,
  dismissStorageError: vi.fn(),
};

function renderWithContext(state: AppState) {
  return render(
    <AppContext.Provider value={{ state, actions: mockActions }}>
      <StorageErrorState />
    </AppContext.Provider>
  );
}

describe("StorageErrorState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders error title and description", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Local Storage Error")).toBeInTheDocument();
    expect(screen.getByText(/critical failure attempting to read local cache data/i)).toBeInTheDocument();
  });

  it("calls retryStorage on retry button click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Retry Connection"));
    expect(mockRetryStorage).toHaveBeenCalledTimes(1);
  });

  it("calls resetStorage on reset button click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Reset Local Data"));
    expect(mockResetStorage).toHaveBeenCalledTimes(1);
  });

  it("expands error details accordion", () => {
    renderWithContext(createMockState());
    expect(screen.queryByText(/Failed to read local cache data/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/Error Details/i));
    expect(screen.getByText(/Failed to read local cache data/)).toBeInTheDocument();
    expect(screen.getByText(/Code: ERR_READ_FAILED/)).toBeInTheDocument();
  });

  it("collapses error details accordion on second click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText(/Error Details/i));
    expect(screen.getByText(/Failed to read local cache data/)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Error Details/i));
    expect(screen.queryByText(/Failed to read local cache data/)).not.toBeInTheDocument();
  });

  it("displays unknown error when storageError is generic", () => {
    renderWithContext(createMockState({ storageError: null }));
    fireEvent.click(screen.getByText(/Error Details/i));
    expect(screen.getByText(/Unknown error/)).toBeInTheDocument();
    expect(screen.getByText(/Code: UNKNOWN/)).toBeInTheDocument();
  });

  it("has contact support link", () => {
    renderWithContext(createMockState());
    const link = screen.getByText("Contact IT Support").closest("a") as HTMLAnchorElement;
    expect(link.href).toBe("mailto:support@ecogrowth.ops");
  });
});
