import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      {authCtx.isLoggedIn && (
        <Route path="/" exact>
          <HomePage />
        </Route>
      )}

      <Route path="/auth">
        <AuthPage />
      </Route>

      {authCtx.isLoggedIn && (
        <Route path="/settings">
          <SettingsPage />
        </Route>
      )}
      <Route path="*">
        <Redirect to="/auth" />
      </Route>
    </Switch>
  );
}

export default App;
