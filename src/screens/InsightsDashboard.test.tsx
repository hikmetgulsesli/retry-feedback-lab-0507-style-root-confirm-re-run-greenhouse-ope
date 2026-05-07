/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InsightsDashboard } from "./InsightsDashboard";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockNavigateTo = vi.fn();
const mockSetSearchQuery = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "insights",
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
        status: "won",
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
        status: "lost",
        nextActionDate: "2024-06-18",
        notes: "Met at Midwest Ag Expo.",
        createdAt: "2024-01-04T00:00:00.000Z",
        updatedAt: "2024-01-04T00:00:00.000Z",
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
      <InsightsDashboard />
    </AppContext.Provider>
  );
}

describe("InsightsDashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders insights dashboard title", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Insights Dashboard")).toBeInTheDocument();
  });

  it("displays correct total leads count", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("displays correct won / lost ratio", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("/ 1")).toBeInTheDocument();
  });

  it("displays correct conversion rate", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("25.0%")).toBeInTheDocument();
  });

  it("displays correct pipeline value", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("$58k")).toBeInTheDocument();
  });

  it("changes period filter", () => {
    renderWithContext(createMockState());
    const select = screen.getByRole("combobox") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "quarter" } });
    expect(select.value).toBe("quarter");
  });

  it("navigates to pipeline on view all activity click", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("View All Activity"));
    expect(mockNavigateTo).toHaveBeenCalledWith("pipeline");
  });

  it("updates search query", () => {
    renderWithContext(createMockState());
    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "agri" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("agri");
  });

  it("shows 0.0% conversion when no leads", () => {
    renderWithContext(createMockState({ leads: [] }));
    expect(screen.getByText("0.0%")).toBeInTheDocument();
  });

  it("shows $0k pipeline value when all leads are won or lost", () => {
    renderWithContext(createMockState({
      leads: [
        {
          id: "lead-1",
          firstName: "A",
          lastName: "B",
          company: "Corp",
          email: "a@corp.com",
          phone: "(555) 000-0000",
          source: "website",
          estimatedValue: 50000,
          status: "won",
          nextActionDate: "2024-06-01",
          notes: "",
          createdAt: "2024-01-01T00:00:00.000Z",
          updatedAt: "2024-01-01T00:00:00.000Z",
        },
      ],
    }));
    expect(screen.getByText("$0k")).toBeInTheDocument();
  });
});
