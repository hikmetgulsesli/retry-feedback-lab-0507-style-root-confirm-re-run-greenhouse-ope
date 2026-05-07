// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PipelineBoardProps {}

export function PipelineBoard(props: PipelineBoardProps) {
  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-screen w-64 bg-surface border-r border-outline-variant fixed left-0 top-0">
      <div className="px-lg py-xl">
      <h1 className="font-h3 text-h3 text-primary mb-1">EcoGrowth Ops</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      <div className="flex-1 flex flex-col gap-sm px-4">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="person_search">person_search</span>
                      Leads
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-container rounded-lg font-body-md text-body-md scale-[0.98] duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
                      Pipeline
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                      Insights
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full bg-surface border-b border-outline-variant sticky top-0 z-10">
      <div className="font-h2 text-h2 text-primary font-bold">Greenhouse Console</div>
      <div className="flex items-center gap-lg">
      <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-lg">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
      <input className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:ring-0" placeholder="Search..." type="text" />
      </div>
      <div className="flex items-center gap-md text-on-surface-variant">
      <button className="hover:text-primary transition-opacity p-2 min-h-touch-target min-w-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="hover:text-primary transition-opacity p-2 min-h-touch-target min-w-touch-target flex items-center justify-center rounded-full">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <img alt="Manager Profile" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional headshot of a smiling manager with short brown hair, wearing a dark blue suit jacket over a light blue collared shirt. The background is a softly out-of-focus modern office space with bright natural light coming from the left. The overall tone is approachable, confident, and professional, perfectly suited for a high-end corporate dashboard profile avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5EOjYjntCOZETj8T5j7VXVxE56Q7jCh8Gz2LfAgEJ9EoVds0_94gJQbumsh-tU65s7mA6_GpTRIiPi45J-7penaqcn04rZimbdz2ay1Ol6Qt9OtyDhHbMqnsExCNUW9qfaKQfGonJ5OJr7BgqkYx4cxNE9iAiyHleuS5U5RzbM6OKjXi5GHUpDrdroyLJMMbAfYuk6S6Td81KS9RRnkA_hpzuIrHFMqYcrKSmMS0z-w-dH-W8RQQMT4WEu6kVo8LCBntjeNV9kynD" />
      </div>
      </div>
      </header>
      {/* Kanban Canvas */}
      <main className="flex-1 p-gutter overflow-x-auto bg-background">
      {/* Page Header */}
      <div className="mb-lg flex justify-between items-end">
      <div>
      <h2 className="font-h1 text-h1 text-on-surface">Pipeline Overview</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Track and manage prospective zone integrations.</p>
      </div>
      <button className="bg-primary-container text-on-primary min-h-touch-target px-md rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-primary transition-colors">
      <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                          New Lead
                      </button>
      </div>
      {/* Kanban Board */}
      <div className="flex gap-gutter h-[calc(100vh-200px)] min-w-max pb-lg">
      {/* Column: New */}
      <div className="w-80 flex flex-col bg-surface-container-low rounded-xl border border-surface-variant overflow-hidden">
      <div className="p-4 border-b border-surface-variant bg-surface">
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-h3 text-h3 text-on-surface">New</h3>
      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full font-label-sm text-label-sm">3</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Est. $145,000</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-sm">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
      <div className="flex justify-between items-start mb-3">
      <h4 className="font-label-md text-label-md text-on-surface">Apex AgriTech</h4>
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="more_horiz">more_horiz</span>
      </div>
      <div className="font-h3 text-h3 text-on-surface mb-3">$45,000</div>
      <div className="flex items-center gap-2">
      <img alt="Lead Avatar" className="w-6 h-6 rounded-full" data-alt="Headshot of a confident man with a short beard, wearing a casual grey shirt. The background is a soft, warm outdoor light, suggesting a dynamic, approachable professional environment. The image is cropped close to the face, ideal for a small UI avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVvDR-O28cMU2ub1FiEuBgePeiUl71NYpKye0NEVn9Itdi_e0hXKMgxQ64yuDffu2NAhdZU2fAves1Wa8CmQnSmFrfhxTaQbeVxL4S0WyPC3g8TcDo0Ww-pFFFmtSDiDOn09cgr6gv2GTwM_8Jag7UWPFFqHf0RYoRt-e73yIXIk8abEqCbXJWFcDs8QAImlc5JVIZhxRGZoUWu9gGWIts5cEIalPBHvOB6_KMVmBaJ_RiyMuq-GTLgzBMNWpmloFfa8j6HptWSlax" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">David C.</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
      <div className="flex justify-between items-start mb-3">
      <h4 className="font-label-md text-label-md text-on-surface">Verdant Systems</h4>
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="more_horiz">more_horiz</span>
      </div>
      <div className="font-h3 text-h3 text-on-surface mb-3">$100,000</div>
      <div className="flex items-center gap-2">
      <img alt="Lead Avatar" className="w-6 h-6 rounded-full" data-alt="Portrait of a young professional woman smiling warmly. She has dark hair and is wearing a dark, elegant top. The background is a neutral, soft grey, keeping the focus entirely on her expression. This serves as a clean, corporate avatar for a dashboard interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd3tOfU0HxCrF7PY5EVbgJ9I1Tv1FfUrO43mswZT4en9TVmSBLEBcxPRjT4M6oL_g0WM9RVgzyB6Bg2j7X3ecn80Sjz_WhRrCJuqg3oMYTQGqV8jD-wZ8aXvQQaG4fQUGfK_uWaFfSkmJ-mx0xhN3Qw5aA0CIE8Yw-KsJ1gHqw8metO4j1QRWrL1wvRQGBKwqsMgiVVT-ICm_TKBKLtWHYu4uD1OLODj3mPMVXx5O-siuNy0Ea2P09GV6NAmNEK8tmQ212t5vI128C" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">Sarah L.</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Contacted */}
      <div className="w-80 flex flex-col bg-surface-container-low rounded-xl border border-surface-variant overflow-hidden">
      <div className="p-4 border-b border-surface-variant bg-surface">
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-h3 text-h3 text-on-surface">Contacted</h3>
      <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded-full font-label-sm text-label-sm">2</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Est. $82,500</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-sm">
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
      <div className="flex justify-between items-start mb-3">
      <h4 className="font-label-md text-label-md text-on-surface">SunLight Farms</h4>
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="more_horiz">more_horiz</span>
      </div>
      <div className="font-h3 text-h3 text-on-surface mb-3">$55,000</div>
      <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant">MK</div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Michael K.</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Negotiating */}
      <div className="w-80 flex flex-col bg-surface-container-low rounded-xl border border-surface-variant overflow-hidden">
      <div className="p-4 border-b border-surface-variant bg-surface">
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-h3 text-h3 text-on-surface">Negotiating</h3>
      <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded-full font-label-sm text-label-sm">1</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Est. $210,000</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-sm">
      {/* Card 4 */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 cursor-pointer hover:border-primary transition-colors border-l-4 border-l-tertiary-container">
      <div className="flex justify-between items-start mb-3">
      <h4 className="font-label-md text-label-md text-on-surface">Global Botanics</h4>
      <span className="material-symbols-outlined text-outline text-[20px]" data-icon="more_horiz">more_horiz</span>
      </div>
      <div className="font-h3 text-h3 text-on-surface mb-3">$210,000</div>
      <div className="flex items-center gap-2">
      <img alt="Lead Avatar" className="w-6 h-6 rounded-full" data-alt="A professional headshot of a mature woman with glasses and styled grey hair, wearing a tailored navy blazer. The background is a bright, modern office interior with subtle glass partitions. The lighting is crisp and even, conveying authority and competence suitable for a high-level corporate profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGgffK_uHlJibjgA_Odrr__WulSHSDJaJaA0kqNSpf_O_XJcQonlisecAHGKjtWVxrBWvxIQ3wlLcQ0Wf9l5X98E3tN-J_BCGX_4awVw8qdeVF897TbsguLpXp6dDz4q0BLFWkzTWLqsrKs9d7AHO2XEIsjB9zuGhwbcTWEzytTe13aBYZAlNk7dQsoKQuubcuipkKZfIo1wATQo-WmcUL1Tgr81zsdHgmpk4bsSkam0Ij_UmMpJEGW3asLAsD4bNAxlPcYjOf7pM7" />
      <span className="font-body-sm text-body-sm text-on-surface-variant">Elena R.</span>
      </div>
      </div>
      </div>
      </div>
      {/* Add Column Button */}
      <div className="w-80 flex flex-col bg-surface-container-lowest border border-dashed border-outline-variant rounded-xl items-center justify-center cursor-pointer hover:bg-surface-container-low transition-colors text-on-surface-variant">
      <span className="material-symbols-outlined mb-2 text-[32px]" data-icon="add_circle">add_circle</span>
      <span className="font-label-md text-label-md">Add Status</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
