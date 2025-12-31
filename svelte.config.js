import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			rehypePlugins: [rehypeSlug]
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
