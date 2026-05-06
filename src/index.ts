import m from "mithril";
import { App } from "./App";
import "./global.css";
import { Home } from "./Home";

const mountNode = document.querySelector("#app");
if (mountNode) {
  m.route(mountNode, "/", {
    "/": App,
    "/home": Home,
  });
}
