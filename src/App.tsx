import { useMemo } from "react";
import { AppContext } from "./contexts/AppContext";
import { useAppState } from "./hooks/useAppState";

import { EmptyState } from "./screens/EmptyState";
import { StorageErrorState } from "./screens/StorageErrorState";
import { LeadsDashboard } from "./screens/LeadsDashboard";
import { PipelineBoard } from "./screens/PipelineBoard";
import { InsightsDashboard } from "./screens/InsightsDashboard";
import { SettingsScreen } from "./screens/SettingsScreen";
import { ProfilePanel } from "./screens/ProfilePanel";
import { LeadCreateeditForm } from "./screens/LeadCreateeditForm";

export default function App() {
  const { state, actions } = useAppState();

  const currentScreen = useMemo(() => {
    if (state.storageError) return <StorageErrorState />;
    switch (state.screen) {
      case "leads":
        return state.leads.length === 0 ? <EmptyState /> : <LeadsDashboard />;
      case "pipeline":
        return <PipelineBoard />;
      case "insights":
        return <InsightsDashboard />;
      case "settings":
        return <SettingsScreen />;
      case "create-lead":
      case "edit-lead":
        return <LeadCreateeditForm />;
      case "empty":
        return <EmptyState />;
      case "storage-error":
        return <StorageErrorState />;
      default:
        return state.leads.length === 0 ? <EmptyState /> : <LeadsDashboard />;
    }
  }, [state.screen, state.leads.length, state.storageError]);

  return (
    <AppContext.Provider value={{ state, actions }}>
      <div data-setfarm-root="baseline" className="min-h-screen bg-surface text-on-surface">
        {currentScreen}
        {state.profileOpen && <ProfilePanel />}
      </div>
    </AppContext.Provider>
  );
}
