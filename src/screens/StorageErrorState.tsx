// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

interface StorageErrorStateProps {}

export function StorageErrorState(props: StorageErrorStateProps) {
  const { actions } = useAppContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Error Container */}
      <main className="w-full max-w-md bg-surface-container-lowest dark:bg-inverse-surface border border-error/20 dark:border-error/30 rounded-xl p-xl shadow-[0px_4px_12px_rgba(15,23,42,0.08)] flex flex-col items-center text-center mx-auto mt-16">
      {/* Error Icon */}
      <div className="w-16 h-16 rounded-full bg-error-container/50 dark:bg-error-container/10 flex items-center justify-center mb-lg">
      <span className="material-symbols-outlined text-error text-4xl">storage</span>
      </div>
      {/* Typography */}
      <h1 className="font-h2 text-h2 text-on-surface dark:text-surface-container-lowest mb-sm">Local Storage Error</h1>
      <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant mb-xl">
                  We encountered a critical failure attempting to read local cache data. Zone configurations and recent sensor logs may be temporarily unavailable.
              </p>
      {/* Technical Details Accordion (Simulated) */}
      <div className="w-full bg-surface-container-low dark:bg-surface-container/5 rounded-lg border border-outline-variant dark:border-outline/30 p-md mb-xl text-left">
      <button
        className="flex items-center justify-between mb-sm w-full cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
      <span className="font-label-sm text-label-sm text-on-surface dark:text-surface-container-highest uppercase">Error Details</span>
      <span className={`material-symbols-outlined text-outline text-sm transition-transform ${expanded ? "rotate-180" : ""}`}>expand_more</span>
      </button>
      {expanded && (
        <code className="font-body-sm text-body-sm text-error block bg-surface dark:bg-on-surface/5 p-sm rounded border border-error/10">ERR_QUOTA_EXCEEDED (Code: 1042)</code>
      )}
      </div>
      {/* Actions */}
      <div className="w-full flex flex-col gap-sm">
      <button
        className="w-full h-touch-target flex items-center justify-center bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
        onClick={actions.retryStorage}
      >
      <span className="material-symbols-outlined mr-sm text-xl">refresh</span>
                      Retry Connection
                  </button>
      <button
        className="w-full h-touch-target flex items-center justify-center bg-transparent text-secondary dark:text-secondary-fixed-dim border border-outline-variant dark:border-outline/50 rounded-lg font-label-md text-label-md hover:bg-surface-container-high dark:hover:bg-surface-container transition-colors focus:ring-2 focus:ring-outline focus:outline-none cursor-pointer"
        onClick={actions.resetStorage}
      >
      <span className="material-symbols-outlined mr-sm text-xl">delete_sweep</span>
                      Reset Local Data
                  </button>
      </div>
      <div className="mt-lg">
      <a className="font-label-sm text-label-sm text-primary dark:text-primary-fixed-dim hover:underline flex items-center justify-center gap-xs" href="mailto:support@ecogrowth.ops">
      <span className="material-symbols-outlined text-sm">help</span>
                       Contact IT Support
                   </a>
      </div>
      </main>
    </>
  );
}
