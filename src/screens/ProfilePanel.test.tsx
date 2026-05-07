/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProfilePanel } from "./ProfilePanel";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockToggleProfile = vi.fn();
const mockUpdateProfile = vi.fn();
const mockUpdateSettings = vi.fn();
const mockNavigateTo = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "leads",
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
    profileOpen: true,
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
  updateProfile: mockUpdateProfile,
  setSearchQuery: vi.fn(),
  setStatusFilter: vi.fn(),
  setSourceFilter: vi.fn(),
  toggleProfile: mockToggleProfile,
  markNotificationRead: vi.fn(),
  retryStorage: vi.fn(),
  resetStorage: vi.fn(),
  dismissStorageError: vi.fn(),
};

function renderWithContext(state: AppState) {
  return render(
    <AppContext.Provider value={{ state, actions: mockActions }}>
      <ProfilePanel />
    </AppContext.Provider>
  );
}

describe("ProfilePanel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.URL.createObjectURL = vi.fn(() => "blob:mock-avatar-url");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders profile panel with user name", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Elias Vance")).toBeInTheDocument();
  });

  it("closes profile panel on close button click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByLabelText("Close Profile"));
    expect(mockToggleProfile).toHaveBeenCalledTimes(1);
  });

  it("displays user status badge", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("changes timezone", () => {
    renderWithContext(createMockState());
    const select = screen.getByDisplayValue("Auto-detect (Current: PST)") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "utc" } });
    // Save is not explicit in ProfilePanel, so we check the select changed
    expect(select.value).toBe("utc");
  });

  it("toggles critical alerts via checkbox", () => {
    renderWithContext(createMockState());
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ criticalAlerts: false }));
  });

  it("toggles daily summary via checkbox", () => {
    renderWithContext(createMockState());
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ dailySummary: true }));
  });

  it("toggles maintenance reminders via checkbox", () => {
    renderWithContext(createMockState());
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[2]);
    expect(mockUpdateSettings).toHaveBeenCalledWith(expect.objectContaining({ criticalZoneAlerts: false }));
  });

  it("navigates to settings on help link click", () => {
    renderWithContext(createMockState());
    const helpLink = screen.getByText("Help & Documentation");
    fireEvent.click(helpLink);
    expect(mockNavigateTo).toHaveBeenCalledWith("settings");
  });

  it("navigates to settings on security link click", () => {
    renderWithContext(createMockState());
    const securityLink = screen.getByText("Security Settings");
    fireEvent.click(securityLink);
    expect(mockNavigateTo).toHaveBeenCalledWith("settings");
  });

  it("signs out and navigates to empty", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Sign Out"));
    expect(mockToggleProfile).toHaveBeenCalledTimes(1);
    expect(mockNavigateTo).toHaveBeenCalledWith("empty");
  });

  it("calls updateProfile when timezone changes", () => {
    renderWithContext(createMockState());
    const select = screen.getByDisplayValue("Auto-detect (Current: PST)") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "utc" } });
    expect(mockUpdateProfile).toHaveBeenCalledWith(expect.objectContaining({ timezone: "utc" }));
  });

  it("calls updateProfile when avatar changes", () => {
    renderWithContext(createMockState());
    const fileInput = screen.getByLabelText("Change photo")?.querySelector("input[type='file']") as HTMLInputElement;
    const file = new File(["dummy"], "avatar.png", { type: "image/png" });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(mockUpdateProfile).toHaveBeenCalledTimes(1);
  });
});
