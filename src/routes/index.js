import React from "react";
import { Switch } from "react-router";

import { ALL_ROUTES } from "./RouterConfig";
import Page from "./Page";

export const RoutedContent = () => {
  return (
    <Switch>
      {Object.values(ALL_ROUTES).map((route) => {
        return (
          <Page
            title={route.title}
            key={route.path}
            exact={route.exact}
            component={route.component}
            path={route.path}
          />
        );
      })}
    </Switch>
  );
};
