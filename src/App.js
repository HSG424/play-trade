import { Switch, Route } from "react-router-dom";
import "./App.scss";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
    </Switch>
  );
}

export default App;
