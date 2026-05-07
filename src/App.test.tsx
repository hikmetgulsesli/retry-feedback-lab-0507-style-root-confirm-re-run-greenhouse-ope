/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("App - Primary Workflow Screens", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure localStorage is clean
    window.localStorage.clear();
  });

  it("renders LeadsDashboard by default when leads exist", () => {
    render(<App />);
    expect(screen.getByText("Leads Dashboard")).toBeInTheDocument();
  });

  it("renders EmptyState when no leads exist", () => {
    window.localStorage.setItem(
      "ecogrowth-ops-state",
      JSON.stringify({
        version: 1,
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
      })
    );
    render(<App />);
    expect(screen.getByText("No leads yet")).toBeInTheDocument();
  });

  it("navigates to create lead form", () => {
    render(<App />);
    fireEvent.click(screen.getByText("New Lead"));
    expect(screen.getByText("Create New Lead")).toBeInTheDocument();
  });

  it("navigates to pipeline board", () => {
    render(<App />);
    const pipelineBtn = screen.getAllByText("Pipeline")[0];
    fireEvent.click(pipelineBtn);
    expect(screen.getByText("Pipeline Overview")).toBeInTheDocument();
  });

  it("navigates to insights dashboard", () => {
    render(<App />);
    const insightsBtn = screen.getAllByText("Insights")[0];
    fireEvent.click(insightsBtn);
    expect(screen.getByText("Insights Dashboard")).toBeInTheDocument();
  });

  it("navigates to settings screen", () => {
    render(<App />);
    const settingsBtn = screen.getAllByText("Settings")[0];
    fireEvent.click(settingsBtn);
    expect(screen.getByText("System Settings")).toBeInTheDocument();
  });

  it("opens profile panel", () => {
    render(<App />);
    const profileImg = screen.getByAltText("Manager Profile");
    fireEvent.click(profileImg);
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Elias Vance")).toBeInTheDocument();
  });

  it("creates a lead end-to-end", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("New Lead"));

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "Test" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "User" },
    });
    fireEvent.change(screen.getByLabelText(/Company/i), {
      target: { value: "Test Corp" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@corp.com" },
    });

    fireEvent.click(screen.getByText("Save Lead"));

    await waitFor(() => {
      expect(screen.queryByText("Create New Lead")).not.toBeInTheDocument();
    });
  });
});
