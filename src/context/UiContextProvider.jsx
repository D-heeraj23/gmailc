import UiContext from "./UiContext";
import { useState } from "react";

const UiContextProvider = (props) => {
  const [showMessageWindow, setMessageWindow] = useState(false);

  const openMessageWindow = () => {
    setMessageWindow(true);
  };

  const closeMessageWindow = () => {
    setMessageWindow(false);
  };

  return (
    <UiContext.Provider
      value={{
        showMessageWindow,
        openMessageWindow,
        closeMessageWindow,
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
