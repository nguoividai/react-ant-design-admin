import { UserManagerSettings, WebStorageStateStore } from "oidc-client-ts";
import CookieStorage from "../applications/cookie-storage";

// Cấu hình OIDC
export const oidcConfig: UserManagerSettings = {
  authority: "https://demo-webapi.reesoft.vn:5001",
  client_id: "60a75bbf-4347-4495-81b7-d5e475bb64b1",
  // client_secret: 'r8nuJZvfqRinB0bdoQax',
  response_type: "code",
  scope: "reesoft.public reesoft.private openid email profile offline_access",
  redirect_uri: "http://localhost:5173/signin-oidc",
  post_logout_redirect_uri: "http://localhost:5173/signout-callback-oidc",
  userStore: new WebStorageStateStore({ store: CookieStorage }),
};
