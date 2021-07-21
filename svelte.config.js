import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwindcss,
				autoprefixer
			]
		}
	}),

	kit: {
		target: '#app',
		paths: {base: "/dtc-website"},
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null
        })
	}
};

export default config;
