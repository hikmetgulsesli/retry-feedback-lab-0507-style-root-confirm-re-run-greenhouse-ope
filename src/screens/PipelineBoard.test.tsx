/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PipelineBoard } from "./PipelineBoard";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockNavigateTo = vi.fn();
const mockSetSearchQuery = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "pipeline",
    previousScreen: "leads",
    leads: [
      {
        id: "lead-1",
        firstName: "Sarah",
        lastName: "Jenkins",
        company: "AgriTech Solutions",
        email: "sarah.j@agritech.com",
        phone: "(555) 101-2233",
        source: "trade_show",
        estimatedValue: 45000,
        status: "new",
        nextActionDate: "2024-06-15",
        notes: "Interested in full automation suite.",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
      },
      {
        id: "lead-2",
        firstName: "Marcus",
        lastName: "Rodriguez",
        company: "Valley Park Farms",
        email: "m.rodriguez@valleypark.io",
        phone: "(555) 204-5566",
        source: "website",
        estimatedValue: 12500,
        status: "contacted",
        nextActionDate: "2024-06-10",
        notes: "Requested sensor grid pricing.",
        createdAt: "2024-01-02T00:00:00.000Z",
        updatedAt: "2024-01-02T00:00:00.000Z",
      },
      {
        id: "lead-3",
        firstName: "Elena",
        lastName: "Rivers",
        company: "Global Botanics",
        email: "e.rivers@globalbotanics.com",
        phone: "(555) 789-0123",
        source: "website",
        estimatedValue: 210000,
        status: "negotiating",
        nextActionDate: "2024-06-08",
        notes: "Final contract review.",
        createdAt: "2024-01-03T00:00:00.000Z",
        updatedAt: "2024-01-03T00:00:00.000Z",
      },
    ],
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
      <PipelineBoard />
    </AppContext.Provider>
  );
}

describe("PipelineBoard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders pipeline overview title", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Pipeline Overview")).toBeInTheDocument();
  });

  it("renders all status columns", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByText("Contacted")).toBeInTheDocument();
    expect(screen.getByText("Qualified")).toBeInTheDocument();
    expect(screen.getByText("Proposal")).toBeInTheDocument();
    expect(screen.getByText("Negotiating")).toBeInTheDocument();
    expect(screen.getByText("Won")).toBeInTheDocument();
    expect(screen.getByText("Lost")).toBeInTheDocument();
  });

  it("groups leads by status", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("AgriTech Solutions")).toBeInTheDocument();
    expect(screen.getByText("Valley Park Farms")).toBeInTheDocument();
    expect(screen.getByText("Global Botanics")).toBeInTheDocument();
  });

  it("navigates to create lead on New Lead click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("New Lead"));
    expect(mockNavigateTo).toHaveBeenCalledWith("create-lead");
  });

  it("navigates to edit lead on card click", () => {
    renderWithContext(createMockState());
    const cards = screen.getAllByText("AgriTech Solutions");
    fireEvent.click(cards[0].closest("div") as HTMLElement);
    expect(mockNavigateTo).toHaveBeenCalledWith("edit-lead", "lead-1");
  });

  it("shows correct estimated value totals per column", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Est. $45,000")).toBeInTheDocument();
    expect(screen.getByText("Est. $12,500")).toBeInTheDocument();
    expect(screen.getByText("Est. $210,000")).toBeInTheDocument();
  });

  it("updates search query", () => {
    renderWithContext(createMockState());
    const searchInput = screen.getByPlaceholderText("Search...") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "agri" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("agri");
  });

  it("navigates between screens via sidebar", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getAllByText("Leads")[0]);
    expect(mockNavigateTo).toHaveBeenCalledWith("leads");
    fireEvent.click(screen.getAllByText("Insights")[0]);
    expect(mockNavigateTo).toHaveBeenCalledWith("insights");
    fireEvent.click(screen.getAllByText("Settings")[0]);
    expect(mockNavigateTo).toHaveBeenCalledWith("settings");
  });

  it("renders empty columns with 0 count", () => {
    renderWithContext(createMockState());
    const wonHeader = screen.getByText("Won").closest("div")?.querySelector("span");
    expect(wonHeader).toHaveTextContent("0");
    const lostHeader = screen.getByText("Lost").closest("div")?.querySelector("span");
    expect(lostHeader).toHaveTextContent("0");
  });
});
