import m, { Component } from "mithril";

export const Layout: Component = {
  view: (vnode) => {
    return m("div", { class: "min-h-screen grid grid-col justify-center  md:flex" }, [
      m("aside", { class: "invisible w-full bg-base-200 md:visible md:h-screen md:w-1/4" }, "Left"),
      m("main", { class: "w-full h-full p-2 md:w-2/4 md:h-screen" }, vnode.children),
      m(
        "aside",
        { class: "invisible w-full bg-base-200 md:visible md:h-screen md:w-1/4 " },
        "Right",
      ),
    ]);
  },
};
