import { useState, useCallback, useEffect } from "react";
import type {
  Lead,
  LeadStatus,
  LeadSource,
  AppScreen,
  AppSettings,
  UserProfile,
  Notification,
} from "../types/domain";
import {
  loadFromStorage,
  saveToStorage,
  clearStorage,
  isStorageAvailable,
  StorageError,
} from "../utils/storage";

export type AppState = {
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
  storageError: { code: string; message: string } | null;
  editingLeadId: string | null;
};

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

const defaultSettings: AppSettings = {
  density: "comfortable",
  currency: "USD",
  criticalAlerts: true,
  dailySummary: false,
  timezone: "auto",
  criticalZoneAlerts: true,
};

const defaultProfile: UserProfile = {
  firstName: "Elias",
  lastName: "Vance",
  title: "Lead Agronomist",
  sector: "Sector 4",
  email: "elias.vance@ecogrowth.ops",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAb78i2ofgdfnhsqYdRWC6WKGBXcnJfBVBnjOG2GDzqM0AJPmK5fOJTU-CorIotyMby4YbHLFz9ZgpB6ry5e1zpRMfs29LjPzhPA8HMlmG3OlT6pLB2HL_EAnETyuxJLa-KoGlXEJqCpcrIE1otoRUzSanAUe5kg1QYfIiWFpQ01TKAUWkJgkW7gUoJj3K7u7WFs3g8y9OHdrr1EbMFGKAe_t8QYIk7npotZE-zcAbOpn6EJNqhytO87Z5FC2HmrQBBsdmK3PcQIxFh",
  status: "active",
};

const defaultNotifications: Notification[] = [
  {
    id: generateId(),
    title: "Zone B Temperature Alert",
    message: "Temperature exceeded 28°C threshold for 15 minutes.",
    type: "warning",
    read: false,
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: generateId(),
    title: "Filter Replacement Due",
    message: "Zone A water filter requires replacement within 48 hours.",
    type: "info",
    read: false,
    timestamp: new Date(Date.now() - 86400000).toISOString(),
  },
];

