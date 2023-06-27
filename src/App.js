import { Switch } from "react-router";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoutes";

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
