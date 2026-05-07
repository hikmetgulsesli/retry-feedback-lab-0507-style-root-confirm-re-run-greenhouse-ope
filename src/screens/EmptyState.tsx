// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface EmptyStateProps {}

export function EmptyState(props: EmptyStateProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface border-r border-outline-variant h-screen w-64 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-lg flex flex-col gap-sm">
      <h1 className="font-h3 text-h3 text-primary">EcoGrowth Ops</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 overflow-y-auto py-sm px-md flex flex-col gap-unit">
      <a className="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-container rounded-lg active scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person_search</span>
      <span className="font-label-md text-label-md">Leads</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
      <span className="material-symbols-outlined">view_kanban</span>
      <span className="font-label-md text-label-md">Pipeline</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
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
      <input className="bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-2 font-body-sm text-body-sm focus:outline-none w-64" placeholder="Search leads..." type="text" />
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-opacity h-touch-target w-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-opacity h-touch-target w-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
      <img alt="Manager Profile" className="w-full h-full object-cover" data-alt="A close up portrait of a professional manager with a calm expression, wearing a neat shirt. The lighting is soft and natural, suggesting an office environment. The background is slightly blurred. The image is a standard profile picture format." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJe6t2tIGfVeBd3iMRzaz9VXRcPjClWiKOXc5sDIhmbYS3Qequ-gi6NqIFIFwL0hPS_eHooVhlUCvLOEiuz3oz_2Zsrm_ZZ1V7_IEhpUM40q49AFnGuAt8zlgGFlQTt7L40Y_T7e3Chx5yK9I4Jpvbof7s7EwrC64UlanIMArL6SW-Ea_dyKPerX2pi3gXApVzN-qWlSlMtYmLFnr5EyjrLWWgjLB8grFxLpp5dsWlPcd0Pw5qkp8RZR_Gorv8RwjM3t1MvkJ7yPoN" />
      </div>
      </div>
      </header>
      {/* Canvas Area */}
      <main className="flex-1 bg-background p-margin overflow-y-auto flex items-center justify-center">
      <div className="max-w-md w-full bg-surface border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md">
      <span className="material-symbols-outlined text-outline text-5xl">person_search</span>
      </div>
      <h2 className="font-h2 text-h2 text-on-surface mb-sm">No leads yet</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl">Your lead pipeline is currently empty. Start growing your network by adding a new lead to monitor.</p>
      <button className="bg-primary-container text-on-primary font-label-md text-label-md h-touch-target px-lg rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                          Create Lead
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
