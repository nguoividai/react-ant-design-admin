import { useEffect } from "react";
import { AppRouter } from "./presentation/router/AppRouter";
import oidcManager from "./applications/oidc-manager";

function App() {
  useEffect(() => {
    const login = async () => {
      const user = await oidcManager.getUser();
      if (!user) oidcManager.login();
      console.log("🚀 ~ login ~ user:", user);
    };

    login();
  }, []);

  return <AppRouter />;
}

export default App;
