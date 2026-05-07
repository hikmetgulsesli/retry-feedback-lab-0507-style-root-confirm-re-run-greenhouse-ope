/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { LeadCreateeditForm } from "./LeadCreateeditForm";
import { AppContext } from "../contexts/AppContext";
import type { AppState, AppActions } from "../hooks/useAppState";

const mockNavigateTo = vi.fn();
const mockGoBack = vi.fn();
const mockAddLead = vi.fn();
const mockUpdateLead = vi.fn();

function createMockState(overrides: Partial<AppState> = {}): AppState {
  return {
    screen: "create-lead",
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
  goBack: mockGoBack,
  addLead: mockAddLead,
  updateLead: mockUpdateLead,
  deleteLead: vi.fn(),
  updateSettings: vi.fn(),
  updateProfile: vi.fn(),
  setSearchQuery: vi.fn(),
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
      <LeadCreateeditForm />
    </AppContext.Provider>
  );
}

describe("LeadCreateeditForm - Create Mode", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders create form with correct title", () => {
    renderWithContext(createMockState());
    expect(screen.getByText("Create New Lead")).toBeInTheDocument();
    expect(screen.getByText("Save Lead")).toBeInTheDocument();
  });

  it("fills out form and creates a lead", () => {
    renderWithContext(createMockState());
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Sarah" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Jenkins" },
    });
    fireEvent.change(screen.getByLabelText(/Company/i), {
      target: { value: "AgriTech Solutions" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "sarah.j@agritech.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "(555) 101-2233" },
    });
    fireEvent.change(screen.getByLabelText(/Lead Source/i), {
      target: { value: "trade_show" },
    });
    fireEvent.change(screen.getByLabelText(/Estimated Value/i), {
      target: { value: "45000" },
    });
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: "new" },
    });
    fireEvent.change(screen.getByLabelText(/Next Action Date/i), {
      target: { value: "2024-06-15" },
    });
    fireEvent.change(screen.getByLabelText(/Next Action \/ Notes/i), {
      target: { value: "Interested in full automation suite." },
    });

    fireEvent.click(screen.getByText("Save Lead"));

    expect(mockAddLead).toHaveBeenCalledTimes(1);
    const saved = mockAddLead.mock.calls[0][0];
    expect(saved.firstName).toBe("Sarah");
    expect(saved.lastName).toBe("Jenkins");
    expect(saved.company).toBe("AgriTech Solutions");
    expect(saved.email).toBe("sarah.j@agritech.com");
    expect(saved.source).toBe("trade_show");
    expect(saved.estimatedValue).toBe(45000);
    expect(saved.status).toBe("new");

    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("shows validation errors for empty required fields", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Save Lead"));

    expect(mockAddLead).not.toHaveBeenCalled();
    expect(screen.getByText("First name is required")).toBeInTheDocument();
    expect(screen.getByText("Last name is required")).toBeInTheDocument();
    expect(screen.getByText("Company is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("shows validation error for invalid email", () => {
    renderWithContext(createMockState());
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Sarah" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Jenkins" },
    });
    fireEvent.change(screen.getByLabelText(/Company/i), {
      target: { value: "AgriTech" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "not-an-email" },
    });
    fireEvent.click(screen.getByText("Save Lead"));

    expect(mockAddLead).not.toHaveBeenCalled();
    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
  });

  it("clears a field error when user types in the field", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Save Lead"));
    expect(screen.getByText("First name is required")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Sarah" },
    });
    expect(screen.queryByText("First name is required")).not.toBeInTheDocument();
  });

  it("cancels and goes back", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("goes back via arrow button", () => {
    renderWithContext(createMockState());
    fireEvent.click(screen.getByText("arrow_back"));
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("includes all lead source options including event", () => {
    renderWithContext(createMockState());
    const select = screen.getByLabelText(/Lead Source/i) as HTMLSelectElement;
    const options = Array.from(select.options).map((o) => o.value);
    expect(options).toContain("website");
    expect(options).toContain("referral");
    expect(options).toContain("trade_show");
    expect(options).toContain("cold_call");
    expect(options).toContain("event");
  });
});

describe("LeadCreateeditForm - Edit Mode", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const existingLead = {
    id: "lead-123",
    firstName: "Marcus",
    lastName: "Rodriguez",
    company: "Valley Park Farms",
    email: "m.rodriguez@valleypark.io",
    phone: "(555) 204-5566",
    source: "website" as const,
    estimatedValue: 12500,
    status: "contacted" as const,
    nextActionDate: "2024-06-10",
    notes: "Requested sensor grid pricing.",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  };

  it("renders edit form with existing data pre-filled", () => {
    renderWithContext(
      createMockState({
        screen: "edit-lead",
        editingLeadId: "lead-123",
        leads: [existingLead],
      })
    );

    expect(screen.getByText("Edit Lead")).toBeInTheDocument();
    expect(screen.getByText("Save Changes")).toBeInTheDocument();

    const firstNameInput = screen.getByLabelText(/First Name/i) as HTMLInputElement;
    expect(firstNameInput.value).toBe("Marcus");

    const companyInput = screen.getByLabelText(/Company/i) as HTMLInputElement;
    expect(companyInput.value).toBe("Valley Park Farms");
  });

  it("saves changes to existing lead", () => {
    renderWithContext(
      createMockState({
        screen: "edit-lead",
        editingLeadId: "lead-123",
        leads: [existingLead],
      })
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Mark" },
    });
    fireEvent.click(screen.getByText("Save Changes"));

    expect(mockUpdateLead).toHaveBeenCalledTimes(1);
    expect(mockUpdateLead).toHaveBeenCalledWith(
      "lead-123",
      expect.objectContaining({ firstName: "Mark" })
    );
  });
});
