/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LeadsDashboard } from "./LeadsDashboard";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockNavigateTo = vi.fn();
const mockSetSearchQuery = vi.fn();
const mockSetStatusFilter = vi.fn();
const mockSetSourceFilter = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "leads",
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
        lastName: "Lutea",
        company: "Botanix Research",
        email: "elena@botanix.net",
        phone: "(555) 307-8899",
        source: "referral",
        estimatedValue: 85200,
        status: "qualified",
        nextActionDate: "2024-06-20",
        notes: "High-value prospect.",
        createdAt: "2024-01-03T00:00:00.000Z",
        updatedAt: "2024-01-03T00:00:00.000Z",
      },
      {
        id: "lead-4",
        firstName: "David",
        lastName: "Chen",
        company: "Apex AgriTech",
        email: "david.c@apexagritech.com",
        phone: "(555) 412-3344",
        source: "trade_show",
        estimatedValue: 45000,
        status: "new",
        nextActionDate: "2024-06-18",
        notes: "Met at Midwest Ag Expo.",
        createdAt: "2024-01-04T00:00:00.000Z",
        updatedAt: "2024-01-04T00:00:00.000Z",
      },
      {
        id: "lead-5",
        firstName: "Michael",
        lastName: "Kowalski",
        company: "SunLight Farms",
        email: "mk@sunlightfarms.co",
        phone: "(555) 678-9012",
        source: "referral",
        estimatedValue: 55000,
        status: "contacted",
        nextActionDate: "2024-06-12",
        notes: "Follow-up call scheduled.",
        createdAt: "2024-01-05T00:00:00.000Z",
        updatedAt: "2024-01-05T00:00:00.000Z",
      },
      {
        id: "lead-6",
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
        createdAt: "2024-01-06T00:00:00.000Z",
        updatedAt: "2024-01-06T00:00:00.000Z",
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
  setStatusFilter: mockSetStatusFilter,
  setSourceFilter: mockSetSourceFilter,
  toggleProfile: vi.fn(),
  markNotificationRead: vi.fn(),
  retryStorage: vi.fn(),
  resetStorage: vi.fn(),
  dismissStorageError: vi.fn(),
};

function renderWithContext(state: AppState) {
  return render(
    <AppContext.Provider value={{ state, actions: mockActions }}>
      <LeadsDashboard />
    </AppContext.Provider>
  );
}

describe("LeadsDashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders leads table with correct data", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Sarah Jenkins")).toBeInTheDocument();
    expect(screen.getByText("AgriTech Solutions")).toBeInTheDocument();
    expect(screen.getByText("Botanix Research")).toBeInTheDocument();
  });

  it("navigates to create lead on New Lead click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("New Lead"));
    expect(mockNavigateTo).toHaveBeenCalledWith("create-lead");
  });

  it("filters by status", () => {
    renderWithContext(createMockState());
    const statusSelect = screen.getAllByRole("combobox")[0];
    fireEvent.change(statusSelect, { target: { value: "new" } });
    expect(mockSetStatusFilter).toHaveBeenCalledWith("new");
  });

  it("filters by source", () => {
    renderWithContext(createMockState());
    const sourceSelect = screen.getAllByRole("combobox")[1];
    fireEvent.change(sourceSelect, { target: { value: "website" } });
    expect(mockSetSourceFilter).toHaveBeenCalledWith("website");
  });

  it("navigates to edit lead on row action", () => {
    renderWithContext(createMockState());
    const editButtons = screen.getAllByLabelText("Edit lead");
    fireEvent.click(editButtons[0]);
    expect(mockNavigateTo).toHaveBeenCalledWith("edit-lead", "lead-1");
  });

  it("paginates through results", () => {
    renderWithContext(createMockState({ leads: Array.from({ length: 12 }, (_, i) => ({
      id: `lead-${i}`,
      firstName: `First${i}`,
      lastName: `Last${i}`,
      company: `Company ${i}`,
      email: `user${i}@corp.com`,
      phone: "(555) 000-0000",
      source: "website" as const,
      estimatedValue: 10000,
      status: "new" as const,
      nextActionDate: "2024-06-01",
      notes: "",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
    })) }));

    expect(screen.getByText("First0 Last0")).toBeInTheDocument();
    const nextPage = screen.getByText("chevron_right").closest("button");
    if (nextPage) fireEvent.click(nextPage);
    expect(screen.queryByText("First0 Last0")).not.toBeInTheDocument();
  });

  it("clears filters on clear button click", () => {
    renderWithContext(createMockState({ statusFilter: "new", sourceFilter: "website", searchQuery: "test" }));
    const clearBtn = screen.getByLabelText("Clear filters");
    fireEvent.click(clearBtn);
    expect(mockSetStatusFilter).toHaveBeenCalledWith("");
    expect(mockSetSourceFilter).toHaveBeenCalledWith("");
    expect(mockSetSearchQuery).toHaveBeenCalledWith("");
  });
});
