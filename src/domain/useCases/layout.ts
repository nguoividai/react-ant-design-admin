import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LayoutStore } from "../types/layout";

const useLayout = create<LayoutStore>()(
  persist(
    (set) => ({
      collapsed: false,
      setCollapsed: (value: boolean) => set({ collapsed: value }),
    }),
    {
      name: "ree-soft-layout",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLayout;
