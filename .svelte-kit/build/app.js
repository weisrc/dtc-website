import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link href=\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\"\n        rel=\"stylesheet\">\n    " + head + "\n</head>\n\n<body class=\"dark:bg-gray-900 dark:text-gray-100\">\n    <div id=\"app\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

const default_settings = { paths: {"base":"","assets":"/."} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-a2a08690.js",
			css: ["/./_app/assets/start-9aa571ba.css"],
			js: ["/./_app/start-a2a08690.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/singletons-bb9012b7.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#app",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"hero-dots.svg","size":20718,"type":"image/svg+xml"},{"file":"hero-image.jpg","size":317203,"type":"image/jpeg"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/quote-requested\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/quote-requested.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/services\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/services.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/quote\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/quote.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/quote-requested.svelte": () => import("..\\..\\src\\routes\\quote-requested.svelte"),"src/routes/services.svelte": () => import("..\\..\\src\\routes\\services.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/quote.svelte": () => import("..\\..\\src\\routes\\quote.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-fd551ceb.js","css":["/./_app/assets/pages/__layout.svelte-2c13b87e.css"],"js":["/./_app/pages/__layout.svelte-fd551ceb.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/links-1a771544.js","/./_app/chunks/LinkButton-d31108c8.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-e9da64e0.js","css":[],"js":["/./_app/error.svelte-e9da64e0.js","/./_app/chunks/vendor-2f7a998b.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-f41b6e2b.js","css":[],"js":["/./_app/pages/index.svelte-f41b6e2b.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/LinkButton-d31108c8.js","/./_app/chunks/links-1a771544.js","/./_app/chunks/services-eeb3c769.js","/./_app/chunks/people-c7c3e1c6.js"],"styles":null},"src/routes/quote-requested.svelte":{"entry":"/./_app/pages/quote-requested.svelte-248181ae.js","css":[],"js":["/./_app/pages/quote-requested.svelte-248181ae.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/utils-3a7b53c0.js"],"styles":null},"src/routes/services.svelte":{"entry":"/./_app/pages/services.svelte-162befa1.js","css":[],"js":["/./_app/pages/services.svelte-162befa1.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/services-eeb3c769.js","/./_app/chunks/people-c7c3e1c6.js","/./_app/chunks/Checkbox-22d98cfa.js","/./_app/chunks/LinkButton-d31108c8.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-bab485b4.js","css":[],"js":["/./_app/pages/about.svelte-bab485b4.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/people-c7c3e1c6.js"],"styles":null},"src/routes/quote.svelte":{"entry":"/./_app/pages/quote.svelte-4b7e7909.js","css":[],"js":["/./_app/pages/quote.svelte-4b7e7909.js","/./_app/chunks/vendor-2f7a998b.js","/./_app/chunks/singletons-bb9012b7.js","/./_app/chunks/services-eeb3c769.js","/./_app/chunks/people-c7c3e1c6.js","/./_app/chunks/Checkbox-22d98cfa.js","/./_app/chunks/LinkButton-d31108c8.js","/./_app/chunks/utils-3a7b53c0.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}