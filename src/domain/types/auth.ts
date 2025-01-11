import { User } from "oidc-client-ts";

export type AuthStore = {
  loading: boolean;
  user?: User;
  setUser: (user?: User) => void;
  setLoading: (loading: boolean) => void;
};
