// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import type { Lead, LeadStatus } from "../types/domain";

interface PipelineBoardProps {}

const columns: LeadStatus[] = ["new", "contacted", "qualified", "proposal", "negotiating", "won", "lost"];

const columnMeta: Record<LeadStatus, { label: string; countColor: string; borderAccent?: string }> = {
  new: { label: "New", countColor: "bg-primary-fixed text-on-primary-fixed" },
  contacted: { label: "Contacted", countColor: "bg-secondary-fixed text-on-secondary-fixed" },
  qualified: { label: "Qualified", countColor: "bg-[#dcfce7] text-[#166534]" },
  proposal: { label: "Proposal", countColor: "bg-primary-fixed text-on-primary-fixed" },
  negotiating: { label: "Negotiating", countColor: "bg-tertiary-fixed text-on-tertiary-fixed", borderAccent: "border-l-4 border-l-tertiary-container" },
  won: { label: "Won", countColor: "bg-green-100 text-[#16a34a]" },
  lost: { label: "Lost", countColor: "bg-error-container text-on-error-container" },
};

function initials(lead: Lead): string {
  return `${lead.firstName.charAt(0)}${lead.lastName.charAt(0)}`.toUpperCase();
}

export function PipelineBoard(props: PipelineBoardProps) {
  const { state, actions } = useAppContext();

  const grouped = useMemo(() => {
    const map: Record<LeadStatus, Lead[]> = {
      new: [], contacted: [], qualified: [], proposal: [], negotiating: [], won: [], lost: [],
    };
    for (const lead of state.leads) {
      map[lead.status].push(lead);
    }
    return map;
  }, [state.leads]);

  const totals = useMemo(() => {
    const map: Record<LeadStatus, number> = {
      new: 0, contacted: 0, qualified: 0, proposal: 0, negotiating: 0, won: 0, lost: 0,
    };
    for (const lead of state.leads) {
      map[lead.status] += lead.estimatedValue;
    }
    return map;
  }, [state.leads]);

  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-screen w-64 bg-surface border-r border-outline-variant fixed left-0 top-0">
      <div className="px-lg py-xl">
      <div className="font-h3 text-h3 text-primary mb-1">EcoGrowth Ops</div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 flex flex-col gap-sm px-4">
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "leads" || state.screen === "empty" ? "text-primary bg-secondary-container scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("leads")}
        disabled={state.screen === "leads" || state.screen === "empty"}
      >
      <span className="material-symbols-outlined" aria-hidden="true">person_search</span>
                      Leads
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "pipeline" ? "text-primary bg-secondary-container scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("pipeline")}
        disabled={state.screen === "pipeline"}
      >
      <span className="material-symbols-outlined" aria-hidden="true">view_kanban</span>
                      Pipeline
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "insights" ? "text-primary bg-secondary-container scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("insights")}
        disabled={state.screen === "insights"}
      >
      <span className="material-symbols-outlined" aria-hidden="true">monitoring</span>
                      Insights
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "settings" ? "text-primary bg-secondary-container scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("settings")}
        disabled={state.screen === "settings"}
      >
      <span className="material-symbols-outlined" aria-hidden="true">settings</span>
                      Settings
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full bg-surface border-b border-outline-variant sticky top-0 z-10">
      <div className="font-h2 text-h2 text-primary font-bold">Greenhouse Console</div>
      <div className="flex items-center gap-lg">
      <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-lg">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden="true">search</span>
      <input
        className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:ring-0"
        placeholder="Search..."
        type="text"
        value={state.searchQuery}
        onChange={(e) => actions.setSearchQuery(e.target.value)}
      />
      </div>
      <div className="flex items-center gap-md text-on-surface-variant">
      <button
        className="hover:text-primary transition-opacity p-2 min-h-touch-target min-w-touch-target flex items-center justify-center rounded-full"
        onClick={() => actions.navigateTo("storage-error")}
        aria-label="Notifications"
      >
      <span className="material-symbols-outlined" aria-hidden="true">notifications</span>
      </button>
      <button
        className="hover:text-primary transition-opacity p-2 min-h-touch-target min-w-touch-target flex items-center justify-center rounded-full"
        type="button"
        onClick={() => actions.navigateTo("settings")}
        aria-label="Help"
      >
      <span className="material-symbols-outlined" aria-hidden="true">help_outline</span>
      </button>
      <button onClick={actions.toggleProfile} className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden cursor-pointer" aria-label="Open profile panel">
      <img alt="Manager Profile" className="w-full h-full object-cover" src={state.profile.avatarUrl} />
      </button>
      </div>
      </div>
      </header>
      {/* Kanban Canvas */}
      <main className="flex-1 p-gutter overflow-x-auto bg-background">
      {/* Page Header */}
      <div className="mb-lg flex justify-between items-end">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Pipeline Overview</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Track and manage prospective zone integrations.</p>
      </div>
      <button
        className="bg-primary-container text-on-primary min-h-touch-target px-md rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-primary transition-colors cursor-pointer"
        onClick={() => actions.navigateTo("create-lead")}
      >
      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">add</span>
                          New Lead
                      </button>
      </div>
      {/* Kanban Board */}
      <div className="flex gap-gutter h-[calc(100vh-200px)] min-w-max pb-lg">
      {columns.map((status) => {
        const meta = columnMeta[status];
        const leads = grouped[status];
        return (
          <div key={status} className="w-80 flex flex-col bg-surface-container-low rounded-xl border border-surface-variant overflow-hidden">
          <div className="p-4 border-b border-surface-variant bg-surface">
          <div className="flex justify-between items-center mb-2">
          <h3 className="font-h3 text-h3 text-on-surface">{meta.label}</h3>
          <span className={`${meta.countColor} px-2 py-1 rounded-full font-label-sm text-label-sm`}>{leads.length}</span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">Est. ${totals[status].toLocaleString()}</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-sm">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className={`bg-surface border border-outline-variant rounded-lg p-4 cursor-pointer hover:border-primary transition-colors ${meta.borderAccent || ""}`}
              onClick={() => actions.navigateTo("edit-lead", lead.id)}
            >
            <div className="flex justify-between items-start mb-3">
            <h4 className="font-label-md text-label-md text-on-surface">{lead.company}</h4>
            <button
              className="text-outline hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); actions.navigateTo("edit-lead", lead.id); }}
              aria-label="Edit"
            >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">more_horiz</span>
            </button>
            </div>
            <div className="font-h3 text-h3 text-on-surface mb-3">${lead.estimatedValue.toLocaleString()}</div>
            <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant">{initials(lead)}</div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{lead.firstName} {lead.lastName.charAt(0)}.</span>
            </div>
            </div>
          ))}
          </div>
          </div>
        );
      })}
      {/* Add Column Button */}
      <button
        className="w-80 flex flex-col bg-surface-container-lowest border border-dashed border-outline-variant rounded-xl items-center justify-center hover:bg-surface-container-low transition-colors text-on-surface-variant cursor-pointer"
        onClick={() => actions.navigateTo("create-lead")}
      >
      <span className="material-symbols-outlined mb-2 text-[32px]" aria-hidden="true">add_circle</span>
      <span className="font-label-md text-label-md">Add Status</span>
      </button>
      </div>
      </main>
      </div>
    </>
  );
}
