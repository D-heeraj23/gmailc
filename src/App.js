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
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpen = useSelector((state) => state.ui.showMessageWindow);

  return (
    <div>
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <Sidebar />}
      {isOpen && <MessageWindow />}
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
        <Route path={"*"}>
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
