// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings Screen
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SettingsScreenProps {}

export function SettingsScreen(props: SettingsScreenProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen w-64 bg-surface dark:bg-surface-dim border-r border-outline-variant dark:border-outline fixed left-0 top-0">
      <div className="p-lg border-b border-outline-variant dark:border-outline flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-h3">
                      EG
                  </div>
      <div>
      <h1 className="font-h3 text-h3 text-primary dark:text-primary-fixed-dim">EcoGrowth Ops</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Precision Monitoring</p>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-md px-sm flex flex-col gap-sm">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="person_search">person_search</span>
                      Leads
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
                      Pipeline
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                      Insights
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant rounded-lg font-body-md text-body-md" href="#">
      <span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-md">
      <h2 className="font-h2 text-h2 text-primary dark:text-primary-fixed-dim hidden md:block">Greenhouse Console</h2>
      <button className="md:hidden text-on-surface p-sm">
      <span className="material-symbols-outlined">menu</span>
      </button>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative focus-within:ring-2 focus-within:ring-primary rounded-lg">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none w-64 h-[44px]" placeholder="Search settings..." type="text" />
      </div>
      <button className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity p-sm w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-surface-container-high">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-opacity p-sm w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-surface-container-high">
      <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      </button>
      <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant ml-sm">
      <img alt="Manager Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged male manager with short dark hair, wearing a crisp white collared shirt against a muted gray background. The lighting is soft and even, typical of corporate portraiture. The image has a clean, polished feel suitable for a modern business application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHxqyZdmzr0E1FATbVoBDmMlrJbsm2cY0Q5sZDc3RtNpszkHpSLqBEy6MIJ-ZthBw5TLjC4dTyKd8quuQ9fEEzGU0YoDR_SF3sECS03qQmwDHa5wzBDSbjz9-C8MQUVp7IAg2mtTg9uEHtYCSR0KIxUOwxaPu-qTn7gA9Q5bW658678yW9B1L96mhPgmy_AgA7z1CQXfZxCB1ezjGkpYW2qrfKas0HMyPM1una4clhqP4cES93QA-mrxZgZn697MTYf-LTKgsHUfNm" />
      </div>
      </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 p-lg bg-surface-container-lowest overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-lg">
      <div className="pb-md border-b border-outline-variant">
      <h1 className="font-h1 text-h1 text-on-surface">System Settings</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage your console preferences and application data.</p>
      </div>
      {/* Settings Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
      {/* Appearance Card */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">palette</span>
      <h3 className="font-h3 text-h3 text-on-surface">Appearance</h3>
      </div>
      <div className="space-y-md">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-xs">UI Density</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Adjust the spacing between elements.</p>
      <div className="flex gap-md">
      <label className="flex items-center gap-sm p-3 border border-primary rounded-lg bg-primary-fixed cursor-pointer flex-1">
      <input checked={true} className="text-primary focus:ring-primary w-5 h-5" name="density" type="radio" />
      <span className="font-body-md text-body-md text-on-primary-fixed">Comfortable</span>
      </label>
      <label className="flex items-center gap-sm p-3 border border-outline-variant rounded-lg hover:bg-surface-container-low cursor-pointer flex-1">
      <input className="text-primary focus:ring-primary w-5 h-5" name="density" type="radio" />
      <span className="font-body-md text-body-md text-on-surface">Compact</span>
      </label>
      </div>
      </div>
      </div>
      </div>
      {/* Localization Card */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">language</span>
      <h3 className="font-h3 text-h3 text-on-surface">Localization</h3>
      </div>
      <div className="space-y-md">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-xs" htmlFor="currency">Preferred Currency</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Used for pipeline and revenue metrics.</p>
      <select className="w-full h-[44px] px-3 border border-outline-variant rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" id="currency">
      <option>USD ($) - US Dollar</option>
      <option>EUR (€) - Euro</option>
      <option>GBP (£) - British Pound</option>
      <option>CAD ($) - Canadian Dollar</option>
      </select>
      </div>
      </div>
      </div>
      {/* Notifications Card */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md lg:col-span-2">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">notifications_active</span>
      <h3 className="font-h3 text-h3 text-on-surface">Notifications &amp; Alerts</h3>
      </div>
      <div className="space-y-4 divide-y divide-outline-variant">
      <div className="flex items-center justify-between pt-sm">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Critical Zone Alerts</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Immediate notifications for temperature or humidity threshold breaches.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer min-w-[44px] min-h-[44px] justify-center">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-fixed-dim rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[11px] after:left-[4px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between pt-md">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Daily Summary Report</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Receive a daily digest of pipeline changes and insights.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer min-w-[44px] min-h-[44px] justify-center">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-fixed-dim rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[11px] after:left-[4px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      {/* Data Persistence Card */}
      <div className="bg-surface border border-outline-variant rounded-xl p-lg flex flex-col gap-md lg:col-span-2 border-l-4 border-l-error">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-error">database</span>
      <h3 className="font-h3 text-h3 text-on-surface">Data Management</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md bg-error-container/20 p-md rounded-lg border border-error-container">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Clear Local Cache</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Forces a full sync with the central server. Useful if dashboard data appears stale.</p>
      </div>
      <button className="h-[44px] px-md bg-surface border border-error text-error font-label-md text-label-md rounded-lg hover:bg-error hover:text-on-error transition-colors whitespace-nowrap">
                                      Clear Data
                                  </button>
      </div>
      </div>
      </div>
      <div className="flex justify-end gap-md pt-lg border-t border-outline-variant mt-xl">
      <button className="h-[44px] px-lg border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-colors">
                              Cancel
                          </button>
      <button className="h-[44px] px-lg bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-on-primary-fixed transition-colors">
                              Save Changes
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
