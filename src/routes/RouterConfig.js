import * as React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

class Routes {
  static create(routes){
    return routes;
  }
}

export const ALL_ROUTES = Routes.create({
  SignIn: {
    path: "/login",
    exact: true,
    title: "Login or Signup",
    component: Login,
  },
  SignUp: {
    path: "/register",
    exact: true,
    title: "Login or Signup",
    component: Register,
  },
  Home: {
    path: "/",
    exact: false,
    title: "",
    component: Home,
  },
});

export const NOTARY_PANEL_ROUTES = Routes.create({
  
});

