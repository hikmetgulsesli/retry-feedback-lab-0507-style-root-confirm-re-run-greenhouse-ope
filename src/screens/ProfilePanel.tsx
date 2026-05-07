// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface ProfilePanelProps {}

export function ProfilePanel(props: ProfilePanelProps) {
  const { state, actions } = useAppContext();
  const [draft, setDraft] = useState({ ...state.profile });

  const save = () => {
    actions.updateProfile(draft);
  };

  return (
    <>
      {/* Mock Background Content to simulate slide-out context */}
      <div className="flex-1 flex flex-col h-full bg-surface-container-lowest opacity-40 transition-opacity">
      {/* TopNavBar Mock */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full border-b border-outline-variant bg-surface">
      <div className="font-h2 text-h2 text-primary">Greenhouse Console</div>
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface-variant">search</span>
      <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
      <span className="material-symbols-outlined text-on-surface-variant">help_outline</span>
      </div>
      </header>
      <div className="p-lg grid grid-cols-12 gap-gutter">
      {/* Mock Content */}
      <div className="col-span-8 bg-surface rounded-lg border border-outline-variant h-[400px]"></div>
      <div className="col-span-4 bg-surface rounded-lg border border-outline-variant h-[400px]"></div>
      </div>
      </div>
      {/* Overlay */}
      <div aria-hidden={true} className="fixed inset-0 bg-inverse-surface/20 backdrop-blur-sm z-40"></div>
      {/* Profile Slide-out Panel */}
      <aside className="fixed right-0 top-0 bottom-0 w-full md:w-[400px] bg-surface border-l border-outline-variant shadow-[-4px_0_24px_rgba(15,23,42,0.08)] z-50 flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">
      {/* Header */}
      <div className="flex items-center justify-between p-lg border-b border-outline-variant">
      <h2 className="font-h3 text-h3 text-on-surface">Profile</h2>
      <button
        aria-label="Close Profile"
        className="w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant cursor-pointer"
        onClick={actions.toggleProfile}
      >
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-xl">
      {/* User Info Section */}
      <div className="flex flex-col items-center text-center gap-md">
      <div className="relative w-[120px] h-[120px] rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-fixed">
      <img alt="Manager Profile" className="w-full h-full object-cover" src={state.profile.avatarUrl} />
      <button
        aria-label="Change photo"
        className="absolute bottom-0 left-0 right-0 bg-inverse-surface/80 text-inverse-on-surface py-1 font-label-sm text-label-sm hover:bg-inverse-surface transition-colors cursor-pointer"
        onClick={() => alert("Photo upload coming soon")}
      >
                              Edit
                          </button>
      </div>
      <div>
      <h3 className="font-h2 text-h2 text-on-surface">{state.profile.firstName} {state.profile.lastName}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{state.profile.title} • {state.profile.sector}</p>
      </div>
      <div className="flex gap-sm">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span> {state.profile.status.charAt(0).toUpperCase() + state.profile.status.slice(1)}
                          </span>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Settings Section */}
      <div className="flex flex-col gap-lg">
      <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Preferences</h4>
      {/* Timezone */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-md text-label-md text-on-surface">Timezone Override</label>
      <div className="relative">
      <select
        className="w-full h-[44px] appearance-none bg-surface border border-outline-variant rounded-lg px-4 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer"
        value={draft.timezone ?? state.settings.timezone}
        onChange={(e) => setDraft((d) => ({ ...d, timezone: e.target.value as typeof state.settings.timezone }))}
      >
      <option value="auto">Auto-detect (Current: PST)</option>
      <option value="utc">UTC (Coordinated Universal Time)</option>
      <option value="est">EST (Eastern Standard Time)</option>
      <option value="pst">PST (Pacific Standard Time)</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Forces console timestamps to a specific timezone.</p>
      </div>
      {/* Notification Toggles */}
      <div className="flex flex-col gap-md">
      <div className="flex items-center justify-between">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Critical Alerts</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">HVAC, Water pressure failures</p>
      </div>
      {/* Custom Toggle */}
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px]">
      <input
        checked={state.settings.criticalAlerts}
        className="sr-only peer"
        type="checkbox"
        onChange={(e) => actions.updateSettings({ criticalAlerts: e.target.checked })}
      />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Daily Summary</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Yield metrics & sensor aggregates</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px]">
      <input
        checked={state.settings.dailySummary}
        className="sr-only peer"
        type="checkbox"
        onChange={(e) => actions.updateSettings({ dailySummary: e.target.checked })}
      />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <p className="font-label-md text-label-md text-on-surface">Maintenance Reminders</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Filter changes, calibration</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px]">
      <input
        checked={state.settings.criticalZoneAlerts}
        className="sr-only peer"
        type="checkbox"
        onChange={(e) => actions.updateSettings({ criticalZoneAlerts: e.target.checked })}
      />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Quick Links */}
      <div className="flex flex-col gap-sm">
      <button
        className="flex items-center gap-3 px-4 h-[44px] rounded-lg hover:bg-surface-container-high transition-colors text-on-surface text-left cursor-pointer"
        onClick={() => actions.navigateTo("settings")}
      >
      <span className="material-symbols-outlined text-outline">help</span>
      <span className="font-body-md text-body-md flex-1">Help & Documentation</span>
      </button>
      <button
        className="flex items-center gap-3 px-4 h-[44px] rounded-lg hover:bg-surface-container-high transition-colors text-on-surface text-left cursor-pointer"
        onClick={() => actions.navigateTo("settings")}
      >
      <span className="material-symbols-outlined text-outline">verified_user</span>
      <span className="font-body-md text-body-md flex-1">Security Settings</span>
      </button>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="p-lg border-t border-outline-variant mt-auto">
      <button
        className="w-full flex items-center justify-center gap-2 h-[44px] bg-error-container text-on-error-container rounded-lg hover:bg-[#ffcdc9] transition-colors font-label-md text-label-md cursor-pointer"
        onClick={() => { actions.toggleProfile(); actions.navigateTo("empty"); }}
      >
      <span className="material-symbols-outlined">logout</span>
                      Sign Out
                  </button>
      </div>
      </aside>
    </>
  );
}