const defaultLeads: Lead[] = [
  {
    id: generateId(),
    firstName: "Sarah",
    lastName: "Jenkins",
    company: "AgriTech Solutions",
    email: "sarah.j@agritech.com",
    phone: "(555) 101-2233",
    source: "trade_show",
    estimatedValue: 45000,
    status: "new",
    nextActionDate: "2024-06-15",
    notes: "Interested in full automation suite. Follow up after trade show.",
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    updatedAt: new Date(Date.now() - 604800000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "Marcus",
    lastName: "Rodriguez",
    company: "Valley Park Farms",
    email: "m.rodriguez@valleypark.io",
    phone: "(555) 204-5566",
    source: "website",
    estimatedValue: 12500,
    status: "contacted",
    nextActionDate: "2024-06-10",
    notes: "Requested sensor grid pricing. Sent proposal on Monday.",
    createdAt: new Date(Date.now() - 1209600000).toISOString(),
    updatedAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "Elena",
    lastName: "Lutea",
    company: "Botanix Research",
    email: "elena@botanix.net",
    phone: "(555) 307-8899",
    source: "referral",
    estimatedValue: 85200,
    status: "qualified",
    nextActionDate: "2024-06-20",
    notes: "High-value prospect from existing client referral. Ready for demo.",
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "David",
    lastName: "Chen",
    company: "Apex AgriTech",
    email: "david.c@apexagritech.com",
    phone: "(555) 412-3344",
    source: "trade_show",
    estimatedValue: 45000,
    status: "new",
    nextActionDate: "2024-06-18",
    notes: "Met at Midwest Ag Expo. Wants zone automation pricing.",
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    updatedAt: new Date(Date.now() - 518400000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "Verdant",
    lastName: "Systems",
    company: "Verdant Systems",
    email: "contact@verdantsystems.com",
    phone: "(555) 555-0199",
    source: "cold_call",
    estimatedValue: 100000,
    status: "new",
    nextActionDate: "2024-06-25",
    notes: "Enterprise prospect. Multiple greenhouse locations.",
    createdAt: new Date(Date.now() - 345600000).toISOString(),
    updatedAt: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "Michael",
    lastName: "Kowalski",
    company: "SunLight Farms",
    email: "mk@sunlightfarms.co",
    phone: "(555) 678-9012",
    source: "referral",
    estimatedValue: 55000,
    status: "contacted",
    nextActionDate: "2024-06-12",
    notes: "Follow-up call scheduled. Interested in subscription model.",
    createdAt: new Date(Date.now() - 950400000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: generateId(),
    firstName: "Elena",
    lastName: "Rivers",
    company: "Global Botanics",
    email: "e.rivers@globalbotanics.com",
    phone: "(555) 789-0123",
    source: "website",
    estimatedValue: 210000,
    status: "negotiating",
    nextActionDate: "2024-06-08",
    notes: "Final contract review in progress. Legal team reviewing terms.",
    createdAt: new Date(Date.now() - 1814400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export interface AppActions {
  navigateTo: (screen: AppScreen, editingLeadId?: string | null) => void;
  goBack: () => void;
  addLead: (lead: Omit<Lead, "id" | "createdAt" | "updatedAt">) => void;
  updateLead: (id: string, lead: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (filter: LeadStatus | "") => void;
  setSourceFilter: (filter: LeadSource | "") => void;
  toggleProfile: () => void;
  markNotificationRead: (id: string) => void;
  retryStorage: () => void;
  resetStorage: () => void;
  dismissStorageError: () => void;
}

export function useAppState() {
  const [screen, setScreen] = useState<AppScreen>("leads");
  const [previousScreen, setPreviousScreen] = useState<AppScreen>("leads");
  const [leads, setLeads] = useState<Lead[]>(defaultLeads);
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [notifications, setNotifications] = useState<Notification[]>(defaultNotifications);
  const [searchQuery, setSearchQueryState] = useState("");
  const [statusFilter, setStatusFilterState] = useState<LeadStatus | "">("");
  const [sourceFilter, setSourceFilterState] = useState<LeadSource | "">("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [storageError, setStorageError] = useState<{ code: string; message: string } | null>(null);
  const [editingLeadId, setEditingLeadId] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    if (!isStorageAvailable()) {
      setStorageError({ code: "ERR_STORAGE_UNAVAILABLE", message: "localStorage is not available in this browser" });
      return;
    }
    try {
      const stored = loadFromStorage();
      if (stored) {
        setLeads(stored.leads ?? defaultLeads);
        setSettings(stored.settings ?? defaultSettings);
        setProfile(stored.profile ?? defaultProfile);
        setNotifications(stored.notifications ?? defaultNotifications);
      }
    } catch (e) {
      setStorageError({
        code: e instanceof StorageError ? e.code : "ERR_READ_FAILED",
        message: e instanceof Error ? e.message : "Failed to load stored data",
      });
    }
  }, []);

  // Persist to localStorage whenever relevant state changes
  useEffect(() => {
    if (storageError || !isStorageAvailable()) return;
    try {
      saveToStorage({
        version: 1,
        leads,
        settings,
        profile,
        notifications,
      });
    } catch (e) {
      setStorageError({
        code: e instanceof StorageError ? e.code : "ERR_WRITE_FAILED",
        message: e instanceof Error ? e.message : "Failed to save data",
      });
    }
  }, [leads, settings, profile, notifications, storageError]);

  const navigateTo = useCallback(
    (next: AppScreen, editId?: string | null) => {
      setPreviousScreen(screen);
      setScreen(next);
      setEditingLeadId(editId ?? null);
    },
    [screen]
  );

  const goBack = useCallback(() => {
    setScreen(previousScreen);
    setEditingLeadId(null);
  }, [previousScreen]);

  const addLead = useCallback(
    (leadData: Omit<Lead, "id" | "createdAt" | "updatedAt">) => {
      const now = new Date().toISOString();
      const newLead: Lead = {
        ...leadData,
        id: generateId(),
        createdAt: now,
        updatedAt: now,
      };
      setLeads((prev) => [newLead, ...prev]);
    },
    []
  );

  const updateLead = useCallback((id: string, updates: Partial<Lead>) => {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === id ? { ...l, ...updates, updatedAt: new Date().toISOString() } : l
      )
    );
  }, []);

  const deleteLead = useCallback((id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  }, []);

  const updateProfile = useCallback((partial: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...partial }));
  }, []);

  const setSearchQuery = useCallback((q: string) => {
    setSearchQueryState(q);
  }, []);

  const setStatusFilter = useCallback((f: LeadStatus | "") => {
    setStatusFilterState(f);
  }, []);

  const setSourceFilter = useCallback((f: LeadSource | "") => {
    setSourceFilterState(f);
  }, []);

  const toggleProfile = useCallback(() => {
    setProfileOpen((prev) => !prev);
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const retryStorage = useCallback(() => {
    setStorageError(null);
    try {
      const stored = loadFromStorage();
      if (stored) {
        setLeads(stored.leads ?? defaultLeads);
        setSettings(stored.settings ?? defaultSettings);
        setProfile(stored.profile ?? defaultProfile);
        setNotifications(stored.notifications ?? defaultNotifications);
      }
      setScreen(previousScreen);
    } catch (e) {
      setStorageError({
        code: e instanceof StorageError ? e.code : "ERR_READ_FAILED",
        message: e instanceof Error ? e.message : "Failed to retry storage",
      });
    }
  }, [previousScreen]);

  const resetStorage = useCallback(() => {
    try {
      clearStorage();
      setLeads(defaultLeads);
      setSettings(defaultSettings);
      setProfile(defaultProfile);
      setNotifications(defaultNotifications);
      setStorageError(null);
    } catch (e) {
      setStorageError({
        code: e instanceof StorageError ? e.code : "ERR_CLEAR_FAILED",
        message: e instanceof Error ? e.message : "Failed to clear storage",
      });
    }
  }, []);

  const dismissStorageError = useCallback(() => {
    setStorageError(null);
    setScreen(previousScreen);
  }, [previousScreen]);

  const state = {
    screen,
    previousScreen,
    leads,
    settings,
    profile,
    notifications,
    searchQuery,
    statusFilter,
    sourceFilter,
    profileOpen,
    storageError,
    editingLeadId,
  };

  const actions: AppActions = {
    navigateTo,
    goBack,
    addLead,
    updateLead,
    deleteLead,
    updateSettings,
    updateProfile,
    setSearchQuery,
    setStatusFilter,
    setSourceFilter,
    toggleProfile,
    markNotificationRead,
    retryStorage,
    resetStorage,
    dismissStorageError,
  };

  return { state, actions } as const;
}
