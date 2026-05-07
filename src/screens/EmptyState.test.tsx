/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EmptyState } from "./EmptyState";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockNavigateTo = vi.fn();
const mockSetSearchQuery = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "empty",
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
    storageError: null,
    editingLeadId: null,
    ...overrides,
  };
}

const mockActions: AppActions = {
  navigateTo: mockNavigateTo,
  goBack: vi.fn(),
  addLead: vi.fn(),
  updateLead: vi.fn(),
  deleteLead: vi.fn(),
  updateSettings: vi.fn(),
  updateProfile: vi.fn(),
  setSearchQuery: mockSetSearchQuery,
  setStatusFilter: vi.fn(),
  setSourceFilter: vi.fn(),
  toggleProfile: vi.fn(),
  markNotificationRead: vi.fn(),
  retryStorage: vi.fn(),
  resetStorage: vi.fn(),
  dismissStorageError: vi.fn(),
};

function renderWithContext(state: AppState) {
  return render(
    <AppContext.Provider value={{ state, actions: mockActions }}>
      <EmptyState />
    </AppContext.Provider>
  );
}

describe("EmptyState", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders empty state message", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("No leads yet")).toBeInTheDocument();
    expect(screen.getByText(/Your lead pipeline is currently empty/i)).toBeInTheDocument();
  });

  it("navigates to create lead on Create Lead click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Create Lead"));
    expect(mockNavigateTo).toHaveBeenCalledWith("create-lead");
  });

  it("navigates via sidebar buttons", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Pipeline"));
    expect(mockNavigateTo).toHaveBeenCalledWith("pipeline");
    fireEvent.click(screen.getByText("Insights"));
    expect(mockNavigateTo).toHaveBeenCalledWith("insights");
    fireEvent.click(screen.getByText("Settings"));
    expect(mockNavigateTo).toHaveBeenCalledWith("settings");
  });

  it("updates search query on input change", () => {
    renderWithContext(createMockState());
    const input = screen.getByPlaceholderText("Search leads...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test query" } });
    expect(input.value).toBe("test query");
  });

  it("submits search on Enter key", () => {
    renderWithContext(createMockState());
    const input = screen.getByPlaceholderText("Search leads...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "agri" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("agri");
    expect(mockNavigateTo).toHaveBeenCalledWith("leads");
  });

  it("toggles profile on avatar click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByAltText("Manager Profile"));
    expect(mockNavigateTo).not.toHaveBeenCalledWith("profile");
  });
});
