import { Route } from "react-router-dom";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <Route path={"/"}>
        <Signin />
      </Route>
    </>
  );
}

export default App;
