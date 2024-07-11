import { Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Inbox from "./pages/Inbox";
import Starred from "./pages/Starred";
import Snoozed from "./pages/Snoozed";
import Important from "./pages/Important";
import Drafts from "./pages/Drafts";
import Sent from "./pages/Sent";
import MessageWindow from "./components/MessageWindow";
import { useContext } from "react";
import UiContext from "./context/UiContext";
function App() {
  const isLoggedIn = true;
  const { showMessageWindow } = useContext(UiContext);
  return (
    <div className="relative">
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <Sidebar />}
      {showMessageWindow && <MessageWindow />}
      <Switch>
        <Route path={"/signup"}>
          <Signup />
        </Route>
        <Route path={"/inbox"}>
          <Inbox />
        </Route>
        <Route path={"/starred"}>
          <Starred />
        </Route>
        <Route path={"/snoozed"}>
          <Snoozed />
        </Route>
        <Route path={"/important"}>
          <Important />
        </Route>
        <Route path={"/drafts"}>
          <Drafts />
        </Route>
        <Route path={"/sent"}>
          <Sent />
        </Route>
        <Route path={"/"} exact>
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
