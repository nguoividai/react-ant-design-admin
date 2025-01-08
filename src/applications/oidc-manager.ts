import { UserManager } from "oidc-client-ts";
import { oidcConfig } from "../config/oidc";

class OIDCManager {
  private userManager: UserManager;

  constructor() {
    this.userManager = new UserManager(oidcConfig);
  }

  public login = () => {
    this.userManager.signinRedirect();
  };

  public logout = () => {
    this.userManager.signoutRedirect();
  };

  public getUser = async () => {
    return this.userManager.getUser();
  };

  public handleCallback = async () => {
    const user = await this.userManager.signinRedirectCallback();
    return user;
  };
}

const oidcManager = new OIDCManager();

export default oidcManager;
