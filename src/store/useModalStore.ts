import { create } from "zustand";
import type { ClientApplication, SessionLogItem } from "../types/types";

interface ApplicationsState {
    limit: number;
    logs: SessionLogItem[];
    selectedClient:ClientApplication|null;

    addLog: (message: string) => void;
    setSelectedClient: (client:ClientApplication|null) => void;
    setLimit: (limit:number) => void;
}

export const useApplicationsStore = create<ApplicationsState>((set) => ({
    limit: 0,
    logs: [],
    selectedClient:null,

    addLog: (message) =>
        set((state) => ({
        logs: [
            ...state.logs,
            { id: crypto.randomUUID(), message, date: Date.now() },
        ],
    })),
    setSelectedClient: (client) => set({ selectedClient: client }),
    setLimit: (limit) => set({ limit }),
}));

export const useSelectClient = () => useApplicationsStore().setSelectedClient;
export const useSelectedClientValue = () => useApplicationsStore((state) => state.selectedClient);
export const useAddLog = () => useApplicationsStore().addLog
export const useSetLimit = () => useApplicationsStore().setLimit;
export const useLimit = () => useApplicationsStore((state) => state.limit);
export const useLogs = () => useApplicationsStore((state) => state.logs);