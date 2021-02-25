import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./app";

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-root");
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
export default function mount(
  el,
  { onNavigate, defaultHistory, initialPath } = {}
) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      console.log("parent navigate", nextPathname, pathname);

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
}
