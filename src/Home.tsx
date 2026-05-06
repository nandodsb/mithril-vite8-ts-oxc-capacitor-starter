import m from "mithril";
import { Carrousel } from "./Carrousel";

export function Home() {
  return {
    view: () => {
      return (
        <div className="flex justify-center items-center flex-col">
          <div className="flex  justify-evenly items-center text-teal-500">
            <button
              class=" hover:text-teal-500/50"
              onclick={() => {
                m.route.set("/");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-left-icon lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
			 <p className="flex justify-between items-center text-teal-500 font-bold text-3xl py-4"> Home</p>
		  </div>
          {m(Carrousel)}
        </div>
      );
    },
  };
}
