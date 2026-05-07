// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import { useAppContext } from "../contexts/AppContext";
import type { Lead, LeadStatus, LeadSource } from "../types/domain";

interface LeadsDashboardProps {}

const statusBadgeClass: Record<LeadStatus, string> = {
  new: "inline-flex items-center px-2 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm",
  contacted: "inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-on-primary-fixed font-label-sm text-label-sm",
  qualified: "inline-flex items-center px-2 py-1 rounded-full bg-[#dcfce7] text-[#166534] font-label-sm text-label-sm",
  proposal: "inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm",
  negotiating: "inline-flex items-center px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm",
  won: "inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-[#16a34a] font-label-sm text-label-sm",
  lost: "inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm",
};

function initials(lead: Lead): string {
  return `${lead.firstName.charAt(0)}${lead.lastName.charAt(0)}`.toUpperCase();
}

function avatarBg(lead: Lead): string {
  const hues = [
    "bg-secondary-container text-on-secondary-container",
    "bg-tertiary-container text-on-tertiary-container",
    "bg-surface-container-highest text-on-surface-variant",
    "bg-primary-fixed text-on-primary-fixed",
    "bg-green-100 text-[#16a34a]",
  ];
  let hash = 0;
  for (let i = 0; i < lead.id.length; i++) hash = lead.id.charCodeAt(i) + ((hash << 5) - hash);
  return hues[Math.abs(hash) % hues.length];
}

