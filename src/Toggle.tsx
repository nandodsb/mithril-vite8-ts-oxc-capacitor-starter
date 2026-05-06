// Toggle.tsx
//@ts-nocheck
import m from "mithril";
import { useState, withHooks } from "mithril-hooks";

type ToggleProps = {
  isOn?: boolean;
};

const ToggleButton = ( {isOn} : ToggleProps) => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  return m(
    "button",
    {
      class: isTurnedOn ? "btn btn-wide btn-accent" : "btn btn-wide btn-error",
      onclick: () => setIsTurnedOn((current) => !curent),
    },
    isTurnedOn ? "On" : "Off",
  );
};

export const Toggle = withHooks(ToggleButton);
