// Toggle.tsx
//@ts-nocheck
import m from 'mithril';
import { useState, withHooks } from 'mithril-hooks';

type ToggleProps = {
  isOn?: boolean;
};

export const Toggle = withHooks(({ isOn }: ToggleProps) => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);

  return (
    m('button', {class: "btn btn-wide btn-accent", onclick: () => setIsTurnedOn(current => !current)}, isTurnedOn ? 'On' : 'Off') 
)});