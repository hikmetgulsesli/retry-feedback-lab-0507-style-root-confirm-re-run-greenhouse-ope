/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SettingsScreen } from "./SettingsScreen";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockUpdateSettings = vi.fn();
const mockResetStorage = vi.fn();
const mockNavigateTo = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "settings",
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
  updateSettings: mockUpdateSettings,
  updateProfile: vi.fn(),
  setSearchQuery: vi.fn(),
  setStatusFilter: vi.fn(),
  setSourceFilter: vi.fn(),
  toggleProfile: vi.fn(),
  markNotificationRead: vi.fn(),
  retryStorage: vi.fn(),
  resetStorage: mockResetStorage,
  dismissStorageError: vi.fn(),
};

function renderWithContext(state: AppState) {
  return render(
    <AppContext.Provider value={{ state, actions: mockActions }}>
      <SettingsScreen />
    </AppContext.Provider>
  );
}

describe("SettingsScreen", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders system settings title", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("System Settings")).toBeInTheDocument();
  });

  it("changes density setting", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByLabelText("Compact"));
    fireEvent.click(screen.getByText("Save Changes"));
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ density: "compact" }));
  });

  it("changes currency setting", () => {
    renderWithContext(createMockState());
    const select = screen.getByLabelText("Preferred Currency") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "EUR" } });
    fireEvent.click(screen.getByText("Save Changes"));
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ currency: "EUR" }));
  });

  it("toggles critical zone alerts", () => {
    renderWithContext(createMockState());
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByText("Save Changes"));
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ criticalZoneAlerts: false }));
  });

  it("toggles daily summary", () => {
    renderWithContext(createMockState());
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);
    fireEvent.click(screen.getByText("Save Changes"));
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ dailySummary: true }));
  });

  it("calls resetStorage on clear data click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Clear Data"));
    expect(mockResetStorage).toHaveBeenCalledTimes(1);
  });

  it("resets draft on cancel click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByLabelText("Compact"));
    fireEvent.click(screen.getByText("Cancel"));
    fireEvent.click(screen.getByText("Save Changes"));
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ density: "comfortable" }));
  });

  it("navigates via sidebar", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Leads"));
    expect(mockNavigateTo).toHaveBeenCalledWith("leads");
    fireEvent.click(screen.getByText("Pipeline"));
    expect(mockNavigateTo).toHaveBeenCalledWith("pipeline");
  });
});
