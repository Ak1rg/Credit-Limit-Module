import { create } from "zustand";
import type { ApplicationStatus } from "../types/types";

interface TableState {
    filterValue: ApplicationStatus;
    seachValue:string;
    changeFilter: (value:ApplicationStatus) => void;
    changeSearch: (value:string) => void;
}

const useTableStore = create<TableState>((set) => ({
    filterValue:"Все",
    seachValue:"",
    changeFilter: (value) => {
        set({ filterValue: value })
        console.log(value)
    },
    changeSearch: (value) => set({ seachValue: value }),
}));

export const useChangeTableFilter = () => useTableStore().changeFilter;
export const useChangeTableSearch = () => useTableStore().changeSearch;
export const useTableFilter = () => useTableStore((state) => state.filterValue);
export const useTableSearch = () => useTableStore((state) => state.seachValue)