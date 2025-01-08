// useStore.js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LayoutStore } from "../types/layout";

// Sử dụng middleware persist để lưu trạng thái vào localStorage
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
