import m from "mithril";
import { Carrousel } from "./Carrousel";

export function Home() {
  return {
    view: () => {
      return (
        <div className="flex justify-center items-center flex-col">
          <p className="text-teal-500 font-bold text-5xl py-4">Home</p>
          {m(Carrousel)}
        </div>
      );
    },
  };
}
