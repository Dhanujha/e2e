import { Route } from "./RouterConfig";
import history from "../history";

export function Navigate(route, params) {
  let path = route.path;
  for (var key in params) {
    if (!params.hasOwnProperty(key)) {
      continue;
    }
    path = path.replace(key, params[key]);
  }
  history.push(path);
}
