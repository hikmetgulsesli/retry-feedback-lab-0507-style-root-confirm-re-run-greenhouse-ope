// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface EmptyStateProps {}

export function EmptyState(props: EmptyStateProps) {
  const { state, actions } = useAppContext();
  const [localSearch, setLocalSearch] = useState(state.searchQuery);

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface border-r border-outline-variant h-screen w-64 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-lg flex flex-col gap-sm">
      <h1 className="font-h3 text-h3 text-primary">EcoGrowth Ops</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 overflow-y-auto py-sm px-md flex flex-col gap-unit">
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${state.screen === "leads" || state.screen === "empty" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("leads")}
        disabled={state.screen === "leads" || state.screen === "empty"}
      >
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person_search</span>
      <span className="font-label-md text-label-md">Leads</span>
      </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${state.screen === "pipeline" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("pipeline")}
        disabled={state.screen === "pipeline"}
      >
      <span className="material-symbols-outlined">view_kanban</span>
      <span className="font-label-md text-label-md">Pipeline</span>
      </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${state.screen === "insights" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("insights")}
        disabled={state.screen === "insights"}
      >
      <span className="material-symbols-outlined">monitoring</span>
      <span className="font-label-md text-label-md">Insights</span>
      </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${state.screen === "settings" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("settings")}
        disabled={state.screen === "settings"}
      >
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 h-screen">
      {/* TopNavBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center h-[64px] px-lg w-full shrink-0 z-10">
      <div className="font-h2 text-h2 text-primary">Greenhouse Console</div>
      <div className="flex items-center gap-md">
      <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input
        className="bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-2 font-body-sm text-body-sm focus:outline-none w-64"
        placeholder="Search leads..."
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { actions.setSearchQuery(localSearch); actions.navigateTo("leads"); }}}
      />
      </div>
      <button
        className="text-on-surface-variant hover:text-primary transition-opacity h-touch-target w-touch-target flex items-center justify-center rounded-full"
        onClick={() => actions.navigateTo("storage-error")}
        aria-label="Notifications"
      >
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button
        className="text-on-surface-variant hover:text-primary transition-opacity h-touch-target w-touch-target flex items-center justify-center rounded-full"
        aria-label="Help"
        disabled
        aria-disabled="true"
      >
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <button onClick={actions.toggleProfile} className="h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden cursor-pointer" aria-label="Open profile panel">
      <img alt="Manager Profile" className="w-full h-full object-cover" src={state.profile.avatarUrl} />
      </button>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 bg-background p-margin overflow-y-auto flex items-center justify-center">
      <div className="max-w-md w-full bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md">
      <span className="material-symbols-outlined text-outline text-5xl">person_search</span>
      </div>
      <h1 className="font-h2 text-h2 text-on-surface mb-sm">No leads yet</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Your lead pipeline is currently empty. Start growing your network by adding a new lead to monitor.</p>
      <button
        className="bg-primary-container text-on-primary font-label-md text-label-md h-touch-target px-lg rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity cursor-pointer"
        onClick={() => actions.navigateTo("create-lead")}
      >
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                          Create Lead
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
