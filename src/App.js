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
function App() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <Navbar />}
      {isLoggedIn && <Sidebar />}
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

// const [messages, setMessages] = useState([]);
// const [input, setInput] = useState("");

// const sendMessage = () => {
//   if (input.trim() === "") return;

//   const newMessage = {
//     text: input,
//     timestamp: new Date(),
//   };

//   setMessages([...messages, newMessage]);
//   setInput("");
// };

// const handleInputChange = (event) => {
//   setInput(event.target.value);
// };

// const formatTime = (date) => {
//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// };

/* <div>
        <h1>Real-Time Messaging App</h1>
        <div>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              <span>{message.text}</span>{" "}
              <span>{formatTime(message.timestamp)}</span>
            </div>
          ))}
        </div>
      </div> */
