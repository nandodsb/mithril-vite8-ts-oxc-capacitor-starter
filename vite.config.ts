import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss()],
	oxc: {
		jsx: { runtime: 'classic', pragma: 'm', pragmaFrag: "'['" }
	},
	
});
