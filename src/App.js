import "rsuite/dist/styles/rsuite-default.css";
import "./Style/main.scss";
import { Switch } from "react-router";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoutes";
import { ProfileProvider } from "./context/profile.context";

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Switch>
          <PublicRoute path="/signin">
            <SignIn />
          </PublicRoute>

          <PrivateRoute>
            <Home />
          </PrivateRoute>
        </Switch>
      </ProfileProvider>
    </div>
  );
}

export default App;
