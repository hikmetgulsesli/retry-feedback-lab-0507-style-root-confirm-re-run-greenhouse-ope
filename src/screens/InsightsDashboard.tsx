// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useMemo, useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface InsightsDashboardProps {}

export function InsightsDashboard(props: InsightsDashboardProps) {
  const { state, actions } = useAppContext();
  const [period, setPeriod] = useState("30d");

  const metrics = useMemo(() => {
    const total = state.leads.length;
    const won = state.leads.filter((l) => l.status === "won").length;
    const lost = state.leads.filter((l) => l.status === "lost").length;
    const conversionRate = total > 0 ? ((won / total) * 100).toFixed(1) : "0.0";
    const followUps = state.leads.filter((l) => ["contacted", "qualified", "proposal", "negotiating"].includes(l.status)).length;
    return { total, won, lost, conversionRate, followUps };
  }, [state.leads]);

  const wonValue = useMemo(() => state.leads.filter((l) => l.status === "won").reduce((sum, l) => sum + l.estimatedValue, 0), [state.leads]);
  const pipelineValue = useMemo(() => state.leads.filter((l) => !["won", "lost"].includes(l.status)).reduce((sum, l) => sum + l.estimatedValue, 0), [state.leads]);

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface border-r border-outline-variant h-screen w-64 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-lg flex items-center gap-sm">
      <img alt="Greenhouse Operations Logo" className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN4K1V7N9Rppgla7jpao0H6RKgdhGJiv1z40dPYmPuKDgKW9STMfvQO0b_w_4k-kXytYnrX4WoxOBVImMPD_DY9Ka8AdppxT_m4LptbNs0k8RYbLkIsX3UhfLh1if_qc5vNHh7dje3qga-6cmYzM_2kti8DKvVfd5YmndgjpKWGfwCri1bjU_sihyJu8ZYRuWDyHP9IUJ3Cjs9ORwWPXj3j8w7BqUcJTjXKnUsx5ODoxLIHpXxdrycncOFmJW0sJMsRoPUoIoKcmsA" />
      <div>
      <div className="font-h3 text-h3 text-primary">EcoGrowth Ops</div>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto px-md py-sm flex flex-col gap-unit">
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "leads" || state.screen === "empty" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("leads")}
        disabled={state.screen === "leads" || state.screen === "empty"}
      >
      <span className="material-symbols-outlined">person_search</span>
                      Leads
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "pipeline" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("pipeline")}
        disabled={state.screen === "pipeline"}
      >
      <span className="material-symbols-outlined">view_kanban</span>
                      Pipeline
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "insights" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("insights")}
        disabled={state.screen === "insights"}
      >
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>monitoring</span>
                      Insights
                  </button>
      <button
        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body-md text-body-md transition-colors ${state.screen === "settings" ? "text-primary bg-secondary-container active:scale-[0.98] duration-150" : "text-on-surface-variant hover:bg-surface-container-high"}`}
        onClick={() => actions.navigateTo("settings")}
        disabled={state.screen === "settings"}
      >
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden bg-background">
      {/* TopNavBar */}
      <header className="bg-surface flex justify-between items-center h-[64px] px-lg w-full border-b border-outline-variant z-10 shrink-0">
      <div className="flex items-center gap-md">
      <div className="font-h2 text-h2 text-primary font-bold">Greenhouse Console</div>
      </div>
      <div className="flex items-center gap-lg">
      <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input
        className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none font-body-sm text-body-sm w-64 focus:outline-none"
        placeholder="Search..."
        type="text"
        value={state.searchQuery}
        onChange={(e) => actions.setSearchQuery(e.target.value)}
      />
      </div>
      <div className="flex items-center gap-md">
      <button
        className="text-on-surface-variant hover:text-primary transition-opacity w-[44px] h-[44px] flex items-center justify-center rounded-full"
        onClick={() => actions.navigateTo("storage-error")}
        aria-label="Notifications"
      >
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button
        className="text-on-surface-variant hover:text-primary transition-opacity w-[44px] h-[44px] flex items-center justify-center rounded-full"
        type="button"
        onClick={() => actions.navigateTo("settings")}
        aria-label="Help"
      >
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <button onClick={actions.toggleProfile} className="w-10 h-10 rounded-full border border-outline-variant object-cover overflow-hidden cursor-pointer" aria-label="Open profile panel">
      <img alt="Manager Profile" className="w-full h-full object-cover" src={state.profile.avatarUrl} />
      </button>
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-margin">
      <div className="mb-xl flex justify-between items-end">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Insights Dashboard</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Real-time overview of lead generation and pipeline health.</p>
      </div>
      <div className="flex gap-md">
      <select
        className="h-[44px] px-4 rounded-lg border border-outline-variant bg-surface font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      >
      <option value="30d">Last 30 Days</option>
      <option value="quarter">This Quarter</option>
      <option value="ytd">Year to Date</option>
      </select>
      <button
        className="h-[44px] px-6 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-sm hover:opacity-90 transition-opacity cursor-pointer"
        onClick={() => {
          const csv = [
            ["Company", "First Name", "Last Name", "Email", "Source", "Status", "Estimated Value"],
            ...state.leads.map(l => [l.company, l.firstName, l.lastName, l.email, l.source, l.status, String(l.estimatedValue)]),
          ].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
          const blob = new Blob([csv], { type: "text/csv" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `insights-export-${new Date().toISOString().slice(0, 10)}.csv`;
          a.click();
          URL.revokeObjectURL(url);
        }}
      >
      <span className="material-symbols-outlined">download</span>
                              Export Report
                          </button>
      </div>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-gutter">
      {/* KPI Cards (Top Row) */}
      <div className="col-span-12 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Leads</span>
      <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">group</span>
      </div>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-surface">{metrics.total}</div>
      <div className="flex items-center gap-xs mt-unit text-[#16a34a]">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>
      <span className="font-body-sm text-body-sm">+12% vs last month</span>
      </div>
      </div>
      </div>
      <div className="col-span-12 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Won / Lost</span>
      <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">fact_check</span>
      </div>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-surface">{metrics.won} <span className="text-on-surface-variant text-[20px] font-normal">/ {metrics.lost}</span></div>
      <div className="flex items-center gap-xs mt-unit text-on-surface-variant">
      <span className="font-body-sm text-body-sm">Solid ratio maintained</span>
      </div>
      </div>
      </div>
      <div className="col-span-12 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Conversion Rate</span>
      <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">pie_chart</span>
      </div>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-surface">{metrics.conversionRate}%</div>
      <div className="flex items-center gap-xs mt-unit text-[#16a34a]">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>
      <span className="font-body-sm text-body-sm">+2.1% vs last month</span>
      </div>
      </div>
      </div>
      <div className="col-span-12 md:col-span-3 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
      <div className="flex justify-between items-start mb-md">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pipeline Value</span>
      <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
      <span className="material-symbols-outlined text-[18px]">attach_money</span>
      </div>
      </div>
      <div>
      <div className="font-h1 text-h1 text-on-surface">${(pipelineValue / 1000).toFixed(0)}k</div>
      <div className="flex items-center gap-xs mt-unit text-error">
      <span className="material-symbols-outlined text-[16px]">trending_down</span>
      <span className="font-body-sm text-body-sm">-5% vs last week</span>
      </div>
      </div>
      </div>
      {/* Main Chart Area */}
      <div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant rounded-xl p-lg min-h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-xl">
      <h3 className="font-h3 text-h3 text-on-surface">Conversion Metrics Over Time</h3>
      <div className="flex gap-md items-center">
      <div className="flex items-center gap-unit">
      <div className="w-3 h-3 rounded-full bg-primary-container"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Leads</span>
      </div>
      <div className="flex items-center gap-unit">
      <div className="w-3 h-3 rounded-full bg-[#16a34a]"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Conversions</span>
      </div>
      </div>
      </div>
      {/* Faux Chart Representation using CSS */}
      <div className="flex-1 relative flex items-end justify-between pt-lg border-b border-l border-outline-variant pb-xs pl-sm">
      {/* Y-Axis labels (approximate) */}
      <div className="absolute left-[-30px] bottom-0 top-0 flex flex-col justify-between text-[10px] text-on-surface-variant py-2">
      <span>400</span>
      <span>300</span>
      <span>200</span>
      <span>100</span>
      <span>0</span>
      </div>
      {/* Grid lines */}
      <div className="absolute left-0 right-0 top-[20%] border-t border-outline-variant/30 w-full z-0"></div>
      <div className="absolute left-0 right-0 top-[40%] border-t border-outline-variant/30 w-full z-0"></div>
      <div className="absolute left-0 right-0 top-[60%] border-t border-outline-variant/30 w-full z-0"></div>
      <div className="absolute left-0 right-0 top-[80%] border-t border-outline-variant/30 w-full z-0"></div>
      {/* Bars */}
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[30%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[40%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">Jan</span>
      </div>
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[35%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[45%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">Feb</span>
      </div>
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[25%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[50%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">Mar</span>
      </div>
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[40%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[60%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">Apr</span>
      </div>
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[50%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[70%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">May</span>
      </div>
      <div className="w-[8%] flex flex-col justify-end gap-1 group relative z-10">
      <div className="w-full bg-[#16a34a] rounded-t-sm h-[45%] opacity-90 transition-all hover:opacity-100"></div>
      <div className="w-full bg-primary-container rounded-t-sm h-[80%] opacity-90 transition-all hover:opacity-100"></div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant">Jun</span>
      </div>
      </div>
      </div>
      {/* Secondary Panel: Activity Feed or Details */}
      <div className="col-span-12 lg:col-span-4 bg-surface border border-outline-variant rounded-xl p-lg flex flex-col">
      <h3 className="font-h3 text-h3 text-on-surface mb-md">Recent Key Conversions</h3>
      <div className="flex-1 overflow-y-auto pr-sm space-y-md">
      <div className="flex items-start gap-md p-md rounded-lg border border-surface-container-high bg-surface-bright">
      <div className="w-10 h-10 rounded-full bg-green-100 text-[#16a34a] flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">AgriCorp East - Zone B</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Full automation suite implementation.</p>
      <span className="font-label-sm text-label-sm text-outline mt-unit block">2 hours ago</span>
      </div>
      </div>
      <div className="flex items-start gap-md p-md rounded-lg border border-surface-container-high bg-surface-bright">
      <div className="w-10 h-10 rounded-full bg-green-100 text-[#16a34a] flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined">check_circle</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Valley Farms Co.</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Sensor grid expansion package.</p>
      <span className="font-label-sm text-label-sm text-outline mt-unit block">Yesterday</span>
      </div>
      </div>
      <div className="flex items-start gap-md p-md rounded-lg border border-surface-container-high bg-surface-bright">
      <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined">handshake</span>
      </div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface">Sunlight Growers</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Moved to final negotiation phase.</p>
      <span className="font-label-sm text-label-sm text-outline mt-unit block">2 days ago</span>
      </div>
      </div>
      </div>
      <button
        className="w-full h-[44px] mt-md border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
        onClick={() => actions.navigateTo("pipeline")}
      >
                              View All Activity
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
