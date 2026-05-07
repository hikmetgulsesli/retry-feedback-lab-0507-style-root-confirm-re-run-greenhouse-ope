export type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "negotiating" | "won" | "lost";
export type LeadSource = "website" | "referral" | "trade_show" | "cold_call" | "event";

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  source: LeadSource;
  estimatedValue: number;
  status: LeadStatus;
  nextActionDate: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export type AppScreen =
  | "leads"
  | "pipeline"
  | "insights"
  | "settings"
  | "create-lead"
  | "edit-lead"
  | "empty"
  | "storage-error";

export interface AppSettings {
  density: "comfortable" | "compact";
  currency: "USD" | "EUR" | "GBP" | "CAD";
  criticalAlerts: boolean;
  dailySummary: boolean;
  timezone: "auto" | "utc" | "est" | "pst";
  criticalZoneAlerts: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  title: string;
  sector: string;
  email: string;
  avatarUrl: string;
  status: "active" | "away" | "offline";
  timezone?: "auto" | "utc" | "est" | "pst";
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  timestamp: string;
}

export interface AppState {
  screen: AppScreen;
  previousScreen: AppScreen;
  leads: Lead[];
  settings: AppSettings;
  profile: UserProfile;
  notifications: Notification[];
  searchQuery: string;
  statusFilter: LeadStatus | "";
  sourceFilter: LeadSource | "";
  profileOpen: boolean;
  storageError: boolean;
  editingLeadId: string | null;
}
