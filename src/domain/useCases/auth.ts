import { create } from "zustand";
import { AuthStore } from "../types/auth";
import { User } from "oidc-client-ts";

const useAuth = create<AuthStore>((set) => ({
  loading: false,
  user: undefined,
  setUser: (user?: User) => set({ user }),
  setLoading: (value: boolean) => set({ loading: value }),
}));

export default useAuth;
