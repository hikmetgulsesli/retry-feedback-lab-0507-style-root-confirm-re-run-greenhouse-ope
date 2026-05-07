// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Lead Create/Edit Form
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadCreateeditFormProps {}

export function LeadCreateeditForm(props: LeadCreateeditFormProps) {
  return (
    <>
      {/* Navigation Shell: Hidden as this is a transactional form (Creation/Edit) */}
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full border-b border-outline-variant bg-surface shrink-0">
      <div className="flex items-center gap-md">
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary focus:outline-none">
      <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 className="font-h2 text-h2 text-on-surface">Create New Lead</h1>
      </div>
      <div className="flex items-center gap-md">
      <button className="h-touch-target px-md rounded-lg text-secondary border border-outline-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors focus:outline-none focus-within:ring-2 focus-within:ring-primary">
                          Cancel
                      </button>
      <button className="h-touch-target px-lg rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors focus:outline-none focus-within:ring-2 focus-within:ring-primary-container ring-offset-2 ring-offset-background">
                          Save Lead
                      </button>
      </div>
      </header>
      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto p-margin bg-surface-container-lowest">
      <div className="max-w-[800px] mx-auto space-y-xl">
      {/* Section 1: Basic Information */}
      <section className="bg-surface border border-surface-variant rounded-xl p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Input: First Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="first_name">First Name</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="first_name" placeholder="e.g. Jane" type="text" />
      </div>
      {/* Input: Last Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="last_name">Last Name</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="last_name" placeholder="e.g. Doe" type="text" />
      </div>
      {/* Input: Company */}
      <div className="flex flex-col gap-xs md:col-span-2">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="company">Company</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="company" placeholder="e.g. Acme Corp" type="text" />
      </div>
      {/* Input: Email */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="email" placeholder="jane@example.com" type="email" />
      </div>
      {/* Input: Phone */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="phone">Phone Number</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="phone" placeholder="(555) 123-4567" type="tel" />
      </div>
      </div>
      </section>
      {/* Section 2: Deal Details */}
      <section className="bg-surface border border-surface-variant rounded-xl p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Deal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Select: Source */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="source">Lead Source</label>
      <div className="relative">
      <select className="w-full h-touch-target appearance-none rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow pr-xl" id="source">
      <option disabled={true} selected={true} value="">Select source...</option>
      <option value="website">Website Form</option>
      <option value="referral">Referral</option>
      <option value="trade_show">Trade Show</option>
      <option value="cold_call">Cold Call</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-outline">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      </div>
      {/* Input: Estimated Value */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="value">Estimated Value ($)</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="value" placeholder="0.00" type="number" />
      </div>
      {/* Select: Status */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="status">Initial Status</label>
      <div className="relative">
      <select className="w-full h-touch-target appearance-none rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow pr-xl" id="status">
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="qualified">Qualified</option>
      <option value="proposal">Proposal</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-outline">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      </div>
      {/* Input: Date */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="date">Next Action Date</label>
      <input className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" id="date" type="date" />
      </div>
      </div>
      </section>
      {/* Section 3: Notes */}
      <section className="bg-surface border border-surface-variant rounded-xl p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Additional Information</h2>
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="notes">Next Action / Notes</label>
      <textarea className="rounded-lg border border-outline-variant bg-surface p-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-y" id="notes" placeholder="Enter details about next steps or context..." rows={4}></textarea>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
