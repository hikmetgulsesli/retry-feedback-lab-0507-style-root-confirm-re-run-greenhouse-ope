// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Lead Create/Edit Form
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import type { Lead, LeadStatus, LeadSource } from "../types/domain";

interface LeadCreateeditFormProps {}

function emptyLead(): Omit<Lead, "id" | "createdAt" | "updatedAt"> {
  return {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    source: "website",
    estimatedValue: 0,
    status: "new",
    nextActionDate: "",
    notes: "",
  };
}

export function LeadCreateeditForm(props: LeadCreateeditFormProps) {
  const { state, actions } = useAppContext();
  const isEdit = !!state.editingLeadId;
  const existing = isEdit ? state.leads.find((l) => l.id === state.editingLeadId) : undefined;

  const [form, setForm] = useState<Omit<Lead, "id" | "createdAt" | "updatedAt">>(emptyLead());
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (existing) {
      setForm({
        firstName: existing.firstName,
        lastName: existing.lastName,
        company: existing.company,
        email: existing.email,
        phone: existing.phone,
        source: existing.source,
        estimatedValue: existing.estimatedValue,
        status: existing.status,
        nextActionDate: existing.nextActionDate,
        notes: existing.notes,
      });
    } else {
      setForm(emptyLead());
    }
    setErrors({});
  }, [existing, state.editingLeadId]);

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((e) => { const next = { ...e }; delete next[key]; return next; });
    }
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!form.company.trim()) next.company = "Company is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address";
    }
    if (form.estimatedValue < 0) next.estimatedValue = "Value cannot be negative";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    if (isEdit && state.editingLeadId) {
      actions.updateLead(state.editingLeadId, { ...form });
    } else {
      actions.addLead(form);
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      actions.goBack();
    }, 600);
  };

  const title = isEdit ? "Edit Lead" : "Create New Lead";

  return (
    <>
      {/* Navigation Shell: Hidden as this is a transactional form (Creation/Edit) */}
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center h-[64px] px-lg w-full border-b border-outline-variant bg-surface shrink-0">
      <div className="flex items-center gap-md">
      <button
        className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary focus:outline-none cursor-pointer"
        onClick={actions.goBack}
      >
      <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 className="font-h2 text-h2 text-on-surface">{title}</h1>
      </div>
      <div className="flex items-center gap-md">
      <button
        className="h-touch-target px-md rounded-lg text-secondary border border-outline-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors focus:outline-none focus-within:ring-2 focus-within:ring-primary cursor-pointer"
        onClick={actions.goBack}
      >
                          Cancel
                      </button>
      <button
        className="h-touch-target px-lg rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors focus:outline-none focus-within:ring-2 focus-within:ring-primary-container ring-offset-2 ring-offset-background cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={saved}
        onClick={submit}
      >
                          {isEdit ? "Save Changes" : "Save Lead"}
                      </button>
      </div>
      </header>
      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto p-margin bg-surface-container-lowest">
      <div className="max-w-[800px] mx-auto space-y-xl">
      {saved && (
        <div className="bg-green-100 text-[#166534] rounded-lg p-md font-body-md text-body-md">
          {isEdit ? "Lead updated successfully." : "Lead created successfully."}
        </div>
      )}
      {/* Section 1: Basic Information */}
      <section className="bg-surface border border-surface-variant rounded-xl p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Basic Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Input: First Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="first_name">First Name</label>
      <input
        className={`h-touch-target rounded-lg border bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.firstName ? "border-error focus:ring-error" : "border-outline-variant"}`}
        id="first_name"
        placeholder="e.g. Jane"
        type="text"
        value={form.firstName}
        onChange={(e) => update("firstName", e.target.value)}
      />
      {errors.firstName && <span className="font-body-sm text-body-sm text-error">{errors.firstName}</span>}
      </div>
      {/* Input: Last Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="last_name">Last Name</label>
      <input
        className={`h-touch-target rounded-lg border bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.lastName ? "border-error focus:ring-error" : "border-outline-variant"}`}
        id="last_name"
        placeholder="e.g. Doe"
        type="text"
        value={form.lastName}
        onChange={(e) => update("lastName", e.target.value)}
      />
      {errors.lastName && <span className="font-body-sm text-body-sm text-error">{errors.lastName}</span>}
      </div>
      {/* Input: Company */}
      <div className="flex flex-col gap-xs md:col-span-2">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="company">Company</label>
      <input
        className={`h-touch-target rounded-lg border bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.company ? "border-error focus:ring-error" : "border-outline-variant"}`}
        id="company"
        placeholder="e.g. Acme Corp"
        type="text"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
      />
      {errors.company && <span className="font-body-sm text-body-sm text-error">{errors.company}</span>}
      </div>
      {/* Input: Email */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
      <input
        className={`h-touch-target rounded-lg border bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.email ? "border-error focus:ring-error" : "border-outline-variant"}`}
        id="email"
        placeholder="jane@example.com"
        type="email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
      />
      {errors.email && <span className="font-body-sm text-body-sm text-error">{errors.email}</span>}
      </div>
      {/* Input: Phone */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="phone">Phone Number</label>
      <input
        className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
        id="phone"
        placeholder="(555) 123-4567"
        type="tel"
        value={form.phone}
        onChange={(e) => update("phone", e.target.value)}
      />
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
      <select
        className="w-full h-touch-target appearance-none rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow pr-xl"
        id="source"
        value={form.source}
        onChange={(e) => update("source", e.target.value as LeadSource)}
      >
      <option value="website">Website Form</option>
      <option value="referral">Referral</option>
      <option value="trade_show">Trade Show</option>
      <option value="cold_call">Cold Call</option>
      <option value="event">Event</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-outline">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      </div>
      {/* Input: Estimated Value */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="value">Estimated Value ($)</label>
      <input
        className={`h-touch-target rounded-lg border bg-surface px-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow ${errors.estimatedValue ? "border-error focus:ring-error" : "border-outline-variant"}`}
        id="value"
        placeholder="0.00"
        min={0}
        type="number"
        value={form.estimatedValue || ""}
        onChange={(e) => update("estimatedValue", Number(e.target.value))}
      />
      {errors.estimatedValue && <span className="font-body-sm text-body-sm text-error">{errors.estimatedValue}</span>}
      </div>
      {/* Select: Status */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="status">Status</label>
      <div className="relative">
      <select
        className="w-full h-touch-target appearance-none rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow pr-xl"
        id="status"
        value={form.status}
        onChange={(e) => update("status", e.target.value as LeadStatus)}
      >
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="qualified">Qualified</option>
      <option value="proposal">Proposal</option>
      <option value="negotiating">Negotiating</option>
      <option value="won">Won</option>
      <option value="lost">Lost</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-outline">
      <span className="material-symbols-outlined">expand_more</span>
      </div>
      </div>
      </div>
      {/* Input: Date */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="date">Next Action Date</label>
      <input
        className="h-touch-target rounded-lg border border-outline-variant bg-surface px-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
        id="date"
        type="date"
        value={form.nextActionDate}
        onChange={(e) => update("nextActionDate", e.target.value)}
      />
      </div>
      </div>
      </section>
      {/* Section 3: Notes */}
      <section className="bg-surface border border-surface-variant rounded-xl p-lg">
      <h2 className="font-h3 text-h3 text-on-surface mb-md">Additional Information</h2>
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="notes">Next Action / Notes</label>
      <textarea
        className="rounded-lg border border-outline-variant bg-surface p-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-y"
        id="notes"
        placeholder="Enter details about next steps or context..."
        rows={4}
        value={form.notes}
        onChange={(e) => update("notes", e.target.value)}
      ></textarea>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
