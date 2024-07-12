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
import Profile from "./components/Profile";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isOpen = useSelector((state) => state.ui.showMessageWindow);
  const profileIsOpen = useSelector((state) => state.ui.showProfileWindow);
  return (
    <div>
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <Sidebar />}
      {isOpen && <MessageWindow />}
      {profileIsOpen && <Profile />}
      <Switch>
        <Route path={"/signup"}>
          <Signup />
        </Route>
        {isLoggedIn && (
          <Route path={"/inbox"}>
            <Inbox />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/starred"}>
            <Starred />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/snoozed"}>
            <Snoozed />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/important"}>
            <Important />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/drafts"}>
            <Drafts />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/sent"}>
            <Sent />
          </Route>
        )}
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
