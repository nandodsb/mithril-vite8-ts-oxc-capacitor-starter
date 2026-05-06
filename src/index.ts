import m from "mithril";
import { App } from "./App";
import "./global.css";
import { Home } from "./Home";
import { Layout } from "./Layout";

const mountNode = document.querySelector("#app");
if (mountNode) {
  m.route(mountNode, "/", {
    "/": {
      render: () => m(Layout, m(App)),
    },
    "/home": {
      render: () => m(Layout, m(Home)),
    },
  });
}
