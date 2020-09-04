import React, { useState, createContext } from "react";

const defaultAppBarContext = {
  title: "",
  setTitle: () => {},
};

export const AppBarContext = createContext(defaultAppBarContext);

// Create a provider for components to consume and subscribe to changes
export const AppBarContextProvider = (props) => {
  const [title, setTitle] = useState("");

  return (
    <AppBarContext.Provider value={{ title, setTitle }}>
      {props.children}
    </AppBarContext.Provider>
  );
};
