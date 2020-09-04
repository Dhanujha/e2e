import React, { FunctionComponent, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { AppBarContext } from "../context/AppBar";

const Page = (props) => {
  const { setTitle } = useContext(AppBarContext);
  useEffect(() => {
    if (props.title !== "") {
      document.title = props.title;
      setTitle(props.title);
    }
  });

  const { title, ...rest } = props;
  return <Route {...rest} />;
};

export default Page;
