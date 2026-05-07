// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadsDashboardProps {}

export function LeadsDashboard(props: LeadsDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline h-screen w-64 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-lg flex flex-col gap-sm">
      <h2 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim">EcoGrowth Ops</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 px-sm py-md flex flex-col gap-unit">
      <a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant rounded-lg font-body-md text-body-md Active: scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person_search</span>
                      Leads
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">view_kanban</span>
                      Pipeline
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">monitoring</span>
                      Insights
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim flex justify-between items-center h-[64px] px-lg w-[calc(100%-16rem)] ml-64 fixed top-0 right-0 z-10 border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-md">
      <h1 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim">Greenhouse Console</h1>
      <div className="relative hidden lg:flex items-center focus-within:ring-2 focus-within:ring-primary rounded-DEFAULT">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant">search</span>
      <input className="pl-xl pr-sm py-sm rounded-DEFAULT border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none font-body-sm text-body-sm h-touch-target" placeholder="Search..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity w-touch-target h-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity w-touch-target h-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <img alt="Manager Profile" className="w-[40px] h-[40px] rounded-full object-cover border border-outline-variant" data-alt="A close-up, professional portrait of a confident male executive in his 40s. The lighting is soft and studio-quality, casting subtle shadows that define his features. He wears a dark, tailored suit against a neutral, high-key gray background. The overall aesthetic is clean, corporate, and trustworthy, aligning with a premium enterprise software environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDqYcB4WUuOBNVYkjLu2igRUJ56wtdFvZ7cHb8Igv1HgixMSgyKcfhhbRcTrzTCUK0zw5NLI91f2D1XEmgy7P8gnvqBPjqgkvqIQtqzSfkVo2Fae0jiSxxM4hkS1FadGXjbsG7tD0hGdzyoZ3S77jAE2p31IEq7QwZtmhmCDYRQ5709v35C1H5TCxZH1Tbl2m3o1I0P7wtaCjiALt_26cR7xb05CGspmv63t1SpHVvXW7i0h8DV9jGReCgegHz-qSCQFSjPQ00L_xa" />
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
      <button className="bg-primary-container text-on-primary h-touch-target px-md rounded-DEFAULT font-label-md text-label-md flex items-center gap-sm hover:bg-primary transition-colors">
      <span className="material-symbols-outlined">add</span>
                      New Lead
                  </button>
      </div>
      {/* Controls / Filters */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md mb-lg flex flex-wrap gap-md items-center justify-between">
      <div className="flex flex-wrap gap-md items-center">
      <div className="relative">
      <select className="appearance-none bg-surface border border-outline-variant rounded-DEFAULT h-touch-target pl-md pr-xl font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none">
      <option value="">All Statuses</option>
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="qualified">Qualified</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      <div className="relative">
      <select className="appearance-none bg-surface border border-outline-variant rounded-DEFAULT h-touch-target pl-md pr-xl font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none">
      <option value="">All Sources</option>
      <option value="web">Website Form</option>
      <option value="referral">Referral</option>
      <option value="event">Trade Show</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="w-touch-target h-touch-target flex items-center justify-center border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors">
      <span className="material-symbols-outlined">filter_list</span>
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors">
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
      <tr className="hover:bg-surface-bright transition-colors group">
      <td className="py-md px-md">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md">SJ</div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Sarah Jenkins</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">sarah.j@agritech.com</div>
      </div>
      </div>
      </td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface">AgriTech Solutions</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface-variant">Trade Show</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface text-right">$45,000</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">New</span>
      </td>
      <td className="py-md px-md text-right">
      <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100 w-touch-target h-touch-target flex items-center justify-center ml-auto">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-bright transition-colors group">
      <td className="py-md px-md">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-label-md">MR</div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Marcus Rodriguez</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">m.rodriguez@valleypark.io</div>
      </div>
      </div>
      </td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface">Valley Park Farms</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface-variant">Website Form</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface text-right">$12,500</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-on-primary-fixed font-label-sm text-label-sm">Contacted</span>
      </td>
      <td className="py-md px-md text-right">
      <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100 w-touch-target h-touch-target flex items-center justify-center ml-auto">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-bright transition-colors group">
      <td className="py-md px-md">
      <div className="flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-label-md">EL</div>
      <div>
      <div className="font-label-md text-label-md text-on-surface">Elena Lutea</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">elena@botanix.net</div>
      </div>
      </div>
      </td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface">Botanix Research</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface-variant">Referral</td>
      <td className="py-md px-md font-body-md text-body-md text-on-surface text-right">$85,200</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#dcfce7] text-[#166534] font-label-sm text-label-sm">Qualified</span>
      </td>
      <td className="py-md px-md text-right">
      <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100 w-touch-target h-touch-target flex items-center justify-center ml-auto">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <div className="px-md py-sm border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 3 of 42 entries</span>
      <div className="flex items-center gap-xs">
      <button className="w-touch-target h-touch-target flex items-center justify-center text-outline disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface hover:bg-surface-container rounded-DEFAULT">1</button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface hover:bg-surface-container rounded-DEFAULT">2</button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface hover:bg-surface-container rounded-DEFAULT">3</button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-on-surface hover:bg-surface-container rounded-DEFAULT">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
