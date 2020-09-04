import * as React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Important from "../pages/Important";
import Completed from "../pages/Completed";
import AllTasks from "../pages/AllTasks";
import DueToday from "../pages/DueToday";
import Trash from "../pages/Trash";

class Routes {
  static create(routes) {
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
    path: "/user",
    exact: false,
    title: "",
    component: Home,
  },
});

export const PANEL_ROUTES = Routes.create({
  Important: {
    path: "/user/important",
    exact: true,
    title: "Important",
    component: Important,
  },
  Completed: {
    path: "/user/completed",
    exact: true,
    title: "Completed",
    component: Completed,
  },
  AllTasks: {
    path: "/user/all-tasks",
    exact: true,
    title: "All Tasks",
    component: AllTasks,
  },
  DueToday: {
    path: "/user/due-today",
    exact: true,
    title: "Due Today",
    component: DueToday,
  },
  Trash: {
    path: "/user/trash",
    exact: true,
    title: "Trash",
    component: Trash,
  },
});