export function LeadsDashboard(props: LeadsDashboardProps) {
  const { state, actions } = useAppContext();
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = useMemo(() => {
    let data = state.leads;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      data = data.filter(
        (l) =>
          l.firstName.toLowerCase().includes(q) ||
          l.lastName.toLowerCase().includes(q) ||
          l.company.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q)
      );
    }
    if (state.statusFilter) data = data.filter((l) => l.status === state.statusFilter);
    if (state.sourceFilter) data = data.filter((l) => l.source === state.sourceFilter);
    return data;
  }, [state.leads, state.searchQuery, state.statusFilter, state.sourceFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const [localSearch, setLocalSearch] = useState(state.searchQuery);

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline h-screen w-64 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-lg flex flex-col gap-sm">
      <h2 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim">EcoGrowth Ops</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 px-sm py-md flex flex-col gap-unit">
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "leads" || state.screen === "empty" ? "text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant active:scale-[0.98] duration-150" : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container"}`}
        onClick={() => actions.navigateTo("leads")}
      >
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person_search</span>
                      Leads
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "pipeline" ? "text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant active:scale-[0.98] duration-150" : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container"}`}
        onClick={() => actions.navigateTo("pipeline")}
      >
      <span className="material-symbols-outlined">view_kanban</span>
                      Pipeline
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "insights" ? "text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant active:scale-[0.98] duration-150" : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container"}`}
        onClick={() => actions.navigateTo("insights")}
      >
      <span className="material-symbols-outlined">monitoring</span>
                      Insights
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "settings" ? "text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant active:scale-[0.98] duration-150" : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container"}`}
        onClick={() => actions.navigateTo("settings")}
      >
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </button>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim flex justify-between items-center h-[64px] px-lg w-[calc(100%-16rem)] ml-64 fixed top-0 right-0 z-10 border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-md">
      <h1 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim">Greenhouse Console</h1>
      <div className="relative hidden lg:flex items-center focus-within:ring-2 focus-within:ring-primary rounded-DEFAULT">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant">search</span>
      <input
        className="pl-xl pr-sm py-sm rounded-DEFAULT border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none font-body-sm text-body-sm h-touch-target"
        placeholder="Search..."
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") actions.setSearchQuery(localSearch); }}
      />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button
        className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity w-touch-target h-touch-target flex items-center justify-center rounded-full"
        onClick={() => actions.navigateTo("storage-error")}
        aria-label="Notifications"
      >
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button
        className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity w-touch-target h-touch-target flex items-center justify-center rounded-full"
        aria-label="Help"
      >
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <button onClick={actions.toggleProfile} className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant overflow-hidden cursor-pointer">
      <img alt="Manager Profile" className="w-full h-full object-cover" src={state.profile.avatarUrl} />
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="pt-[88px] pl-[280px] pr-lg pb-lg min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-lg">
      <div>
      <h2 className="font-h1 text-h1 text-on-background">Leads Dashboard</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Manage and track potential client integrations.</p>
      </div>
      <button
        className="bg-primary-container text-on-primary h-touch-target px-md rounded-DEFAULT font-label-md text-label-md flex items-center gap-sm hover:bg-primary transition-colors cursor-pointer"
        onClick={() => actions.navigateTo("create-lead")}
      >
      <span className="material-symbols-outlined">add</span>
                      New Lead
                  </button>
      </div>
      {/* Controls / Filters */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md mb-lg flex flex-wrap gap-md items-center justify-between">
      <div className="flex flex-wrap gap-md items-center">
      <div className="relative">
      <select
        className="appearance-none bg-surface border border-outline-variant rounded-DEFAULT h-touch-target pl-md pr-xl font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none"
        value={state.statusFilter}
        onChange={(e) => { actions.setStatusFilter(e.target.value as LeadStatus | ""); setPage(1); }}
      >
      <option value="">All Statuses</option>
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="qualified">Qualified</option>
      <option value="proposal">Proposal</option>
      <option value="negotiating">Negotiating</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      <div className="relative">
      <select
        className="appearance-none bg-surface border border-outline-variant rounded-DEFAULT h-touch-target pl-md pr-xl font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none"
        value={state.sourceFilter}
        onChange={(e) => { actions.setSourceFilter(e.target.value as LeadSource | ""); setPage(1); }}
      >
      <option value="">All Sources</option>
      <option value="website">Website Form</option>
      <option value="referral">Referral</option>
      <option value="trade_show">Trade Show</option>
      <option value="cold_call">Cold Call</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button
        className="w-touch-target h-touch-target flex items-center justify-center border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
        onClick={() => { actions.setStatusFilter(""); actions.setSourceFilter(""); actions.setSearchQuery(""); setLocalSearch(""); setPage(1); }}
        aria-label="Clear filters"
      >
      <span className="material-symbols-outlined">filter_list</span>
      </button>
      <button
        className="w-touch-target h-touch-target flex items-center justify-center border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
        onClick={() => alert("Export functionality coming in a future update.")}
        aria-label="Export"
      >
      <span className="material-symbols-outlined">download</span>
      </button>
      </div>
      </div>
      {/* Data Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low border-b border-outline-variant">
      <tr>
      <th className="py-md px-md font-label-sm text-label-sm text-on-surface-variant w-[250px]">Name</th>
      <th className="py-md px-md font-label-sm text-label-sm text-on-surface-variant w-[200px]">Company</th>
      <th className="py-md px-md font-label-sm text-label-sm text-on-surface-variant w-[150px]">Source</th>
      <th className="py-md px-md font-label-sm text-label-sm text-on-surface-variant text-right w-[150px]">Est. Value</th>
      <th className="py-md px-md font-label-sm text-label-sm text-on-surface-variant w-[120px]">Status</th>
      <th className="py-md px-md w-[80px]"></th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      {paged.map((lead) => (
        <tr key={lead.id} className="hover:bg-surface-bright transition-colors group">
        <td className="py-md px-md">
        <div className="flex items-center gap-md">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-label-md ${avatarBg(lead)}`}>{initials(lead)}</div>
        <div>
        <div className="font-label-md text-label-md text-on-surface">{lead.firstName} {lead.lastName}</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">{lead.email}</div>
        </div>
        </div>
        </td>
        <td className="py-md px-md font-body-md text-body-md text-on-surface">{lead.company}</td>
        <td className="py-md px-md font-body-md text-body-md text-on-surface-variant capitalize">{lead.source.replace("_", " ")}</td>
        <td className="py-md px-md font-body-md text-body-md text-on-surface text-right">${lead.estimatedValue.toLocaleString()}</td>
        <td className="py-md px-md">
        <span className={statusBadgeClass[lead.status]}>{lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}</span>
        </td>
        <td className="py-md px-md text-right">
        <button
          className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100 w-touch-target h-touch-target flex items-center justify-center ml-auto cursor-pointer"
          onClick={() => actions.navigateTo("edit-lead", lead.id)}
          aria-label="Edit lead"
        >
        <span className="material-symbols-outlined">more_vert</span>
        </button>
        </td>
        </tr>
      ))}
      {paged.length === 0 && (
        <tr>
        <td colSpan={6} className="py-xl px-md text-center font-body-md text-body-md text-on-surface-variant">
        No leads match your filters.
        </td>
        </tr>
      )}
      </tbody>
      </table>
      </div>
      <div className="px-md py-sm border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        Showing {filtered.length > 0 ? (page - 1) * pageSize + 1 : 0} to {Math.min(page * pageSize, filtered.length)} of {filtered.length} entries
      </span>
      <div className="flex items-center gap-xs">
      <button
        className="w-touch-target h-touch-target flex items-center justify-center text-outline disabled:opacity-50 cursor-pointer"
        disabled={page <= 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
      >
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={`w-touch-target h-touch-target flex items-center justify-center rounded-DEFAULT cursor-pointer ${p === page ? "bg-primary-container text-on-primary" : "text-on-surface hover:bg-surface-container"}`}
          onClick={() => setPage(p)}
        >
        {p}
        </button>
      ))}
      <button
        className="w-touch-target h-touch-target flex items-center justify-center text-on-surface hover:bg-surface-container rounded-DEFAULT cursor-pointer"
        disabled={page >= totalPages}
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
      >
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
