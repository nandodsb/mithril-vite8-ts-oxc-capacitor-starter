//@ts-nocheck
import m from 'mithril';
export const Layout = {
	view: ({ children }) => {
		return m('main', { class: 'min-h-screen flex items-center justify-center' },
				children			
			 );
	}
};