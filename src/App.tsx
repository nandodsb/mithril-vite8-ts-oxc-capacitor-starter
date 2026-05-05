import m from 'mithril';
import { Dock } from './Dock';
import { Toggle } from './Toggle';

let count = 0;
export const App = () => {
	// return {
	// 	view: () => {
	// 		return <div>A</div>;
	// 	}
	// };
	
	return {
		
		view: () => {			
			return m(
				'div',
				{
					class: 'flex justify-center items-center flex-col gap-2'
				},
				[
					m(
						'h1',
						{ class: 'text-teal-500 font-bold' },
						'Mithril Capacitor JS Vite 8 OXC App'
					),
					 m("button", {
                onclick: function() {count++}, class: 'btn btn-wide btn-primary'
            }, count + " clicks"),
			 m("button", {
                onclick: function() {m.route.set('/home')}, class: 'btn btn-wide btn-secondary'
            }, "Home"),
			m(Toggle,  { isOn: true })
				],
			m(Dock)
			);
		}
	};
};
