import { Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path={"/signup"}>
        <Signup />
      </Route>
      <Route path={"/home"}>
        <Home />
      </Route>
      <Route path={"/"} exact>
        <Signin />
      </Route>
    </Switch>
  );
}

export default App;
