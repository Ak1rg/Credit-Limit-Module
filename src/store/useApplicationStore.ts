import { create } from "zustand";
import type { ClientApplication } from "../types/types";

interface ApplicationsState {
  applications: ClientApplication[];
  loading: boolean;
  error: string | null;

  setApplications: (apps: ClientApplication[]) => void;
  updateApplication: (app: ClientApplication) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

export const useApplicationsStore = create<ApplicationsState>((set) => ({
  applications: [],
  loading: false,
  error: null,

  setApplications: (applications) => {
    set({ applications });
    console.log(applications)
  },

  updateApplication: (updated) =>
    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === updated.id ? updated : app
      ),
    })),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export const useApplicationClients = () => useApplicationsStore(state => state.applications);
export const useUpdateApplication = () => useApplicationsStore().updateApplication;
export const useLoadingError = () => useApplicationsStore(state => state.error);