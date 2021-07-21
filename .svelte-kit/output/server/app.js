import { respond } from "@sveltejs/kit/ssr";
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
Promise.resolve();
const boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);
  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += " " + classes_to_add;
    }
  }
  let str = "";
  Object.keys(attributes).forEach((name2) => {
    if (invalid_attribute_name_character.test(name2))
      return;
    const value = attributes[name2];
    if (value === true)
      str += " " + name2;
    else if (boolean_attributes.has(name2.toLowerCase())) {
      if (value)
        str += " " + name2;
    } else if (value != null) {
      str += ` ${name2}="${value}"`;
    }
  });
  return str;
}
const escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function escape_attribute_value(value) {
  return typeof value === "string" ? escape(value) : value;
}
function escape_object(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }
  return result;
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name2) {
  if (!component || !component.$$render) {
    if (name2 === "svelte:component")
      name2 += " this={...}";
    throw new Error(`<${name2}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name2, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name2}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-9z6sc{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$1 = {
  code: "#svelte-announcer.svelte-9z6sc{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\t-webkit-clip-path: inset(50%);\\n\\t\\t        clip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}</style>"],"names":[],"mappings":"AAsDC,iBAAiB,aAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,iBAAiB,CAAE,MAAM,GAAG,CAAC,CACrB,SAAS,CAAE,MAAM,GAAG,CAAC,CAC7B,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$1);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-9z6sc"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="/favicon.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"\n        rel="stylesheet">\n    ' + head + '\n</head>\n\n<body class="dark:bg-gray-900 dark:text-gray-100">\n    <div id="app">' + body + "</div>\n</body>\n\n</html>";
let options = null;
const default_settings = { paths: { "base": "", "assets": "/." } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-a2a08690.js",
      css: ["/./_app/assets/start-9aa571ba.css"],
      js: ["/./_app/start-a2a08690.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/singletons-bb9012b7.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id2) => "/./_app/" + entry_lookup[id2],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      if (error2.frame) {
        console.error(error2.frame);
      }
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#app",
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{ "file": "favicon.png", "size": 1571, "type": "image/png" }, { "file": "hero-dots.svg", "size": 20718, "type": "image/svg+xml" }, { "file": "hero-image.jpg", "size": 317203, "type": "image/jpeg" }],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/quote-requested\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/quote-requested.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/services\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/services.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/quote\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/quote.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve }) => resolve(request)),
  serverFetch: hooks.serverFetch || fetch
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/quote-requested.svelte": () => Promise.resolve().then(function() {
    return quoteRequested;
  }),
  "src/routes/services.svelte": () => Promise.resolve().then(function() {
    return services;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/quote.svelte": () => Promise.resolve().then(function() {
    return quote;
  })
};
const metadata_lookup = { "src/routes/__layout.svelte": { "entry": "/./_app/pages/__layout.svelte-fd551ceb.js", "css": ["/./_app/assets/pages/__layout.svelte-2c13b87e.css"], "js": ["/./_app/pages/__layout.svelte-fd551ceb.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/links-1a771544.js", "/./_app/chunks/LinkButton-d31108c8.js"], "styles": null }, ".svelte-kit/build/components/error.svelte": { "entry": "/./_app/error.svelte-e9da64e0.js", "css": [], "js": ["/./_app/error.svelte-e9da64e0.js", "/./_app/chunks/vendor-2f7a998b.js"], "styles": null }, "src/routes/index.svelte": { "entry": "/./_app/pages/index.svelte-f41b6e2b.js", "css": [], "js": ["/./_app/pages/index.svelte-f41b6e2b.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/LinkButton-d31108c8.js", "/./_app/chunks/links-1a771544.js", "/./_app/chunks/services-eeb3c769.js", "/./_app/chunks/people-c7c3e1c6.js"], "styles": null }, "src/routes/quote-requested.svelte": { "entry": "/./_app/pages/quote-requested.svelte-248181ae.js", "css": [], "js": ["/./_app/pages/quote-requested.svelte-248181ae.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/utils-3a7b53c0.js"], "styles": null }, "src/routes/services.svelte": { "entry": "/./_app/pages/services.svelte-162befa1.js", "css": [], "js": ["/./_app/pages/services.svelte-162befa1.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/services-eeb3c769.js", "/./_app/chunks/people-c7c3e1c6.js", "/./_app/chunks/Checkbox-22d98cfa.js", "/./_app/chunks/LinkButton-d31108c8.js"], "styles": null }, "src/routes/about.svelte": { "entry": "/./_app/pages/about.svelte-bab485b4.js", "css": [], "js": ["/./_app/pages/about.svelte-bab485b4.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/people-c7c3e1c6.js"], "styles": null }, "src/routes/quote.svelte": { "entry": "/./_app/pages/quote.svelte-4b7e7909.js", "css": [], "js": ["/./_app/pages/quote.svelte-4b7e7909.js", "/./_app/chunks/vendor-2f7a998b.js", "/./_app/chunks/singletons-bb9012b7.js", "/./_app/chunks/services-eeb3c769.js", "/./_app/chunks/people-c7c3e1c6.js", "/./_app/chunks/Checkbox-22d98cfa.js", "/./_app/chunks/LinkButton-d31108c8.js", "/./_app/chunks/utils-3a7b53c0.js"], "styles": null } };
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
function render$1(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const name$1 = "Dawson Technology Club";
const titles = {
  "/": `Home - ${name$1}`,
  "/about": `About - ${name$1}`,
  "/services": `Services - ${name$1}`,
  "/blog": `Blog - ${name$1}`,
  "/quote": `Get a Quote - ${name$1}`,
  "/join": `Join Us - ${name$1}`,
  "/quote-requested": `Quote requested - ${name$1}`
};
const homeLink = { href: "/", text: "Home" };
const aboutLink = { href: "/about", text: "About" };
const servicesLink = { href: "/services", text: "Services" };
const blogLink = { href: "/blog", text: "Blog" };
const joinLink = { href: "/join", text: "Join Us" };
const quoteLink = { href: "quote", text: "Get a Quote" };
const facebookLink = { href: "/", text: "Facebook" };
const instagramLink = { href: "/", text: "Instagram" };
const twitterLink = { href: "/", text: "Twitter" };
const gitHubLink = { href: "/", text: "GitHub" };
const discordLink = { href: "/", text: "Discord" };
const navLinks = [aboutLink, servicesLink, blogLink];
const infoLinks = [homeLink, ...navLinks];
const socialLinks = [facebookLink, instagramLink, twitterLink, gitHubLink, discordLink];
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var icon = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fullIcon = exports.iconDefaults = exports.minifyProps = exports.matchName = void 0;
  exports.matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  exports.minifyProps = [
    "width",
    "height",
    "top",
    "left"
  ];
  exports.iconDefaults = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    rotate: 0,
    vFlip: false,
    hFlip: false
  });
  function fullIcon(data) {
    return { ...exports.iconDefaults, ...data };
  }
  exports.fullIcon = fullIcon;
});
var name = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.validateIcon = exports.stringToIcon = void 0;
  const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
    const colonSeparated = value.split(":");
    if (value.slice(0, 1) === "@") {
      if (colonSeparated.length < 2 || colonSeparated.length > 3) {
        return null;
      }
      provider = colonSeparated.shift().slice(1);
    }
    if (colonSeparated.length > 3 || !colonSeparated.length) {
      return null;
    }
    if (colonSeparated.length > 1) {
      const name3 = colonSeparated.pop();
      const prefix = colonSeparated.pop();
      const result = {
        provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
        prefix,
        name: name3
      };
      return validate && !exports.validateIcon(result) ? null : result;
    }
    const name2 = colonSeparated[0];
    const dashSeparated = name2.split("-");
    if (dashSeparated.length > 1) {
      const result = {
        provider,
        prefix: dashSeparated.shift(),
        name: dashSeparated.join("-")
      };
      return validate && !exports.validateIcon(result) ? null : result;
    }
    if (allowSimpleName && provider === "") {
      const result = {
        provider,
        prefix: "",
        name: name2
      };
      return validate && !exports.validateIcon(result, allowSimpleName) ? null : result;
    }
    return null;
  };
  exports.stringToIcon = stringToIcon;
  const validateIcon = (icon$1, allowSimpleName) => {
    if (!icon$1) {
      return false;
    }
    return !!((icon$1.provider === "" || icon$1.provider.match(icon.matchName)) && (allowSimpleName && icon$1.prefix === "" || icon$1.prefix.match(icon.matchName)) && icon$1.name.match(icon.matchName));
  };
  exports.validateIcon = validateIcon;
});
var merge = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeIconData = void 0;
  function mergeIconData(icon$1, alias) {
    const result = { ...icon$1 };
    for (const key in icon.iconDefaults) {
      const prop = key;
      if (alias[prop] !== void 0) {
        const value = alias[prop];
        if (result[prop] === void 0) {
          result[prop] = value;
          continue;
        }
        switch (prop) {
          case "rotate":
            result[prop] = (result[prop] + value) % 4;
            break;
          case "hFlip":
          case "vFlip":
            result[prop] = value !== result[prop];
            break;
          default:
            result[prop] = value;
        }
      }
    }
    return result;
  }
  exports.mergeIconData = mergeIconData;
});
var parse = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseIconSet = void 0;
  const defaultsKeys = Object.keys(icon.iconDefaults);
  function resolveAlias(alias, icons, aliases, level = 0) {
    const parent = alias.parent;
    if (icons[parent] !== void 0) {
      return merge.mergeIconData(icons[parent], alias);
    }
    if (aliases[parent] !== void 0) {
      if (level > 2) {
        return null;
      }
      const icon2 = resolveAlias(aliases[parent], icons, aliases, level + 1);
      if (icon2) {
        return merge.mergeIconData(icon2, alias);
      }
    }
    return null;
  }
  function parseIconSet(data, callback, list2 = "none") {
    const added = [];
    if (typeof data !== "object") {
      return list2 === "none" ? false : added;
    }
    if (data.not_found instanceof Array) {
      data.not_found.forEach((name2) => {
        callback(name2, null);
        if (list2 === "all") {
          added.push(name2);
        }
      });
    }
    if (typeof data.icons !== "object") {
      return list2 === "none" ? false : added;
    }
    const defaults = Object.create(null);
    defaultsKeys.forEach((key) => {
      if (data[key] !== void 0 && typeof data[key] !== "object") {
        defaults[key] = data[key];
      }
    });
    const icons = data.icons;
    Object.keys(icons).forEach((name2) => {
      const icon$1 = icons[name2];
      if (typeof icon$1.body !== "string") {
        return;
      }
      callback(name2, Object.freeze({ ...icon.iconDefaults, ...defaults, ...icon$1 }));
      added.push(name2);
    });
    if (typeof data.aliases === "object") {
      const aliases = data.aliases;
      Object.keys(aliases).forEach((name2) => {
        const icon$1 = resolveAlias(aliases[name2], icons, aliases, 1);
        if (icon$1) {
          callback(name2, Object.freeze({ ...icon.iconDefaults, ...defaults, ...icon$1 }));
          added.push(name2);
        }
      });
    }
    return list2 === "none" ? added.length > 0 : added;
  }
  exports.parseIconSet = parseIconSet;
});
var storage_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.listIcons = exports.getIcon = exports.iconExists = exports.addIcon = exports.addIconSet = exports.getStorage = exports.newStorage = void 0;
  const storage = Object.create(null);
  function newStorage(provider, prefix) {
    return {
      provider,
      prefix,
      icons: Object.create(null),
      missing: Object.create(null)
    };
  }
  exports.newStorage = newStorage;
  function getStorage(provider, prefix) {
    if (storage[provider] === void 0) {
      storage[provider] = Object.create(null);
    }
    const providerStorage = storage[provider];
    if (providerStorage[prefix] === void 0) {
      providerStorage[prefix] = newStorage(provider, prefix);
    }
    return providerStorage[prefix];
  }
  exports.getStorage = getStorage;
  function addIconSet(storage2, data, list2 = "none") {
    const t = Date.now();
    return parse.parseIconSet(data, (name2, icon2) => {
      if (icon2 === null) {
        storage2.missing[name2] = t;
      } else {
        storage2.icons[name2] = icon2;
      }
    }, list2);
  }
  exports.addIconSet = addIconSet;
  function addIcon(storage2, name2, icon$1) {
    try {
      if (typeof icon$1.body === "string") {
        storage2.icons[name2] = Object.freeze(icon.fullIcon(icon$1));
        return true;
      }
    } catch (err) {
    }
    return false;
  }
  exports.addIcon = addIcon;
  function iconExists(storage2, name2) {
    return storage2.icons[name2] !== void 0;
  }
  exports.iconExists = iconExists;
  function getIcon(storage2, name2) {
    const value = storage2.icons[name2];
    return value === void 0 ? null : value;
  }
  exports.getIcon = getIcon;
  function listIcons(provider, prefix) {
    let allIcons = [];
    let providers;
    if (typeof provider === "string") {
      providers = [provider];
    } else {
      providers = Object.keys(storage);
    }
    providers.forEach((provider2) => {
      let prefixes;
      if (typeof provider2 === "string" && typeof prefix === "string") {
        prefixes = [prefix];
      } else {
        prefixes = storage[provider2] === void 0 ? [] : Object.keys(storage[provider2]);
      }
      prefixes.forEach((prefix2) => {
        const storage2 = getStorage(provider2, prefix2);
        const icons = Object.keys(storage2.icons).map((name2) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name2);
        allIcons = allIcons.concat(icons);
      });
    });
    return allIcons;
  }
  exports.listIcons = listIcons;
});
var functions$3 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.storageFunctions = exports.addCollection = exports.addIcon = exports.getIconData = exports.allowSimpleNames = void 0;
  let simpleNames = false;
  function allowSimpleNames(allow) {
    if (typeof allow === "boolean") {
      simpleNames = allow;
    }
    return simpleNames;
  }
  exports.allowSimpleNames = allowSimpleNames;
  function getIconData(name$12) {
    const icon2 = typeof name$12 === "string" ? name.stringToIcon(name$12, true, simpleNames) : name$12;
    return icon2 ? storage_1.getIcon(storage_1.getStorage(icon2.provider, icon2.prefix), icon2.name) : null;
  }
  exports.getIconData = getIconData;
  function addIcon(name$12, data) {
    const icon2 = name.stringToIcon(name$12, true, simpleNames);
    if (!icon2) {
      return false;
    }
    const storage = storage_1.getStorage(icon2.provider, icon2.prefix);
    return storage_1.addIcon(storage, icon2.name, data);
  }
  exports.addIcon = addIcon;
  function addCollection2(data, provider) {
    if (typeof data !== "object") {
      return false;
    }
    if (typeof provider !== "string") {
      provider = typeof data.provider === "string" ? data.provider : "";
    }
    if (simpleNames && provider === "" && (typeof data.prefix !== "string" || data.prefix === "")) {
      let added = false;
      parse.parseIconSet(data, (name2, icon2) => {
        if (icon2 !== null && addIcon(name2, icon2)) {
          added = true;
        }
      });
      return added;
    }
    if (typeof data.prefix !== "string" || !name.validateIcon({
      provider,
      prefix: data.prefix,
      name: "a"
    })) {
      return false;
    }
    const storage = storage_1.getStorage(provider, data.prefix);
    return !!storage_1.addIconSet(storage, data);
  }
  exports.addCollection = addCollection2;
  exports.storageFunctions = {
    iconExists: (name2) => getIconData(name2) !== null,
    getIcon: (name2) => {
      const result = getIconData(name2);
      return result ? { ...result } : null;
    },
    listIcons: storage_1.listIcons,
    addIcon,
    addCollection: addCollection2
  };
});
var id = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.replaceIDs = void 0;
  const regex = /\sid="(\S+)"/g;
  const replaceValue = "([^A-Za-z0-9_-])";
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  const randomPrefix = "IconifyId-" + Date.now().toString(16) + "-" + (Math.random() * 16777216 | 0).toString(16) + "-";
  let counter = 0;
  function replaceIDs(body, prefix = randomPrefix) {
    const ids = [];
    let match;
    while (match = regex.exec(body)) {
      ids.push(match[1]);
    }
    if (!ids.length) {
      return body;
    }
    ids.forEach((id2) => {
      const newID = typeof prefix === "function" ? prefix() : prefix + counter++;
      body = body.replace(new RegExp(replaceValue + "(" + escapeRegExp(id2) + ")" + replaceValue, "g"), "$1" + newID + "$3");
    });
    return body;
  }
  exports.replaceIDs = replaceIDs;
});
var size = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.calculateSize = void 0;
  const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
  const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function calculateSize(size2, ratio, precision) {
    if (ratio === 1) {
      return size2;
    }
    precision = precision === void 0 ? 100 : precision;
    if (typeof size2 === "number") {
      return Math.ceil(size2 * ratio * precision) / precision;
    }
    if (typeof size2 !== "string") {
      return size2;
    }
    const oldParts = size2.split(unitsSplit);
    if (oldParts === null || !oldParts.length) {
      return size2;
    }
    const newParts = [];
    let code = oldParts.shift();
    let isNumber = unitsTest.test(code);
    while (true) {
      if (isNumber) {
        const num = parseFloat(code);
        if (isNaN(num)) {
          newParts.push(code);
        } else {
          newParts.push(Math.ceil(num * ratio * precision) / precision);
        }
      } else {
        newParts.push(code);
      }
      code = oldParts.shift();
      if (code === void 0) {
        return newParts.join("");
      }
      isNumber = !isNumber;
    }
  }
  exports.calculateSize = calculateSize;
});
var customisations = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mergeCustomisations = exports.defaults = void 0;
  exports.defaults = Object.freeze({
    inline: false,
    width: null,
    height: null,
    hAlign: "center",
    vAlign: "middle",
    slice: false,
    hFlip: false,
    vFlip: false,
    rotate: 0
  });
  function mergeCustomisations(defaults, item) {
    const result = {};
    for (const key in defaults) {
      const attr = key;
      result[attr] = defaults[attr];
      if (item[attr] === void 0) {
        continue;
      }
      const value = item[attr];
      switch (attr) {
        case "inline":
        case "slice":
          if (typeof value === "boolean") {
            result[attr] = value;
          }
          break;
        case "hFlip":
        case "vFlip":
          if (value === true) {
            result[attr] = !result[attr];
          }
          break;
        case "hAlign":
        case "vAlign":
          if (typeof value === "string" && value !== "") {
            result[attr] = value;
          }
          break;
        case "width":
        case "height":
          if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
            result[attr] = value;
          }
          break;
        case "rotate":
          if (typeof value === "number") {
            result[attr] += value;
          }
          break;
      }
    }
    return result;
  }
  exports.mergeCustomisations = mergeCustomisations;
});
var build = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.iconToSVG = void 0;
  function preserveAspectRatio(props) {
    let result = "";
    switch (props.hAlign) {
      case "left":
        result += "xMin";
        break;
      case "right":
        result += "xMax";
        break;
      default:
        result += "xMid";
    }
    switch (props.vAlign) {
      case "top":
        result += "YMin";
        break;
      case "bottom":
        result += "YMax";
        break;
      default:
        result += "YMid";
    }
    result += props.slice ? " slice" : " meet";
    return result;
  }
  function iconToSVG(icon2, customisations2) {
    const box = {
      left: icon2.left,
      top: icon2.top,
      width: icon2.width,
      height: icon2.height
    };
    let body = icon2.body;
    [icon2, customisations2].forEach((props) => {
      const transformations = [];
      const hFlip = props.hFlip;
      const vFlip = props.vFlip;
      let rotation = props.rotate;
      if (hFlip) {
        if (vFlip) {
          rotation += 2;
        } else {
          transformations.push("translate(" + (box.width + box.left) + " " + (0 - box.top) + ")");
          transformations.push("scale(-1 1)");
          box.top = box.left = 0;
        }
      } else if (vFlip) {
        transformations.push("translate(" + (0 - box.left) + " " + (box.height + box.top) + ")");
        transformations.push("scale(1 -1)");
        box.top = box.left = 0;
      }
      let tempValue;
      if (rotation < 0) {
        rotation -= Math.floor(rotation / 4) * 4;
      }
      rotation = rotation % 4;
      switch (rotation) {
        case 1:
          tempValue = box.height / 2 + box.top;
          transformations.unshift("rotate(90 " + tempValue + " " + tempValue + ")");
          break;
        case 2:
          transformations.unshift("rotate(180 " + (box.width / 2 + box.left) + " " + (box.height / 2 + box.top) + ")");
          break;
        case 3:
          tempValue = box.width / 2 + box.left;
          transformations.unshift("rotate(-90 " + tempValue + " " + tempValue + ")");
          break;
      }
      if (rotation % 2 === 1) {
        if (box.left !== 0 || box.top !== 0) {
          tempValue = box.left;
          box.left = box.top;
          box.top = tempValue;
        }
        if (box.width !== box.height) {
          tempValue = box.width;
          box.width = box.height;
          box.height = tempValue;
        }
      }
      if (transformations.length) {
        body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
      }
    });
    let width, height;
    if (customisations2.width === null && customisations2.height === null) {
      height = "1em";
      width = size.calculateSize(height, box.width / box.height);
    } else if (customisations2.width !== null && customisations2.height !== null) {
      width = customisations2.width;
      height = customisations2.height;
    } else if (customisations2.height !== null) {
      height = customisations2.height;
      width = size.calculateSize(height, box.width / box.height);
    } else {
      width = customisations2.width;
      height = size.calculateSize(width, box.height / box.width);
    }
    if (width === "auto") {
      width = box.width;
    }
    if (height === "auto") {
      height = box.height;
    }
    width = typeof width === "string" ? width : width + "";
    height = typeof height === "string" ? height : height + "";
    const result = {
      attributes: {
        width,
        height,
        preserveAspectRatio: preserveAspectRatio(customisations2),
        viewBox: box.left + " " + box.top + " " + box.width + " " + box.height
      },
      body
    };
    if (customisations2.inline) {
      result.inline = true;
    }
    return result;
  }
  exports.iconToSVG = iconToSVG;
});
var functions$2 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.builderFunctions = void 0;
  exports.builderFunctions = {
    replaceIDs: id.replaceIDs,
    calculateSize: size.calculateSize,
    buildIcon: (icon$1, customisations$1) => {
      return build.iconToSVG(icon.fullIcon(icon$1), customisations.mergeCustomisations(customisations.defaults, customisations$1));
    }
  };
});
var modules$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.coreModules = void 0;
  exports.coreModules = {};
});
var config$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultConfig = void 0;
  exports.defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: false,
    dataAfterTimeout: false
  };
});
var query = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sendQuery = void 0;
  function sendQuery(config2, payload, query2, done, success) {
    const resourcesCount = config2.resources.length;
    const startIndex = config2.random ? Math.floor(Math.random() * resourcesCount) : config2.index;
    let resources;
    if (config2.random) {
      let list2 = config2.resources.slice(0);
      resources = [];
      while (list2.length > 1) {
        const nextIndex = Math.floor(Math.random() * list2.length);
        resources.push(list2[nextIndex]);
        list2 = list2.slice(0, nextIndex).concat(list2.slice(nextIndex + 1));
      }
      resources = resources.concat(list2);
    } else {
      resources = config2.resources.slice(startIndex).concat(config2.resources.slice(0, startIndex));
    }
    const startTime = Date.now();
    let status = "pending";
    let queriesSent = 0;
    let lastError = void 0;
    let timer = null;
    let queue = [];
    let doneCallbacks = [];
    if (typeof done === "function") {
      doneCallbacks.push(done);
    }
    function resetTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function abort() {
      if (status === "pending") {
        status = "aborted";
      }
      resetTimer();
      queue.forEach((item) => {
        if (item.abort) {
          item.abort();
        }
        if (item.status === "pending") {
          item.status = "aborted";
        }
      });
      queue = [];
    }
    function subscribe(callback, overwrite) {
      if (overwrite) {
        doneCallbacks = [];
      }
      if (typeof callback === "function") {
        doneCallbacks.push(callback);
      }
    }
    function getQueryStatus() {
      return {
        startTime,
        payload,
        status,
        queriesSent,
        queriesPending: queue.length,
        subscribe,
        abort
      };
    }
    function failQuery() {
      status = "failed";
      doneCallbacks.forEach((callback) => {
        callback(void 0, lastError);
      });
    }
    function clearQueue() {
      queue = queue.filter((item) => {
        if (item.status === "pending") {
          item.status = "aborted";
        }
        if (item.abort) {
          item.abort();
        }
        return false;
      });
    }
    function moduleResponse(item, data, error2) {
      const isError = data === void 0;
      queue = queue.filter((queued) => queued !== item);
      switch (status) {
        case "pending":
          break;
        case "failed":
          if (isError || !config2.dataAfterTimeout) {
            return;
          }
          break;
        default:
          return;
      }
      if (isError) {
        if (error2 !== void 0) {
          lastError = error2;
        }
        if (!queue.length) {
          if (!resources.length) {
            failQuery();
          } else {
            execNext();
          }
        }
        return;
      }
      resetTimer();
      clearQueue();
      if (success && !config2.random) {
        const index2 = config2.resources.indexOf(item.resource);
        if (index2 !== -1 && index2 !== config2.index) {
          success(index2);
        }
      }
      status = "completed";
      doneCallbacks.forEach((callback) => {
        callback(data);
      });
    }
    function execNext() {
      if (status !== "pending") {
        return;
      }
      resetTimer();
      const resource = resources.shift();
      if (resource === void 0) {
        if (queue.length) {
          const timeout2 = typeof config2.timeout === "function" ? config2.timeout(startTime) : config2.timeout;
          if (timeout2) {
            timer = setTimeout(() => {
              resetTimer();
              if (status === "pending") {
                clearQueue();
                failQuery();
              }
            }, timeout2);
            return;
          }
        }
        failQuery();
        return;
      }
      const item = {
        getQueryStatus,
        status: "pending",
        resource,
        done: (data, error2) => {
          moduleResponse(item, data, error2);
        }
      };
      queue.push(item);
      queriesSent++;
      const timeout = typeof config2.rotate === "function" ? config2.rotate(queriesSent, startTime) : config2.rotate;
      timer = setTimeout(execNext, timeout);
      query2(resource, payload, item);
    }
    setTimeout(execNext);
    return getQueryStatus;
  }
  exports.sendQuery = sendQuery;
});
var redundancy = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.initRedundancy = void 0;
  function setConfig(config2) {
    if (typeof config2 !== "object" || typeof config2.resources !== "object" || !(config2.resources instanceof Array) || !config2.resources.length) {
      throw new Error("Invalid Reduncancy configuration");
    }
    const newConfig = Object.create(null);
    let key;
    for (key in config$1.defaultConfig) {
      if (config2[key] !== void 0) {
        newConfig[key] = config2[key];
      } else {
        newConfig[key] = config$1.defaultConfig[key];
      }
    }
    return newConfig;
  }
  function initRedundancy(cfg) {
    const config2 = setConfig(cfg);
    let queries = [];
    function cleanup() {
      queries = queries.filter((item) => item().status === "pending");
    }
    function query$1(payload, queryCallback, doneCallback) {
      const query$12 = query.sendQuery(config2, payload, queryCallback, (data, error2) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error2);
        }
      }, (newIndex) => {
        config2.index = newIndex;
      });
      queries.push(query$12);
      return query$12;
    }
    function find(callback) {
      const result = queries.find((value) => {
        return callback(value);
      });
      return result !== void 0 ? result : null;
    }
    const instance = {
      query: query$1,
      find,
      setIndex: (index2) => {
        config2.index = index2;
      },
      getIndex: () => config2.index,
      cleanup
    };
    return instance;
  }
  exports.initRedundancy = initRedundancy;
});
var sort = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sortIcons = void 0;
  function sortIcons(icons) {
    const result = {
      loaded: [],
      missing: [],
      pending: []
    };
    const storage = Object.create(null);
    icons.sort((a, b) => {
      if (a.provider !== b.provider) {
        return a.provider.localeCompare(b.provider);
      }
      if (a.prefix !== b.prefix) {
        return a.prefix.localeCompare(b.prefix);
      }
      return a.name.localeCompare(b.name);
    });
    let lastIcon = {
      provider: "",
      prefix: "",
      name: ""
    };
    icons.forEach((icon2) => {
      if (lastIcon.name === icon2.name && lastIcon.prefix === icon2.prefix && lastIcon.provider === icon2.provider) {
        return;
      }
      lastIcon = icon2;
      const provider = icon2.provider;
      const prefix = icon2.prefix;
      const name2 = icon2.name;
      if (storage[provider] === void 0) {
        storage[provider] = Object.create(null);
      }
      const providerStorage = storage[provider];
      if (providerStorage[prefix] === void 0) {
        providerStorage[prefix] = storage_1.getStorage(provider, prefix);
      }
      const localStorage = providerStorage[prefix];
      let list2;
      if (localStorage.icons[name2] !== void 0) {
        list2 = result.loaded;
      } else if (prefix === "" || localStorage.missing[name2] !== void 0) {
        list2 = result.missing;
      } else {
        list2 = result.pending;
      }
      const item = {
        provider,
        prefix,
        name: name2
      };
      list2.push(item);
    });
    return result;
  }
  exports.sortIcons = sortIcons;
});
var callbacks = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.storeCallback = exports.updateCallbacks = exports.callbacks = void 0;
  exports.callbacks = Object.create(null);
  const pendingUpdates = Object.create(null);
  function removeCallback(sources, id2) {
    sources.forEach((source) => {
      const provider = source.provider;
      if (exports.callbacks[provider] === void 0) {
        return;
      }
      const providerCallbacks = exports.callbacks[provider];
      const prefix = source.prefix;
      const items = providerCallbacks[prefix];
      if (items) {
        providerCallbacks[prefix] = items.filter((row) => row.id !== id2);
      }
    });
  }
  function updateCallbacks(provider, prefix) {
    if (pendingUpdates[provider] === void 0) {
      pendingUpdates[provider] = Object.create(null);
    }
    const providerPendingUpdates = pendingUpdates[provider];
    if (!providerPendingUpdates[prefix]) {
      providerPendingUpdates[prefix] = true;
      setTimeout(() => {
        providerPendingUpdates[prefix] = false;
        if (exports.callbacks[provider] === void 0 || exports.callbacks[provider][prefix] === void 0) {
          return;
        }
        const items = exports.callbacks[provider][prefix].slice(0);
        if (!items.length) {
          return;
        }
        const storage = storage_1.getStorage(provider, prefix);
        let hasPending = false;
        items.forEach((item) => {
          const icons = item.icons;
          const oldLength = icons.pending.length;
          icons.pending = icons.pending.filter((icon2) => {
            if (icon2.prefix !== prefix) {
              return true;
            }
            const name2 = icon2.name;
            if (storage.icons[name2] !== void 0) {
              icons.loaded.push({
                provider,
                prefix,
                name: name2
              });
            } else if (storage.missing[name2] !== void 0) {
              icons.missing.push({
                provider,
                prefix,
                name: name2
              });
            } else {
              hasPending = true;
              return true;
            }
            return false;
          });
          if (icons.pending.length !== oldLength) {
            if (!hasPending) {
              removeCallback([
                {
                  provider,
                  prefix
                }
              ], item.id);
            }
            item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
          }
        });
      });
    }
  }
  exports.updateCallbacks = updateCallbacks;
  let idCounter = 0;
  function storeCallback(callback, icons, pendingSources) {
    const id2 = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id2);
    if (!icons.pending.length) {
      return abort;
    }
    const item = {
      id: id2,
      icons,
      callback,
      abort
    };
    pendingSources.forEach((source) => {
      const provider = source.provider;
      const prefix = source.prefix;
      if (exports.callbacks[provider] === void 0) {
        exports.callbacks[provider] = Object.create(null);
      }
      const providerCallbacks = exports.callbacks[provider];
      if (providerCallbacks[prefix] === void 0) {
        providerCallbacks[prefix] = [];
      }
      providerCallbacks[prefix].push(item);
    });
    return abort;
  }
  exports.storeCallback = storeCallback;
});
var modules = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAPIModule = exports.setAPIModule = void 0;
  const storage = Object.create(null);
  function setAPIModule(provider, item) {
    storage[provider] = item;
  }
  exports.setAPIModule = setAPIModule;
  function getAPIModule2(provider) {
    return storage[provider] === void 0 ? storage[""] : storage[provider];
  }
  exports.getAPIModule = getAPIModule2;
});
var config = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAPIConfig = exports.setAPIConfig = void 0;
  function createConfig(source) {
    let resources;
    if (typeof source.resources === "string") {
      resources = [source.resources];
    } else {
      resources = source.resources;
      if (!(resources instanceof Array) || !resources.length) {
        return null;
      }
    }
    const result = {
      resources,
      path: source.path === void 0 ? "/" : source.path,
      maxURL: source.maxURL ? source.maxURL : 500,
      rotate: source.rotate ? source.rotate : 750,
      timeout: source.timeout ? source.timeout : 5e3,
      random: source.random === true,
      index: source.index ? source.index : 0,
      dataAfterTimeout: source.dataAfterTimeout !== false
    };
    return result;
  }
  const configStorage = Object.create(null);
  const fallBackAPISources = [
    "https://api.simplesvg.com",
    "https://api.unisvg.com"
  ];
  const fallBackAPI = [];
  while (fallBackAPISources.length > 0) {
    if (fallBackAPISources.length === 1) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      if (Math.random() > 0.5) {
        fallBackAPI.push(fallBackAPISources.shift());
      } else {
        fallBackAPI.push(fallBackAPISources.pop());
      }
    }
  }
  configStorage[""] = createConfig({
    resources: ["https://api.iconify.design"].concat(fallBackAPI)
  });
  function setAPIConfig(provider, customConfig) {
    const config2 = createConfig(customConfig);
    if (config2 === null) {
      return false;
    }
    configStorage[provider] = config2;
    return true;
  }
  exports.setAPIConfig = setAPIConfig;
  const getAPIConfig = (provider) => configStorage[provider];
  exports.getAPIConfig = getAPIConfig;
});
var list = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getProviders = exports.listToIcons = void 0;
  function listToIcons(list2, validate = true, simpleNames = false) {
    const result = [];
    list2.forEach((item) => {
      const icon2 = typeof item === "string" ? name.stringToIcon(item, false, simpleNames) : item;
      if (!validate || name.validateIcon(icon2, simpleNames)) {
        result.push({
          provider: icon2.provider,
          prefix: icon2.prefix,
          name: icon2.name
        });
      }
    });
    return result;
  }
  exports.listToIcons = listToIcons;
  function getProviders(list2) {
    const providers = Object.create(null);
    list2.forEach((icon2) => {
      providers[icon2.provider] = true;
    });
    return Object.keys(providers);
  }
  exports.getProviders = getProviders;
});
var api = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.API = exports.getRedundancyCache = void 0;
  function emptyCallback() {
  }
  const pendingIcons = Object.create(null);
  const iconsToLoad = Object.create(null);
  const loaderFlags = Object.create(null);
  const queueFlags = Object.create(null);
  const redundancyCache = Object.create(null);
  function getRedundancyCache(provider) {
    if (redundancyCache[provider] === void 0) {
      const config$12 = config.getAPIConfig(provider);
      if (!config$12) {
        return;
      }
      const redundancy$1 = redundancy.initRedundancy(config$12);
      const cachedReundancy = {
        config: config$12,
        redundancy: redundancy$1
      };
      redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
  }
  exports.getRedundancyCache = getRedundancyCache;
  function loadedNewIcons(provider, prefix) {
    if (loaderFlags[provider] === void 0) {
      loaderFlags[provider] = Object.create(null);
    }
    const providerLoaderFlags = loaderFlags[provider];
    if (!providerLoaderFlags[prefix]) {
      providerLoaderFlags[prefix] = true;
      setTimeout(() => {
        providerLoaderFlags[prefix] = false;
        callbacks.updateCallbacks(provider, prefix);
      });
    }
  }
  const errorsCache = Object.create(null);
  function loadNewIcons(provider, prefix, icons) {
    function err() {
      const key = (provider === "" ? "" : "@" + provider + ":") + prefix;
      const time = Math.floor(Date.now() / 6e4);
      if (errorsCache[key] < time) {
        errorsCache[key] = time;
        console.error('Unable to retrieve icons for "' + key + '" because API is not configured properly.');
      }
    }
    if (iconsToLoad[provider] === void 0) {
      iconsToLoad[provider] = Object.create(null);
    }
    const providerIconsToLoad = iconsToLoad[provider];
    if (queueFlags[provider] === void 0) {
      queueFlags[provider] = Object.create(null);
    }
    const providerQueueFlags = queueFlags[provider];
    if (pendingIcons[provider] === void 0) {
      pendingIcons[provider] = Object.create(null);
    }
    const providerPendingIcons = pendingIcons[provider];
    if (providerIconsToLoad[prefix] === void 0) {
      providerIconsToLoad[prefix] = icons;
    } else {
      providerIconsToLoad[prefix] = providerIconsToLoad[prefix].concat(icons).sort();
    }
    let cachedReundancy;
    if (!providerQueueFlags[prefix]) {
      providerQueueFlags[prefix] = true;
      setTimeout(() => {
        providerQueueFlags[prefix] = false;
        const icons2 = providerIconsToLoad[prefix];
        delete providerIconsToLoad[prefix];
        const api2 = modules.getAPIModule(provider);
        if (!api2) {
          err();
          return;
        }
        if (cachedReundancy === void 0) {
          const redundancy2 = getRedundancyCache(provider);
          if (redundancy2 === void 0) {
            err();
            return;
          }
          cachedReundancy = redundancy2;
        }
        const params = api2.prepare(provider, prefix, icons2);
        params.forEach((item) => {
          cachedReundancy.redundancy.query(item, api2.send, (data, error2) => {
            const storage = storage_1.getStorage(provider, prefix);
            if (typeof data !== "object") {
              if (error2 !== 404) {
                return;
              }
              const t = Date.now();
              item.icons.forEach((name2) => {
                storage.missing[name2] = t;
              });
            } else {
              try {
                const added = storage_1.addIconSet(storage, data, "all");
                if (typeof added === "boolean") {
                  return;
                }
                const pending = providerPendingIcons[prefix];
                added.forEach((name2) => {
                  delete pending[name2];
                });
                if (modules$1.coreModules.cache) {
                  modules$1.coreModules.cache(provider, data);
                }
              } catch (err2) {
                console.error(err2);
              }
            }
            loadedNewIcons(provider, prefix);
          });
        });
      });
    }
  }
  const isPending = (icon2) => {
    return pendingIcons[icon2.provider] !== void 0 && pendingIcons[icon2.provider][icon2.prefix] !== void 0 && pendingIcons[icon2.provider][icon2.prefix][icon2.name] !== void 0;
  };
  const loadIcons = (icons, callback) => {
    const cleanedIcons = list.listToIcons(icons, true, functions$3.allowSimpleNames());
    const sortedIcons = sort.sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
      let callCallback = true;
      if (callback) {
        setTimeout(() => {
          if (callCallback) {
            callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
          }
        });
      }
      return () => {
        callCallback = false;
      };
    }
    const newIcons = Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon2) => {
      const provider = icon2.provider;
      const prefix = icon2.prefix;
      if (prefix === lastPrefix && provider === lastProvider) {
        return;
      }
      lastProvider = provider;
      lastPrefix = prefix;
      sources.push({
        provider,
        prefix
      });
      if (pendingIcons[provider] === void 0) {
        pendingIcons[provider] = Object.create(null);
      }
      const providerPendingIcons = pendingIcons[provider];
      if (providerPendingIcons[prefix] === void 0) {
        providerPendingIcons[prefix] = Object.create(null);
      }
      if (newIcons[provider] === void 0) {
        newIcons[provider] = Object.create(null);
      }
      const providerNewIcons = newIcons[provider];
      if (providerNewIcons[prefix] === void 0) {
        providerNewIcons[prefix] = [];
      }
    });
    const time = Date.now();
    sortedIcons.pending.forEach((icon2) => {
      const provider = icon2.provider;
      const prefix = icon2.prefix;
      const name2 = icon2.name;
      const pendingQueue = pendingIcons[provider][prefix];
      if (pendingQueue[name2] === void 0) {
        pendingQueue[name2] = time;
        newIcons[provider][prefix].push(name2);
      }
    });
    sources.forEach((source) => {
      const provider = source.provider;
      const prefix = source.prefix;
      if (newIcons[provider][prefix].length) {
        loadNewIcons(provider, prefix, newIcons[provider][prefix]);
      }
    });
    return callback ? callbacks.storeCallback(callback, sortedIcons, sources) : emptyCallback;
  };
  exports.API = {
    isPending,
    loadIcons
  };
});
var functions$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.APIInternalFunctions = exports.APIFunctions = void 0;
  exports.APIFunctions = {
    loadIcons: api.API.loadIcons,
    addAPIProvider: config.setAPIConfig
  };
  exports.APIInternalFunctions = {
    getAPI: api.getRedundancyCache,
    getAPIConfig: config.getAPIConfig,
    setAPIModule: modules.setAPIModule
  };
});
var jsonp = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAPIModule = void 0;
  let rootVar = null;
  let endPoint = "{prefix}.js?icons={icons}&callback={callback}";
  const maxLengthCache = Object.create(null);
  const pathCache = Object.create(null);
  function hash(str) {
    let total = 0, i;
    for (i = str.length - 1; i >= 0; i--) {
      total += str.charCodeAt(i);
    }
    return total % 999;
  }
  function getGlobal() {
    if (rootVar === null) {
      const globalRoot = self;
      let prefix = "Iconify";
      let extraPrefix = ".cb";
      if (globalRoot[prefix] === void 0) {
        prefix = "IconifyJSONP";
        extraPrefix = "";
        if (globalRoot[prefix] === void 0) {
          globalRoot[prefix] = Object.create(null);
        }
        rootVar = globalRoot[prefix];
      } else {
        const iconifyRoot = globalRoot[prefix];
        if (iconifyRoot.cb === void 0) {
          iconifyRoot.cb = Object.create(null);
        }
        rootVar = iconifyRoot.cb;
      }
      endPoint = endPoint.replace("{callback}", prefix + extraPrefix + ".{cb}");
    }
    return rootVar;
  }
  const getAPIModule2 = (getAPIConfig) => {
    function calculateMaxLength(provider, prefix) {
      const config2 = getAPIConfig(provider);
      if (!config2) {
        return 0;
      }
      let result;
      if (!config2.maxURL) {
        result = 0;
      } else {
        let maxHostLength = 0;
        config2.resources.forEach((item) => {
          const host = item;
          maxHostLength = Math.max(maxHostLength, host.length);
        });
        getGlobal();
        const extraLength = 3;
        result = config2.maxURL - maxHostLength - config2.path.length - endPoint.replace("{provider}", provider).replace("{prefix}", prefix).replace("{icons}", "").length - extraLength;
      }
      const cacheKey = provider + ":" + prefix;
      pathCache[cacheKey] = config2.path;
      maxLengthCache[cacheKey] = result;
      return result;
    }
    const prepare = (provider, prefix, icons) => {
      const results = [];
      const cacheKey = provider + ":" + prefix;
      let maxLength = maxLengthCache[cacheKey];
      if (maxLength === void 0) {
        maxLength = calculateMaxLength(provider, prefix);
      }
      let item = {
        provider,
        prefix,
        icons: []
      };
      let length = 0;
      icons.forEach((name2, index2) => {
        length += name2.length + 1;
        if (length >= maxLength && index2 > 0) {
          results.push(item);
          item = {
            provider,
            prefix,
            icons: []
          };
          length = name2.length;
        }
        item.icons.push(name2);
      });
      results.push(item);
      return results;
    };
    const send = (host, params, status) => {
      const provider = params.provider;
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const cacheKey = provider + ":" + prefix;
      const cbPrefix = prefix.split("-").shift().slice(0, 3);
      const global = getGlobal();
      let cbCounter = hash(provider + ":" + host + ":" + prefix + ":" + iconsList);
      while (global[cbPrefix + cbCounter] !== void 0) {
        cbCounter++;
      }
      const callbackName = cbPrefix + cbCounter;
      const path = pathCache[cacheKey] + endPoint.replace("{provider}", provider).replace("{prefix}", prefix).replace("{icons}", iconsList).replace("{cb}", callbackName);
      global[callbackName] = (data) => {
        delete global[callbackName];
        status.done(data);
      };
      const uri = host + path;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = uri;
      document.head.appendChild(script);
    };
    return {
      prepare,
      send
    };
  };
  exports.getAPIModule = getAPIModule2;
});
var fetch_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAPIModule = exports.setFetch = void 0;
  const endPoint = "{prefix}.json?icons={icons}";
  const maxLengthCache = Object.create(null);
  const pathCache = Object.create(null);
  let fetchModule = null;
  try {
    fetchModule = fetch;
  } catch (err) {
  }
  function setFetch(fetch2) {
    fetchModule = fetch2;
  }
  exports.setFetch = setFetch;
  const getAPIModule2 = (getAPIConfig) => {
    function calculateMaxLength(provider, prefix) {
      const config2 = getAPIConfig(provider);
      if (!config2) {
        return 0;
      }
      let result;
      if (!config2.maxURL) {
        result = 0;
      } else {
        let maxHostLength = 0;
        config2.resources.forEach((item) => {
          const host = item;
          maxHostLength = Math.max(maxHostLength, host.length);
        });
        result = config2.maxURL - maxHostLength - config2.path.length - endPoint.replace("{provider}", provider).replace("{prefix}", prefix).replace("{icons}", "").length;
      }
      const cacheKey = provider + ":" + prefix;
      pathCache[cacheKey] = config2.path;
      maxLengthCache[cacheKey] = result;
      return result;
    }
    const prepare = (provider, prefix, icons) => {
      const results = [];
      let maxLength = maxLengthCache[prefix];
      if (maxLength === void 0) {
        maxLength = calculateMaxLength(provider, prefix);
      }
      let item = {
        provider,
        prefix,
        icons: []
      };
      let length = 0;
      icons.forEach((name2, index2) => {
        length += name2.length + 1;
        if (length >= maxLength && index2 > 0) {
          results.push(item);
          item = {
            provider,
            prefix,
            icons: []
          };
          length = name2.length;
        }
        item.icons.push(name2);
      });
      results.push(item);
      return results;
    };
    const send = (host, params, status) => {
      const provider = params.provider;
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const cacheKey = provider + ":" + prefix;
      const path = pathCache[cacheKey] + endPoint.replace("{provider}", provider).replace("{prefix}", prefix).replace("{icons}", iconsList);
      if (!fetchModule) {
        status.done(void 0, 424);
        return;
      }
      fetchModule(host + path).then((response) => {
        if (response.status !== 200) {
          status.done(void 0, response.status);
          return;
        }
        return response.json();
      }).then((data) => {
        if (typeof data !== "object" || data === null) {
          return;
        }
        status.done(data);
      }).catch((err) => {
        status.done(void 0, err.errno);
      });
    };
    return {
      prepare,
      send
    };
  };
  exports.getAPIModule = getAPIModule2;
});
var browserStorage = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.storeCache = exports.loadCache = exports.mock = exports.emptyList = exports.count = exports.config = void 0;
  const cacheVersion = "iconify2";
  const cachePrefix = "iconify";
  const countKey = cachePrefix + "-count";
  const versionKey = cachePrefix + "-version";
  const hour = 36e5;
  const cacheExpiration = 168;
  exports.config = {
    local: true,
    session: true
  };
  let loaded = false;
  exports.count = {
    local: 0,
    session: 0
  };
  exports.emptyList = {
    local: [],
    session: []
  };
  let _window = typeof window === "undefined" ? {} : window;
  function mock(fakeWindow) {
    loaded = false;
    _window = fakeWindow;
  }
  exports.mock = mock;
  function getGlobal(key) {
    const attr = key + "Storage";
    try {
      if (_window && _window[attr] && typeof _window[attr].length === "number") {
        return _window[attr];
      }
    } catch (err) {
    }
    exports.config[key] = false;
    return null;
  }
  function setCount(storage, key, value) {
    try {
      storage.setItem(countKey, value + "");
      exports.count[key] = value;
      return true;
    } catch (err) {
      return false;
    }
  }
  function getCount(storage) {
    const count = storage.getItem(countKey);
    if (count) {
      const total = parseInt(count);
      return total ? total : 0;
    }
    return 0;
  }
  function initCache(storage, key) {
    try {
      storage.setItem(versionKey, cacheVersion);
    } catch (err) {
    }
    setCount(storage, key, 0);
  }
  function destroyCache(storage) {
    try {
      const total = getCount(storage);
      for (let i = 0; i < total; i++) {
        storage.removeItem(cachePrefix + i);
      }
    } catch (err) {
    }
  }
  const loadCache = () => {
    if (loaded) {
      return;
    }
    loaded = true;
    const minTime = Math.floor(Date.now() / hour) - cacheExpiration;
    function load2(key) {
      const func = getGlobal(key);
      if (!func) {
        return;
      }
      const getItem = (index2) => {
        const name2 = cachePrefix + index2;
        const item = func.getItem(name2);
        if (typeof item !== "string") {
          return false;
        }
        let valid = true;
        try {
          const data = JSON.parse(item);
          if (typeof data !== "object" || typeof data.cached !== "number" || data.cached < minTime || typeof data.provider !== "string" || typeof data.data !== "object" || typeof data.data.prefix !== "string") {
            valid = false;
          } else {
            const provider = data.provider;
            const prefix = data.data.prefix;
            const storage = storage_1.getStorage(provider, prefix);
            valid = storage_1.addIconSet(storage, data.data);
          }
        } catch (err) {
          valid = false;
        }
        if (!valid) {
          func.removeItem(name2);
        }
        return valid;
      };
      try {
        const version = func.getItem(versionKey);
        if (version !== cacheVersion) {
          if (version) {
            destroyCache(func);
          }
          initCache(func, key);
          return;
        }
        let total = getCount(func);
        for (let i = total - 1; i >= 0; i--) {
          if (!getItem(i)) {
            if (i === total - 1) {
              total--;
            } else {
              exports.emptyList[key].push(i);
            }
          }
        }
        setCount(func, key, total);
      } catch (err) {
      }
    }
    for (const key in exports.config) {
      load2(key);
    }
  };
  exports.loadCache = loadCache;
  const storeCache = (provider, data) => {
    if (!loaded) {
      exports.loadCache();
    }
    function store(key) {
      if (!exports.config[key]) {
        return false;
      }
      const func = getGlobal(key);
      if (!func) {
        return false;
      }
      let index2 = exports.emptyList[key].shift();
      if (index2 === void 0) {
        index2 = exports.count[key];
        if (!setCount(func, key, index2 + 1)) {
          return false;
        }
      }
      try {
        const item = {
          cached: Math.floor(Date.now() / hour),
          provider,
          data
        };
        func.setItem(cachePrefix + index2, JSON.stringify(item));
      } catch (err) {
        return false;
      }
      return true;
    }
    if (!store("local")) {
      store("session");
    }
  };
  exports.storeCache = storeCache;
});
createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toggleBrowserCache = void 0;
  function toggleBrowserCache(storage, value) {
    switch (storage) {
      case "local":
      case "session":
        browserStorage.config[storage] = value;
        break;
      case "all":
        for (const key in browserStorage.config) {
          browserStorage.config[key] = value;
        }
        break;
    }
  }
  exports.toggleBrowserCache = toggleBrowserCache;
});
var shorthand = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.alignmentFromString = exports.flipFromString = void 0;
  const separator = /[\s,]+/;
  function flipFromString(custom, flip) {
    flip.split(separator).forEach((str) => {
      const value = str.trim();
      switch (value) {
        case "horizontal":
          custom.hFlip = true;
          break;
        case "vertical":
          custom.vFlip = true;
          break;
      }
    });
  }
  exports.flipFromString = flipFromString;
  function alignmentFromString(custom, align) {
    align.split(separator).forEach((str) => {
      const value = str.trim();
      switch (value) {
        case "left":
        case "center":
        case "right":
          custom.hAlign = value;
          break;
        case "top":
        case "middle":
        case "bottom":
          custom.vAlign = value;
          break;
        case "slice":
        case "crop":
          custom.slice = true;
          break;
        case "meet":
          custom.slice = false;
      }
    });
  }
  exports.alignmentFromString = alignmentFromString;
});
var rotate = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.rotateFromString = void 0;
  function rotateFromString(value) {
    const units = value.replace(/^-?[0-9.]*/, "");
    function cleanup(value2) {
      while (value2 < 0) {
        value2 += 4;
      }
      return value2 % 4;
    }
    if (units === "") {
      const num = parseInt(value);
      return isNaN(num) ? 0 : cleanup(num);
    } else if (units !== value) {
      let split = 0;
      switch (units) {
        case "%":
          split = 25;
          break;
        case "deg":
          split = 90;
      }
      if (split) {
        let num = parseFloat(value.slice(0, value.length - units.length));
        if (isNaN(num)) {
          return 0;
        }
        num = num / split;
        return num % 1 === 0 ? cleanup(num) : 0;
      }
    }
    return 0;
  }
  exports.rotateFromString = rotateFromString;
});
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
function render(icon2, props) {
  const customisations$1 = customisations.mergeCustomisations(customisations.defaults, props);
  const componentProps = Object.assign({}, svgDefaults);
  let style2 = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations$1[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          shorthand.flipFromString(customisations$1, value);
        }
        break;
      case "align":
        if (typeof value === "string") {
          shorthand.alignmentFromString(customisations$1, value);
        }
        break;
      case "color":
        style2 = style2 + (style2.length > 0 && style2.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations$1[key] = rotate.rotateFromString(value);
        } else if (typeof value === "number") {
          customisations$1[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (customisations.defaults[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = build.iconToSVG(icon2, customisations$1);
  for (let key in item.attributes) {
    componentProps[key] = item.attributes[key];
  }
  if (item.inline) {
    style2 = "vertical-align: -0.125em; " + style2;
  }
  if (style2 !== "") {
    componentProps.style = style2;
  }
  let localCounter = 0;
  const id$1 = props.id;
  return {
    attributes: componentProps,
    body: id.replaceIDs(item.body, id$1 ? () => id$1 + "-" + localCounter++ : "iconify-svelte-")
  };
}
functions$3.storageFunctions.iconExists;
functions$3.storageFunctions.getIcon;
functions$3.storageFunctions.listIcons;
functions$3.storageFunctions.addIcon;
const addCollection = functions$3.storageFunctions.addCollection;
functions$2.builderFunctions.calculateSize;
functions$2.builderFunctions.replaceIDs;
functions$2.builderFunctions.buildIcon;
functions$1.APIFunctions.loadIcons;
functions$1.APIFunctions.addAPIProvider;
const _api = functions$1.APIInternalFunctions;
functions$3.allowSimpleNames(true);
modules$1.coreModules.api = api.API;
let getAPIModule = fetch_1.getAPIModule;
try {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    getAPIModule = typeof fetch === "function" && typeof Promise === "function" ? fetch_1.getAPIModule : jsonp.getAPIModule;
  }
} catch (err) {
}
modules.setAPIModule("", getAPIModule(config.getAPIConfig));
_api.setFetch = (nodeFetch) => {
  fetch_1.setFetch(nodeFetch);
  if (getAPIModule !== fetch_1.getAPIModule) {
    getAPIModule = fetch_1.getAPIModule;
    modules.setAPIModule("", getAPIModule(config.getAPIConfig));
  }
};
if (typeof document !== "undefined" && typeof window !== "undefined") {
  modules$1.coreModules.cache = browserStorage.storeCache;
  browserStorage.loadCache();
  const _window = window;
  if (_window.IconifyPreload !== void 0) {
    const preload = _window.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (typeof item !== "object" || item === null || item instanceof Array || typeof item.icons !== "object" || typeof item.prefix !== "string" || !addCollection(item)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window.IconifyProviders !== void 0) {
    const providers = _window.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!config.setAPIConfig(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon$1, state, mounted, callback, onload) {
  function abortLoading() {
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  }
  if (typeof icon$1 === "object" && icon$1 !== null && typeof icon$1.body === "string") {
    state.name = "";
    abortLoading();
    return { data: icon.fullIcon(icon$1) };
  }
  let iconName;
  if (typeof icon$1 !== "string" || (iconName = name.stringToIcon(icon$1, false, true)) === null) {
    abortLoading();
    return null;
  }
  const data = functions$3.getIconData(iconName);
  if (data === null) {
    if (mounted && (!state.loading || state.loading.name !== icon$1)) {
      abortLoading();
      state.name = "";
      state.loading = {
        name: icon$1,
        abort: api.API.loadIcons([iconName], callback)
      };
    }
    return null;
  }
  abortLoading();
  if (state.name !== icon$1) {
    state.name = icon$1;
    if (onload && !state.destroyed) {
      onload(icon$1);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon2, props) {
  return icon2 ? render(icon2, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    name: "",
    loading: null,
    destroyed: false
  };
  let mounted = false;
  let data;
  function loaded() {
  }
  onMount(() => {
    mounted = true;
  });
  onDestroy(() => {
    state.destroyed = true;
    if (state.loading) {
      state.loading.abort();
      state.loading = null;
    }
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, $$props.onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data !== null ? `<svg${spread([escape_object(data.attributes)])}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : ``}`;
});
const copyright = "\xA9 2021 Dawson Technology Club, LLC. All rights reserved.";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const icons = {
    Facebook: "ant-design:facebook-filled",
    Instagram: "akar-icons:instagram-fill",
    Twitter: "akar-icons:twitter-fill",
    GitHub: "akar-icons:github-fill",
    Discord: "simple-icons:discord"
  };
  return `<section class="${"bg-white"}"><div class="${"max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"}"><nav class="${"flex flex-wrap justify-center -mx-5 -my-2"}">${each(infoLinks, ({ href, text }) => `<div class="${"px-5 py-2"}"><a sveltekit:prefetch${add_attribute("href", href, 0)} class="${"text-base leading-6 text-gray-500 hover:text-gray-900"}">${escape(text)}</a>
				</div>`)}</nav>
		<div class="${"flex justify-center mt-8 space-x-6"}">${each(socialLinks, ({ text, href }) => `<a rel="${"external"}"${add_attribute("href", href, 0)} class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">${escape(text)}</span>
					${validate_component(Icon, "Icon").$$render($$result, { icon: icons[text], height: 24 }, {}, {})}
				</a>`)}</div>
		<p class="${"mt-8 text-base leading-6 text-center text-gray-400"}">${escape(copyright)}</p></div></section>`;
});
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { variant = "primary" } = $$props;
  let { size: size2 = "md" } = $$props;
  let { text = "" } = $$props;
  let { style: style2 = "" } = $$props;
  style2 += " " + {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-50 hover:bg-gray-100 text-gray-900"
  }[variant];
  style2 += " " + {
    sm: "text-xm py-1 px-3",
    md: "text-sm py-2 px-6 font-bold",
    lg: "text-md py-3 px-8 font-bold"
  }[size2];
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  return `<a sveltekit:prefetch class="${"shadow rounded transition duration-200 text-center inline-block " + escape(style2)}"${add_attribute("href", href, 0)}>${escape(text)}${slots.default ? slots.default({}) : ``}</a>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"rounded h-8 w-8 bg-gradient-to-r from-blue-400 to-blue-500 overflow-visible shadow"}"><h3 class="${"text-white"}">dt<span class="${"text-blue-500"}">c</span></h3></div>`;
});
const NavBurger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="${"block h-4 w-4 fill-current"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><title>Mobile menu</title><path d="${"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}"></path></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `<nav class="${"relative px-4 py-4 flex justify-between items-center bg-white"}"><a class="${"text-3xl font-bold leading-none"}"${add_attribute("href", homeLink.href, 0)}>${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a>
	<div class="${"sm:hidden"}"><button class="${"navbar-burger flex items-center text-blue-600 p-3"}">${validate_component(NavBurger, "NavBurger").$$render($$result, {}, {}, {})}</button></div>
	<ul class="${"hidden ml-9 sm:flex sm:items-center sm:w-auto sm:space-x-5"}">${each(navLinks, ({ text, href }) => `<li><a sveltekit:prefetch class="${"text-md " + escape(path == href ? "text-gray-900 font-bold" : "text-gray-400 hover:text-gray-500")}"${add_attribute("href", href, 0)}>${escape(text)}</a>
			</li>`)}</ul>
	<div class="${"hidden sm:inline-block sm:ml-auto sm:mr-3"}">${validate_component(LinkButton, "LinkButton").$$render($$result, Object.assign(joinLink, { variant: "secondary" }, { style: "mr-3" }), {}, {})}
		${validate_component(LinkButton, "LinkButton").$$render($$result, Object.assign(quoteLink, { variant: "primary" }), {}, {})}</div></nav>
${``}`;
});
var __layout_svelte_svelte_type_style_lang = `*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,::before,::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}[type='text']:focus,[type='email']:focus,[type='url']:focus,[type='password']:focus,[type='number']:focus,[type='date']:focus,[type='datetime-local']:focus,[type='month']:focus,[type='search']:focus,[type='tel']:focus,[type='time']:focus,[type='week']:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;-webkit-print-color-adjust:unset;color-adjust:unset}[type='checkbox'],[type='radio']{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px}[type='checkbox']{border-radius:0px}[type='radio']{border-radius:100%}[type='checkbox']:focus,[type='radio']:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}[type='checkbox']:checked,[type='radio']:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}[type='radio']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{border-color:transparent;background-color:currentColor}[type='checkbox']:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{border-color:transparent;background-color:currentColor}[type='file']{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file']:focus{outline:1px auto -webkit-focus-ring-color}.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}@media(min-width: 1536px){.container{max-width:1536px}}.form-checkbox:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1em;width:1em;color:#3b82f6;background-color:#fff}.form-checkbox:focus{outline:none;border-color:#60a5fa}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.fixed{position:fixed}.relative{position:relative}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.top-0{top:0px}.left-0{left:0px}.bottom-0{bottom:0px}.z-10{z-index:10}.z-50{z-index:50}.col-span-2{grid-column:span 2 / span 2}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.-mx-5{margin-left:-1.25rem;margin-right:-1.25rem}.-my-2{margin-top:-0.5rem;margin-bottom:-0.5rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mr-2{margin-right:0.5rem}.mt-2{margin-top:0.5rem}.mt-3{margin-top:0.75rem}.mt-5{margin-top:1.25rem}.ml-2{margin-left:0.5rem}.mt-8{margin-top:2rem}.mt-6{margin-top:1.5rem}.mb-4{margin-bottom:1rem}.-mt-5{margin-top:-1.25rem}.ml-4{margin-left:1rem}.ml-9{margin-left:2.25rem}.mr-3{margin-right:0.75rem}.mb-8{margin-bottom:2rem}.mr-auto{margin-right:auto}.mb-1{margin-bottom:0.25rem}.mt-auto{margin-top:auto}.mb-3{margin-bottom:0.75rem}.mt-4{margin-top:1rem}.mb-2{margin-bottom:0.5rem}.mb-5{margin-bottom:1.25rem}.ml-1{margin-left:0.25rem}.-mt-8{margin-top:-2rem}.-mt-6{margin-top:-1.5rem}.-mt-16{margin-top:-4rem}.-mt-3{margin-top:-0.75rem}.box-content{box-sizing:content-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.table{display:table}.hidden{display:none}.h-6{height:1.5rem}.h-8{height:2rem}.h-4{height:1rem}.h-1{height:0.25rem}.h-3{height:0.75rem}.h-auto{height:auto}.h-64{height:16rem}.h-20{height:5rem}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-6{width:1.5rem}.w-8{width:2rem}.w-4{width:1rem}.w-5\\/6{width:83.333333%}.w-24{width:6rem}.w-3{width:0.75rem}.w-20{width:5rem}.min-w-max{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-screen-xl{max-width:1280px}.max-w-6xl{max-width:72rem}.max-w-full{max-width:100%}.max-w-screen-sm{max-width:640px}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.table-auto{table-layout:auto}.transform{transform:var(--tw-transform)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:0.25rem}.rounded-lg{border-radius:0.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:0.375rem}.rounded-t-lg{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgba(107, 114, 128, var(--tw-border-opacity))}.border-red-900{--tw-border-opacity:1;border-color:rgba(127, 29, 29, var(--tw-border-opacity))}.border-yellow-900{--tw-border-opacity:1;border-color:rgba(120, 53, 15, var(--tw-border-opacity))}.border-green-900{--tw-border-opacity:1;border-color:rgba(6, 78, 59, var(--tw-border-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(107, 114, 128, var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity:1;background-color:rgba(167, 243, 208, var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity))}.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(199, 210, 254, var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(16, 185, 129, var(--tw-bg-opacity))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17, 24, 39, var(--tw-bg-opacity))}.bg-purple-800{--tw-bg-opacity:1;background-color:rgba(91, 33, 182, var(--tw-bg-opacity))}.bg-opacity-75{--tw-bg-opacity:0.75}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-blue-400{--tw-gradient-from:#60a5fa;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0))}.to-blue-500{--tw-gradient-to:#3b82f6}.fill-current{fill:currentColor}.p-3{padding:0.75rem}.p-8{padding:2rem}.p-9{padding:2.25rem}.p-12{padding:3rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-10{padding:2.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-8{padding-left:2rem;padding-right:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.pt-4{padding-top:1rem}.pb-20{padding-bottom:5rem}.pt-5{padding-top:1.25rem}.pb-4{padding-bottom:1rem}.pt-2{padding-top:0.5rem}.pb-0{padding-bottom:0px}.pb-6{padding-bottom:1.5rem}.pt-6{padding-top:1.5rem}.pr-16{padding-right:4rem}.pl-1{padding-left:0.25rem}.pt-1{padding-top:0.25rem}.pb-1{padding-bottom:0.25rem}.pl-12{padding-left:3rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-bottom{vertical-align:bottom}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-light{font-weight:300}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-none{line-height:1}.leading-normal{line-height:1.5}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:0.025em}.text-gray-500{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.text-blue-300{--tw-text-opacity:1;color:rgba(147, 197, 253, var(--tw-text-opacity))}.text-green-200{--tw-text-opacity:1;color:rgba(167, 243, 208, var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity:0.5}.opacity-25{opacity:0.25}.opacity-75{opacity:0.75}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.filter{filter:var(--tw-filter)}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}*/ html,body,*{font-family:'Poppins', sans-serif}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 246, 255, var(--tw-bg-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(59, 130, 246, var(--tw-ring-opacity))}@media(min-width: 640px){.sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.sm\\:my-5{margin-top:1.25rem;margin-bottom:1.25rem}.sm\\:mt-0{margin-top:0px}.sm\\:ml-4{margin-left:1rem}.sm\\:ml-auto{margin-left:auto}.sm\\:mr-3{margin-right:0.75rem}.sm\\:mr-2{margin-right:0.5rem}.sm\\:mb-0{margin-bottom:0px}.sm\\:inline-block{display:inline-block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-full{width:100%}.sm\\:w-2\\/3{width:66.666667%}.sm\\:w-auto{width:auto}.sm\\:max-w-lg{max-width:32rem}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:overflow-hidden{overflow:hidden}.sm\\:rounded-md{border-radius:0.375rem}.sm\\:p-6{padding:1.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:pb-4{padding-bottom:1rem}.sm\\:text-left{text-align:left}.sm\\:text-sm{font-size:0.875rem;line-height:1.25rem}}@media(min-width: 768px){.md\\:col-span-2{grid-column:span 2 / span 2}.md\\:mt-0{margin-top:0px}.md\\:-mt-1{margin-top:-0.25rem}.md\\:-mt-10{margin-top:-2.5rem}.md\\:grid{display:grid}.md\\:h-9{height:2.25rem}.md\\:w-1\\/2{width:50%}.md\\:w-9{width:2.25rem}.md\\:max-w-6xl{max-width:72rem}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\\:flex-row{flex-direction:row}.md\\:justify-end{justify-content:flex-end}.md\\:gap-6{gap:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-sm{font-size:0.875rem;line-height:1.25rem}}@media(min-width: 1024px){.lg\\:order-1{order:1}.lg\\:order-2{order:2}.lg\\:order-3{order:3}.lg\\:order-4{order:4}.lg\\:col-span-2{grid-column:span 2 / span 2}.lg\\:col-span-1{grid-column:span 1 / span 1}.lg\\:row-span-1{grid-row:span 1 / span 1}.lg\\:row-span-2{grid-row:span 2 / span 2}.lg\\:row-span-4{grid-row:span 4 / span 4}.lg\\:mb-0{margin-bottom:0px}.lg\\:ml-3{margin-left:0.75rem}.lg\\:-mt-11{margin-top:-2.75rem}.lg\\:grid{display:grid}.lg\\:h-10{height:2.5rem}.lg\\:w-1\\/3{width:33.333333%}.lg\\:w-10{width:2.5rem}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.lg\\:gap-4{gap:1rem}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:px-9{padding-left:2.25rem;padding-right:2.25rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pb-4{padding-bottom:1rem}.lg\\:pl-16{padding-left:4rem}}@media(min-width: 1536px){.\\32xl\\:row-span-1{grid-row:span 1 / span 1}.\\32xl\\:row-span-2{grid-row:span 2 / span 2}.\\32xl\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}.\\32xl\\:mx-8{margin-left:2rem;margin-right:2rem}.\\32xl\\:my-2{margin-top:0.5rem;margin-bottom:0.5rem}.\\32xl\\:mx-2{margin-left:0.5rem;margin-right:0.5rem}.\\32xl\\:mb-8{margin-bottom:2rem}.\\32xl\\:ml-0{margin-left:0px}.\\32xl\\:-mt-4{margin-top:-1rem}.\\32xl\\:-mt-20{margin-top:-5rem}.\\32xl\\:h-screen{height:100vh}.\\32xl\\:h-20{height:5rem}.\\32xl\\:w-20{width:5rem}.\\32xl\\:gap-6{gap:1.5rem}.\\32xl\\:pb-20{padding-bottom:5rem}.\\32xl\\:pb-8{padding-bottom:2rem}.\\32xl\\:pl-20{padding-left:5rem}.\\32xl\\:pt-6{padding-top:1.5rem}.\\32xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.\\32xl\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.\\32xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}`;
const css = {
  code: `*,::before,::after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,
		-apple-system, /* Firefox supports this but not yet \`system-ui\` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,::before,::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-shadow:0 0 #0000;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem}[type='text']:focus,[type='email']:focus,[type='url']:focus,[type='password']:focus,[type='number']:focus,[type='date']:focus,[type='datetime-local']:focus,[type='month']:focus,[type='search']:focus,[type='tel']:focus,[type='time']:focus,[type='week']:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right 0.5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:0.75rem;-webkit-print-color-adjust:unset;color-adjust:unset}[type='checkbox'],[type='radio']{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px}[type='checkbox']{border-radius:0px}[type='radio']{border-radius:100%}[type='checkbox']:focus,[type='radio']:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}[type='checkbox']:checked,[type='radio']:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}[type='radio']:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{border-color:transparent;background-color:currentColor}[type='checkbox']:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{border-color:transparent;background-color:currentColor}[type='file']{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file']:focus{outline:1px auto -webkit-focus-ring-color}.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}@media(min-width: 1536px){.container{max-width:1536px}}.form-checkbox:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1em;width:1em;color:#3b82f6;background-color:#fff}.form-checkbox:focus{outline:none;border-color:#60a5fa}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.fixed{position:fixed}.relative{position:relative}.inset-0{top:0px;right:0px;bottom:0px;left:0px}.top-0{top:0px}.left-0{left:0px}.bottom-0{bottom:0px}.z-10{z-index:10}.z-50{z-index:50}.col-span-2{grid-column:span 2 / span 2}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.-mx-5{margin-left:-1.25rem;margin-right:-1.25rem}.-my-2{margin-top:-0.5rem;margin-bottom:-0.5rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mr-2{margin-right:0.5rem}.mt-2{margin-top:0.5rem}.mt-3{margin-top:0.75rem}.mt-5{margin-top:1.25rem}.ml-2{margin-left:0.5rem}.mt-8{margin-top:2rem}.mt-6{margin-top:1.5rem}.mb-4{margin-bottom:1rem}.-mt-5{margin-top:-1.25rem}.ml-4{margin-left:1rem}.ml-9{margin-left:2.25rem}.mr-3{margin-right:0.75rem}.mb-8{margin-bottom:2rem}.mr-auto{margin-right:auto}.mb-1{margin-bottom:0.25rem}.mt-auto{margin-top:auto}.mb-3{margin-bottom:0.75rem}.mt-4{margin-top:1rem}.mb-2{margin-bottom:0.5rem}.mb-5{margin-bottom:1.25rem}.ml-1{margin-left:0.25rem}.-mt-8{margin-top:-2rem}.-mt-6{margin-top:-1.5rem}.-mt-16{margin-top:-4rem}.-mt-3{margin-top:-0.75rem}.box-content{box-sizing:content-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.table{display:table}.hidden{display:none}.h-6{height:1.5rem}.h-8{height:2rem}.h-4{height:1rem}.h-1{height:0.25rem}.h-3{height:0.75rem}.h-auto{height:auto}.h-64{height:16rem}.h-20{height:5rem}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-6{width:1.5rem}.w-8{width:2rem}.w-4{width:1rem}.w-5\\/6{width:83.333333%}.w-24{width:6rem}.w-3{width:0.75rem}.w-20{width:5rem}.min-w-max{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-screen-xl{max-width:1280px}.max-w-6xl{max-width:72rem}.max-w-full{max-width:100%}.max-w-screen-sm{max-width:640px}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.table-auto{table-layout:auto}.transform{transform:var(--tw-transform)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:0.25rem}.rounded-lg{border-radius:0.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:0.375rem}.rounded-t-lg{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209, 213, 219, var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgba(107, 114, 128, var(--tw-border-opacity))}.border-red-900{--tw-border-opacity:1;border-color:rgba(127, 29, 29, var(--tw-border-opacity))}.border-yellow-900{--tw-border-opacity:1;border-color:rgba(120, 53, 15, var(--tw-border-opacity))}.border-green-900{--tw-border-opacity:1;border-color:rgba(6, 78, 59, var(--tw-border-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgba(107, 114, 128, var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity:1;background-color:rgba(167, 243, 208, var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgba(59, 130, 246, var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity))}.bg-indigo-200{--tw-bg-opacity:1;background-color:rgba(199, 210, 254, var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgba(239, 68, 68, var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:rgba(245, 158, 11, var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgba(16, 185, 129, var(--tw-bg-opacity))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17, 24, 39, var(--tw-bg-opacity))}.bg-purple-800{--tw-bg-opacity:1;background-color:rgba(91, 33, 182, var(--tw-bg-opacity))}.bg-opacity-75{--tw-bg-opacity:0.75}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-blue-400{--tw-gradient-from:#60a5fa;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0))}.to-blue-500{--tw-gradient-to:#3b82f6}.fill-current{fill:currentColor}.p-3{padding:0.75rem}.p-8{padding:2rem}.p-9{padding:2.25rem}.p-12{padding:3rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-10{padding:2.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-8{padding-left:2rem;padding-right:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-7{padding-left:1.75rem;padding-right:1.75rem}.pt-4{padding-top:1rem}.pb-20{padding-bottom:5rem}.pt-5{padding-top:1.25rem}.pb-4{padding-bottom:1rem}.pt-2{padding-top:0.5rem}.pb-0{padding-bottom:0px}.pb-6{padding-bottom:1.5rem}.pt-6{padding-top:1.5rem}.pr-16{padding-right:4rem}.pl-1{padding-left:0.25rem}.pt-1{padding-top:0.25rem}.pb-1{padding-bottom:0.25rem}.pl-12{padding-left:3rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-bottom{vertical-align:bottom}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-xs{font-size:0.75rem;line-height:1rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-light{font-weight:300}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-none{line-height:1}.leading-normal{line-height:1.5}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:0.025em}.text-gray-500{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgba(16, 185, 129, var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgba(59, 130, 246, var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))}.text-blue-300{--tw-text-opacity:1;color:rgba(147, 197, 253, var(--tw-text-opacity))}.text-green-200{--tw-text-opacity:1;color:rgba(167, 243, 208, var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity:0.5}.opacity-25{opacity:0.25}.opacity-75{opacity:0.75}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.filter{filter:var(--tw-filter)}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition{transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');*/ html,body,*{font-family:'Poppins', sans-serif}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgba(37, 99, 235, var(--tw-bg-opacity))}.hover\\:bg-blue-50:hover{--tw-bg-opacity:1;background-color:rgba(239, 246, 255, var(--tw-bg-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgba(17, 24, 39, var(--tw-text-opacity))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgba(59, 130, 246, var(--tw-border-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(59, 130, 246, var(--tw-ring-opacity))}@media(min-width: 640px){.sm\\:my-8{margin-top:2rem;margin-bottom:2rem}.sm\\:my-5{margin-top:1.25rem;margin-bottom:1.25rem}.sm\\:mt-0{margin-top:0px}.sm\\:ml-4{margin-left:1rem}.sm\\:ml-auto{margin-left:auto}.sm\\:mr-3{margin-right:0.75rem}.sm\\:mr-2{margin-right:0.5rem}.sm\\:mb-0{margin-bottom:0px}.sm\\:inline-block{display:inline-block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:w-full{width:100%}.sm\\:w-2\\/3{width:66.666667%}.sm\\:w-auto{width:auto}.sm\\:max-w-lg{max-width:32rem}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:items-center{align-items:center}.sm\\:justify-start{justify-content:flex-start}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:overflow-hidden{overflow:hidden}.sm\\:rounded-md{border-radius:0.375rem}.sm\\:p-6{padding:1.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:pb-4{padding-bottom:1rem}.sm\\:text-left{text-align:left}.sm\\:text-sm{font-size:0.875rem;line-height:1.25rem}}@media(min-width: 768px){.md\\:col-span-2{grid-column:span 2 / span 2}.md\\:mt-0{margin-top:0px}.md\\:-mt-1{margin-top:-0.25rem}.md\\:-mt-10{margin-top:-2.5rem}.md\\:grid{display:grid}.md\\:h-9{height:2.25rem}.md\\:w-1\\/2{width:50%}.md\\:w-9{width:2.25rem}.md\\:max-w-6xl{max-width:72rem}.md\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\\:flex-row{flex-direction:row}.md\\:justify-end{justify-content:flex-end}.md\\:gap-6{gap:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-sm{font-size:0.875rem;line-height:1.25rem}}@media(min-width: 1024px){.lg\\:order-1{order:1}.lg\\:order-2{order:2}.lg\\:order-3{order:3}.lg\\:order-4{order:4}.lg\\:col-span-2{grid-column:span 2 / span 2}.lg\\:col-span-1{grid-column:span 1 / span 1}.lg\\:row-span-1{grid-row:span 1 / span 1}.lg\\:row-span-2{grid-row:span 2 / span 2}.lg\\:row-span-4{grid-row:span 4 / span 4}.lg\\:mb-0{margin-bottom:0px}.lg\\:ml-3{margin-left:0.75rem}.lg\\:-mt-11{margin-top:-2.75rem}.lg\\:grid{display:grid}.lg\\:h-10{height:2.5rem}.lg\\:w-1\\/3{width:33.333333%}.lg\\:w-10{width:2.5rem}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.lg\\:gap-4{gap:1rem}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:px-9{padding-left:2.25rem;padding-right:2.25rem}.lg\\:pb-14{padding-bottom:3.5rem}.lg\\:pb-4{padding-bottom:1rem}.lg\\:pl-16{padding-left:4rem}}@media(min-width: 1536px){.\\32xl\\:row-span-1{grid-row:span 1 / span 1}.\\32xl\\:row-span-2{grid-row:span 2 / span 2}.\\32xl\\:mx-10{margin-left:2.5rem;margin-right:2.5rem}.\\32xl\\:mx-8{margin-left:2rem;margin-right:2rem}.\\32xl\\:my-2{margin-top:0.5rem;margin-bottom:0.5rem}.\\32xl\\:mx-2{margin-left:0.5rem;margin-right:0.5rem}.\\32xl\\:mb-8{margin-bottom:2rem}.\\32xl\\:ml-0{margin-left:0px}.\\32xl\\:-mt-4{margin-top:-1rem}.\\32xl\\:-mt-20{margin-top:-5rem}.\\32xl\\:h-screen{height:100vh}.\\32xl\\:h-20{height:5rem}.\\32xl\\:w-20{width:5rem}.\\32xl\\:gap-6{gap:1.5rem}.\\32xl\\:pb-20{padding-bottom:5rem}.\\32xl\\:pb-8{padding-bottom:2rem}.\\32xl\\:pl-20{padding-left:5rem}.\\32xl\\:pt-6{padding-top:1.5rem}.\\32xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.\\32xl\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.\\32xl\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}`,
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from '$app/stores';\\r\\nimport { titles } from '../data/titles';\\r\\nimport Footer from '../sections/Footer.svelte';\\r\\nimport Navbar from '../sections/Navbar.svelte';\\r\\nlet path = '';\\r\\npage.subscribe((page) => {\\r\\n    path = page.path;\\r\\n});\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{titles[path]}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<Navbar {path} />\\r\\n<slot />\\r\\n<Footer />\\r\\n\\r\\n<style global lang=\\"postcss\\">/*! tailwindcss v2.2.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\\n\\n/*\\nDocument\\n========\\n*/\\n\\n/**\\nUse a better box model (opinionated).\\n*/\\n\\n:global(*),\\n:global(::before),\\n:global(::after) {\\n\\tbox-sizing: border-box;\\n}\\n\\n/**\\nUse a more readable tab size (opinionated).\\n*/\\n\\n:global(html) {\\n\\t-moz-tab-size: 4;\\n\\t-o-tab-size: 4;\\n\\t   tab-size: 4;\\n}\\n\\n/**\\n1. Correct the line height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n*/\\n\\n:global(html) {\\n\\tline-height: 1.15; /* 1 */\\n\\t-webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/*\\nSections\\n========\\n*/\\n\\n/**\\nRemove the margin in all browsers.\\n*/\\n\\n:global(body) {\\n\\tmargin: 0;\\n}\\n\\n/**\\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n*/\\n\\n:global(body) {\\n\\tfont-family:\\n\\t\\tsystem-ui,\\n\\t\\t-apple-system, /* Firefox supports this but not yet \`system-ui\` */\\n\\t\\t'Segoe UI',\\n\\t\\tRoboto,\\n\\t\\tHelvetica,\\n\\t\\tArial,\\n\\t\\tsans-serif,\\n\\t\\t'Apple Color Emoji',\\n\\t\\t'Segoe UI Emoji';\\n}\\n\\n/*\\nGrouping content\\n================\\n*/\\n\\n/**\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n*/\\n\\n:global(hr) {\\n\\theight: 0; /* 1 */\\n\\tcolor: inherit; /* 2 */\\n}\\n\\n/*\\nText-level semantics\\n====================\\n*/\\n\\n/**\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\n:global(abbr[title]) {\\n\\t-webkit-text-decoration: underline dotted;\\n\\t        text-decoration: underline dotted;\\n}\\n\\n/**\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\n:global(b),\\n:global(strong) {\\n\\tfont-weight: bolder;\\n}\\n\\n/**\\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n2. Correct the odd 'em' font sizing in all browsers.\\n*/\\n\\n:global(code),\\n:global(kbd),\\n:global(samp),\\n:global(pre) {\\n\\tfont-family:\\n\\t\\tui-monospace,\\n\\t\\tSFMono-Regular,\\n\\t\\tConsolas,\\n\\t\\t'Liberation Mono',\\n\\t\\tMenlo,\\n\\t\\tmonospace; /* 1 */\\n\\tfont-size: 1em; /* 2 */\\n}\\n\\n/**\\nAdd the correct font size in all browsers.\\n*/\\n\\n:global(small) {\\n\\tfont-size: 80%;\\n}\\n\\n/**\\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\\n*/\\n\\n:global(sub),\\n:global(sup) {\\n\\tfont-size: 75%;\\n\\tline-height: 0;\\n\\tposition: relative;\\n\\tvertical-align: baseline;\\n}\\n\\n:global(sub) {\\n\\tbottom: -0.25em;\\n}\\n\\n:global(sup) {\\n\\ttop: -0.5em;\\n}\\n\\n/*\\nTabular data\\n============\\n*/\\n\\n/**\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n*/\\n\\n:global(table) {\\n\\ttext-indent: 0; /* 1 */\\n\\tborder-color: inherit; /* 2 */\\n}\\n\\n/*\\nForms\\n=====\\n*/\\n\\n/**\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n*/\\n\\n:global(button),\\n:global(input),\\n:global(optgroup),\\n:global(select),\\n:global(textarea) {\\n\\tfont-family: inherit; /* 1 */\\n\\tfont-size: 100%; /* 1 */\\n\\tline-height: 1.15; /* 1 */\\n\\tmargin: 0; /* 2 */\\n}\\n\\n/**\\nRemove the inheritance of text transform in Edge and Firefox.\\n1. Remove the inheritance of text transform in Firefox.\\n*/\\n\\n:global(button),\\n:global(select) { /* 1 */\\n\\ttext-transform: none;\\n}\\n\\n/**\\nCorrect the inability to style clickable types in iOS and Safari.\\n*/\\n\\n:global(button),\\n:global([type='button']),\\n:global([type='reset']),\\n:global([type='submit']) {\\n\\t-webkit-appearance: button;\\n}\\n\\n/**\\nRemove the inner border and padding in Firefox.\\n*/\\n\\n:global(::-moz-focus-inner) {\\n\\tborder-style: none;\\n\\tpadding: 0;\\n}\\n\\n/**\\nRestore the focus styles unset by the previous rule.\\n*/\\n\\n:global(:-moz-focusring) {\\n\\toutline: 1px dotted ButtonText;\\n}\\n\\n/**\\nRemove the additional ':invalid' styles in Firefox.\\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\\n*/\\n\\n:global(:-moz-ui-invalid) {\\n\\tbox-shadow: none;\\n}\\n\\n/**\\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\\n*/\\n\\n:global(legend) {\\n\\tpadding: 0;\\n}\\n\\n/**\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\n:global(progress) {\\n\\tvertical-align: baseline;\\n}\\n\\n/**\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n:global(::-webkit-inner-spin-button),\\n:global(::-webkit-outer-spin-button) {\\n\\theight: auto;\\n}\\n\\n/**\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n:global([type='search']) {\\n\\t-webkit-appearance: textfield; /* 1 */\\n\\toutline-offset: -2px; /* 2 */\\n}\\n\\n/**\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n:global(::-webkit-search-decoration) {\\n\\t-webkit-appearance: none;\\n}\\n\\n/**\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to 'inherit' in Safari.\\n*/\\n\\n:global(::-webkit-file-upload-button) {\\n\\t-webkit-appearance: button; /* 1 */\\n\\tfont: inherit; /* 2 */\\n}\\n\\n/*\\nInteractive\\n===========\\n*/\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\n:global(summary) {\\n\\tdisplay: list-item;\\n}/**\\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\\n * A thin layer on top of normalize.css that provides a starting point more\\n * suitable for web applications.\\n */\\n\\n/**\\n * Removes the default spacing and border for appropriate elements.\\n */\\n\\n:global(blockquote),\\n:global(dl),\\n:global(dd),\\n:global(h1),\\n:global(h2),\\n:global(h3),\\n:global(h4),\\n:global(h5),\\n:global(h6),\\n:global(hr),\\n:global(figure),\\n:global(p),\\n:global(pre) {\\n  margin: 0;\\n}\\n\\n:global(button) {\\n  background-color: transparent;\\n  background-image: none;\\n}\\n\\n:global(fieldset) {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n:global(ol),\\n:global(ul) {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/**\\n * Tailwind custom reset styles\\n */\\n\\n/**\\n * 1. Use the user's configured \`sans\` font-family (with Tailwind's default\\n *    sans-serif font stack as a fallback) as a sane default.\\n * 2. Use Tailwind's default \\"normal\\" line-height so the user isn't forced\\n *    to override it to ensure consistency even when using the default theme.\\n */\\n\\n:global(html) {\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"; /* 1 */\\n  line-height: 1.5; /* 2 */\\n}\\n\\n\\n/**\\n * Inherit font-family and line-height from \`html\` so users can set them as\\n * a class directly on the \`html\` element.\\n */\\n\\n:global(body) {\\n  font-family: inherit;\\n  line-height: inherit;\\n}\\n\\n/**\\n * 1. Prevent padding and border from affecting element width.\\n *\\n *    We used to set this in the html element and inherit from\\n *    the parent element for everything else. This caused issues\\n *    in shadow-dom-enhanced elements like <details> where the content\\n *    is wrapped by a div with box-sizing set to \`content-box\`.\\n *\\n *    https://github.com/mozdevs/cssremedy/issues/4\\n *\\n *\\n * 2. Allow adding a border to an element by just adding a border-width.\\n *\\n *    By default, the way the browser specifies that an element should have no\\n *    border is by setting it's border-style to \`none\` in the user-agent\\n *    stylesheet.\\n *\\n *    In order to easily add borders to elements by just setting the \`border-width\`\\n *    property, we change the default border-style for all elements to \`solid\`, and\\n *    use border-width to hide them instead. This way our \`border\` utilities only\\n *    need to set the \`border-width\` property instead of the entire \`border\`\\n *    shorthand, making our border utilities much more straightforward to compose.\\n *\\n *    https://github.com/tailwindcss/tailwindcss/pull/116\\n */\\n\\n:global(*),\\n:global(::before),\\n:global(::after) {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: currentColor; /* 2 */\\n}\\n\\n/*\\n * Ensure horizontal rules are visible by default\\n */\\n\\n:global(hr) {\\n  border-top-width: 1px;\\n}\\n\\n/**\\n * Undo the \`border-style: none\` reset that Normalize applies to images so that\\n * our \`border-{width}\` utilities have the expected effect.\\n *\\n * The Normalize reset is unnecessary for us since we default the border-width\\n * to 0 on all elements.\\n *\\n * https://github.com/tailwindcss/tailwindcss/issues/362\\n */\\n\\n:global(img) {\\n  border-style: solid;\\n}\\n\\n:global(textarea) {\\n  resize: vertical;\\n}\\n\\n:global(input::-moz-placeholder), :global(textarea::-moz-placeholder) {\\n  opacity: 1;\\n  color: #9ca3af;\\n}\\n\\n:global(input:-ms-input-placeholder), :global(textarea:-ms-input-placeholder) {\\n  opacity: 1;\\n  color: #9ca3af;\\n}\\n\\n:global(input::placeholder),\\n:global(textarea::placeholder) {\\n  opacity: 1;\\n  color: #9ca3af;\\n}\\n\\n:global(button),\\n:global([role=\\"button\\"]) {\\n  cursor: pointer;\\n}\\n\\n:global(table) {\\n  border-collapse: collapse;\\n}\\n\\n:global(h1),\\n:global(h2),\\n:global(h3),\\n:global(h4),\\n:global(h5),\\n:global(h6) {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/**\\n * Reset links to optimize for opt-in styling instead of\\n * opt-out.\\n */\\n\\n:global(a) {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/**\\n * Reset form element properties that are easy to forget to\\n * style explicitly so you don't inadvertently introduce\\n * styles that deviate from your design system. These styles\\n * supplement a partial reset that is already applied by\\n * normalize.css.\\n */\\n\\n:global(button),\\n:global(input),\\n:global(optgroup),\\n:global(select),\\n:global(textarea) {\\n  padding: 0;\\n  line-height: inherit;\\n  color: inherit;\\n}\\n\\n/**\\n * Use the configured 'mono' font family for elements that\\n * are expected to be rendered with a monospace font, falling\\n * back to the system monospace stack if there is no configured\\n * 'mono' font family.\\n */\\n\\n:global(pre),\\n:global(code),\\n:global(kbd),\\n:global(samp) {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace;\\n}\\n\\n/**\\n * 1. Make replaced elements \`display: block\` by default as that's\\n *    the behavior you want almost all of the time. Inspired by\\n *    CSS Remedy, with \`svg\` added as well.\\n *\\n *    https://github.com/mozdevs/cssremedy/issues/14\\n * \\n * 2. Add \`vertical-align: middle\` to align replaced elements more\\n *    sensibly by default when overriding \`display\` by adding a\\n *    utility like \`inline\`.\\n *\\n *    This can trigger a poorly considered linting error in some\\n *    tools but is included by design.\\n * \\n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\\n */\\n\\n:global(img),\\n:global(svg),\\n:global(video),\\n:global(canvas),\\n:global(audio),\\n:global(iframe),\\n:global(embed),\\n:global(object) {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/**\\n * Constrain images and videos to the parent width and preserve\\n * their intrinsic aspect ratio.\\n *\\n * https://github.com/mozdevs/cssremedy/issues/14\\n */\\n\\n:global(img),\\n:global(video) {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n:global(*), :global(::before), :global(::after) {\\n\\t--tw-translate-x: 0;\\n\\t--tw-translate-y: 0;\\n\\t--tw-rotate: 0;\\n\\t--tw-skew-x: 0;\\n\\t--tw-skew-y: 0;\\n\\t--tw-scale-x: 1;\\n\\t--tw-scale-y: 1;\\n\\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\\n\\t--tw-shadow: 0 0 #0000;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 0px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: rgba(59, 130, 246, 0.5);\\n\\t--tw-ring-offset-shadow: 0 0 #0000;\\n\\t--tw-ring-shadow: 0 0 #0000;\\n\\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n\\t--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n}\\n\\n:global([type='text']),:global([type='email']),:global([type='url']),:global([type='password']),:global([type='number']),:global([type='date']),:global([type='datetime-local']),:global([type='month']),:global([type='search']),:global([type='tel']),:global([type='time']),:global([type='week']),:global([multiple]),:global(textarea),:global(select) {\\n\\t-webkit-appearance: none;\\n\\t   -moz-appearance: none;\\n\\t        appearance: none;\\n\\tbackground-color: #fff;\\n\\tborder-color: #6b7280;\\n\\tborder-width: 1px;\\n\\tborder-radius: 0px;\\n\\tpadding-top: 0.5rem;\\n\\tpadding-right: 0.75rem;\\n\\tpadding-bottom: 0.5rem;\\n\\tpadding-left: 0.75rem;\\n\\tfont-size: 1rem;\\n\\tline-height: 1.5rem;\\n}\\n\\n:global([type='text']:focus), :global([type='email']:focus), :global([type='url']:focus), :global([type='password']:focus), :global([type='number']:focus), :global([type='date']:focus), :global([type='datetime-local']:focus), :global([type='month']:focus), :global([type='search']:focus), :global([type='tel']:focus), :global([type='time']:focus), :global([type='week']:focus), :global([multiple]:focus), :global(textarea:focus), :global(select:focus) {\\n\\toutline: 2px solid transparent;\\n\\toutline-offset: 2px;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 0px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: #2563eb;\\n\\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n\\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n\\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\\n\\tborder-color: #2563eb;\\n}\\n\\n:global(input::-moz-placeholder), :global(textarea::-moz-placeholder) {\\n\\tcolor: #6b7280;\\n\\topacity: 1;\\n}\\n\\n:global(input:-ms-input-placeholder), :global(textarea:-ms-input-placeholder) {\\n\\tcolor: #6b7280;\\n\\topacity: 1;\\n}\\n\\n:global(input::placeholder),:global(textarea::placeholder) {\\n\\tcolor: #6b7280;\\n\\topacity: 1;\\n}\\n\\n:global(::-webkit-datetime-edit-fields-wrapper) {\\n\\tpadding: 0;\\n}\\n\\n:global(::-webkit-date-and-time-value) {\\n\\tmin-height: 1.5em;\\n}\\n\\n:global(select) {\\n\\tbackground-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\\");\\n\\tbackground-position: right 0.5rem center;\\n\\tbackground-repeat: no-repeat;\\n\\tbackground-size: 1.5em 1.5em;\\n\\tpadding-right: 2.5rem;\\n\\t-webkit-print-color-adjust: exact;\\n\\t        color-adjust: exact;\\n}\\n\\n:global([multiple]) {\\n\\tbackground-image: initial;\\n\\tbackground-position: initial;\\n\\tbackground-repeat: unset;\\n\\tbackground-size: initial;\\n\\tpadding-right: 0.75rem;\\n\\t-webkit-print-color-adjust: unset;\\n\\t        color-adjust: unset;\\n}\\n\\n:global([type='checkbox']),:global([type='radio']) {\\n\\t-webkit-appearance: none;\\n\\t   -moz-appearance: none;\\n\\t        appearance: none;\\n\\tpadding: 0;\\n\\t-webkit-print-color-adjust: exact;\\n\\t        color-adjust: exact;\\n\\tdisplay: inline-block;\\n\\tvertical-align: middle;\\n\\tbackground-origin: border-box;\\n\\t-webkit-user-select: none;\\n\\t   -moz-user-select: none;\\n\\t    -ms-user-select: none;\\n\\t        user-select: none;\\n\\tflex-shrink: 0;\\n\\theight: 1rem;\\n\\twidth: 1rem;\\n\\tcolor: #2563eb;\\n\\tbackground-color: #fff;\\n\\tborder-color: #6b7280;\\n\\tborder-width: 1px;\\n}\\n\\n:global([type='checkbox']) {\\n\\tborder-radius: 0px;\\n}\\n\\n:global([type='radio']) {\\n\\tborder-radius: 100%;\\n}\\n\\n:global([type='checkbox']:focus),:global([type='radio']:focus) {\\n\\toutline: 2px solid transparent;\\n\\toutline-offset: 2px;\\n\\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\\n\\t--tw-ring-offset-width: 2px;\\n\\t--tw-ring-offset-color: #fff;\\n\\t--tw-ring-color: #2563eb;\\n\\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n\\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n\\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\\n}\\n\\n:global([type='checkbox']:checked),:global([type='radio']:checked) {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n\\tbackground-size: 100% 100%;\\n\\tbackground-position: center;\\n\\tbackground-repeat: no-repeat;\\n}\\n\\n:global([type='checkbox']:checked) {\\n\\tbackground-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\");\\n}\\n\\n:global([type='radio']:checked) {\\n\\tbackground-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\\");\\n}\\n\\n:global([type='checkbox']:checked:hover),:global([type='checkbox']:checked:focus),:global([type='radio']:checked:hover),:global([type='radio']:checked:focus) {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n}\\n\\n:global([type='checkbox']:indeterminate) {\\n\\tbackground-image: url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n\\tbackground-size: 100% 100%;\\n\\tbackground-position: center;\\n\\tbackground-repeat: no-repeat;\\n}\\n\\n:global([type='checkbox']:indeterminate:hover),:global([type='checkbox']:indeterminate:focus) {\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n}\\n\\n:global([type='file']) {\\n\\tbackground: unset;\\n\\tborder-color: inherit;\\n\\tborder-width: 0;\\n\\tborder-radius: 0;\\n\\tpadding: 0;\\n\\tfont-size: unset;\\n\\tline-height: inherit;\\n}\\n\\n:global([type='file']:focus) {\\n\\toutline: 1px auto -webkit-focus-ring-color;\\n}\\r\\n\\t:global(.container) {\\n\\twidth: 100%;\\n}\\r\\n\\t@media (min-width: 640px) {\\n\\n\\t:global(.container) {\\n\\t\\tmax-width: 640px;\\n\\t}\\n}\\r\\n\\t@media (min-width: 768px) {\\n\\n\\t:global(.container) {\\n\\t\\tmax-width: 768px;\\n\\t}\\n}\\r\\n\\t@media (min-width: 1024px) {\\n\\n\\t:global(.container) {\\n\\t\\tmax-width: 1024px;\\n\\t}\\n}\\r\\n\\t@media (min-width: 1280px) {\\n\\n\\t:global(.container) {\\n\\t\\tmax-width: 1280px;\\n\\t}\\n}\\r\\n\\t@media (min-width: 1536px) {\\n\\n\\t:global(.container) {\\n\\t\\tmax-width: 1536px;\\n\\t}\\n}\\r\\n\\t:global(.form-checkbox:checked) {\\n\\tbackground-image: url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\\");\\n\\tborder-color: transparent;\\n\\tbackground-color: currentColor;\\n\\tbackground-size: 100% 100%;\\n\\tbackground-position: center;\\n\\tbackground-repeat: no-repeat;\\n}\\r\\n\\t@media not print {\\n\\n\\t:global(.form-checkbox::-ms-check) {\\n\\t\\tcolor: transparent;\\n\\t\\tbackground: inherit;\\n\\t\\tborder-color: inherit;\\n\\t\\tborder-radius: inherit;\\n\\t}\\n}\\r\\n\\t:global(.form-checkbox) {\\n\\t-webkit-appearance: none;\\n\\t   -moz-appearance: none;\\n\\t        appearance: none;\\n\\t-webkit-print-color-adjust: exact;\\n\\t        color-adjust: exact;\\n\\tdisplay: inline-block;\\n\\tvertical-align: middle;\\n\\tbackground-origin: border-box;\\n\\t-webkit-user-select: none;\\n\\t   -moz-user-select: none;\\n\\t    -ms-user-select: none;\\n\\t        user-select: none;\\n\\tflex-shrink: 0;\\n\\theight: 1em;\\n\\twidth: 1em;\\n\\tcolor: #3b82f6;\\n\\tbackground-color: #fff;\\n}\\r\\n\\t:global(.form-checkbox:focus) {\\n\\toutline: none;\\n\\tborder-color: #60a5fa;\\n}\\r\\n\\t:global(.sr-only) {\\n\\tposition: absolute;\\n\\twidth: 1px;\\n\\theight: 1px;\\n\\tpadding: 0;\\n\\tmargin: -1px;\\n\\toverflow: hidden;\\n\\tclip: rect(0, 0, 0, 0);\\n\\twhite-space: nowrap;\\n\\tborder-width: 0;\\n}\\r\\n\\t:global(.fixed) {\\n\\tposition: fixed;\\n}\\r\\n\\t:global(.relative) {\\n\\tposition: relative;\\n}\\r\\n\\t:global(.inset-0) {\\n\\ttop: 0px;\\n\\tright: 0px;\\n\\tbottom: 0px;\\n\\tleft: 0px;\\n}\\r\\n\\t:global(.top-0) {\\n\\ttop: 0px;\\n}\\r\\n\\t:global(.left-0) {\\n\\tleft: 0px;\\n}\\r\\n\\t:global(.bottom-0) {\\n\\tbottom: 0px;\\n}\\r\\n\\t:global(.z-10) {\\n\\tz-index: 10;\\n}\\r\\n\\t:global(.z-50) {\\n\\tz-index: 50;\\n}\\r\\n\\t:global(.col-span-2) {\\n\\tgrid-column: span 2 / span 2;\\n}\\r\\n\\t:global(.m-auto) {\\n\\tmargin: auto;\\n}\\r\\n\\t:global(.mx-auto) {\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\r\\n\\t:global(.my-8) {\\n\\tmargin-top: 2rem;\\n\\tmargin-bottom: 2rem;\\n}\\r\\n\\t:global(.-mx-5) {\\n\\tmargin-left: -1.25rem;\\n\\tmargin-right: -1.25rem;\\n}\\r\\n\\t:global(.-my-2) {\\n\\tmargin-top: -0.5rem;\\n\\tmargin-bottom: -0.5rem;\\n}\\r\\n\\t:global(.my-6) {\\n\\tmargin-top: 1.5rem;\\n\\tmargin-bottom: 1.5rem;\\n}\\r\\n\\t:global(.my-4) {\\n\\tmargin-top: 1rem;\\n\\tmargin-bottom: 1rem;\\n}\\r\\n\\t:global(.my-3) {\\n\\tmargin-top: 0.75rem;\\n\\tmargin-bottom: 0.75rem;\\n}\\r\\n\\t:global(.mx-6) {\\n\\tmargin-left: 1.5rem;\\n\\tmargin-right: 1.5rem;\\n}\\r\\n\\t:global(.mr-2) {\\n\\tmargin-right: 0.5rem;\\n}\\r\\n\\t:global(.mt-2) {\\n\\tmargin-top: 0.5rem;\\n}\\r\\n\\t:global(.mt-3) {\\n\\tmargin-top: 0.75rem;\\n}\\r\\n\\t:global(.mt-5) {\\n\\tmargin-top: 1.25rem;\\n}\\r\\n\\t:global(.ml-2) {\\n\\tmargin-left: 0.5rem;\\n}\\r\\n\\t:global(.mt-8) {\\n\\tmargin-top: 2rem;\\n}\\r\\n\\t:global(.mt-6) {\\n\\tmargin-top: 1.5rem;\\n}\\r\\n\\t:global(.mb-4) {\\n\\tmargin-bottom: 1rem;\\n}\\r\\n\\t:global(.-mt-5) {\\n\\tmargin-top: -1.25rem;\\n}\\r\\n\\t:global(.ml-4) {\\n\\tmargin-left: 1rem;\\n}\\r\\n\\t:global(.ml-9) {\\n\\tmargin-left: 2.25rem;\\n}\\r\\n\\t:global(.mr-3) {\\n\\tmargin-right: 0.75rem;\\n}\\r\\n\\t:global(.mb-8) {\\n\\tmargin-bottom: 2rem;\\n}\\r\\n\\t:global(.mr-auto) {\\n\\tmargin-right: auto;\\n}\\r\\n\\t:global(.mb-1) {\\n\\tmargin-bottom: 0.25rem;\\n}\\r\\n\\t:global(.mt-auto) {\\n\\tmargin-top: auto;\\n}\\r\\n\\t:global(.mb-3) {\\n\\tmargin-bottom: 0.75rem;\\n}\\r\\n\\t:global(.mt-4) {\\n\\tmargin-top: 1rem;\\n}\\r\\n\\t:global(.mb-2) {\\n\\tmargin-bottom: 0.5rem;\\n}\\r\\n\\t:global(.mb-5) {\\n\\tmargin-bottom: 1.25rem;\\n}\\r\\n\\t:global(.ml-1) {\\n\\tmargin-left: 0.25rem;\\n}\\r\\n\\t:global(.-mt-8) {\\n\\tmargin-top: -2rem;\\n}\\r\\n\\t:global(.-mt-6) {\\n\\tmargin-top: -1.5rem;\\n}\\r\\n\\t:global(.-mt-16) {\\n\\tmargin-top: -4rem;\\n}\\r\\n\\t:global(.-mt-3) {\\n\\tmargin-top: -0.75rem;\\n}\\r\\n\\t:global(.box-content) {\\n\\tbox-sizing: content-box;\\n}\\r\\n\\t:global(.block) {\\n\\tdisplay: block;\\n}\\r\\n\\t:global(.inline-block) {\\n\\tdisplay: inline-block;\\n}\\r\\n\\t:global(.inline) {\\n\\tdisplay: inline;\\n}\\r\\n\\t:global(.flex) {\\n\\tdisplay: flex;\\n}\\r\\n\\t:global(.table) {\\n\\tdisplay: table;\\n}\\r\\n\\t:global(.hidden) {\\n\\tdisplay: none;\\n}\\r\\n\\t:global(.h-6) {\\n\\theight: 1.5rem;\\n}\\r\\n\\t:global(.h-8) {\\n\\theight: 2rem;\\n}\\r\\n\\t:global(.h-4) {\\n\\theight: 1rem;\\n}\\r\\n\\t:global(.h-1) {\\n\\theight: 0.25rem;\\n}\\r\\n\\t:global(.h-3) {\\n\\theight: 0.75rem;\\n}\\r\\n\\t:global(.h-auto) {\\n\\theight: auto;\\n}\\r\\n\\t:global(.h-64) {\\n\\theight: 16rem;\\n}\\r\\n\\t:global(.h-20) {\\n\\theight: 5rem;\\n}\\r\\n\\t:global(.min-h-screen) {\\n\\tmin-height: 100vh;\\n}\\r\\n\\t:global(.w-full) {\\n\\twidth: 100%;\\n}\\r\\n\\t:global(.w-6) {\\n\\twidth: 1.5rem;\\n}\\r\\n\\t:global(.w-8) {\\n\\twidth: 2rem;\\n}\\r\\n\\t:global(.w-4) {\\n\\twidth: 1rem;\\n}\\r\\n\\t:global(.w-5\\\\/6) {\\n\\twidth: 83.333333%;\\n}\\r\\n\\t:global(.w-24) {\\n\\twidth: 6rem;\\n}\\r\\n\\t:global(.w-3) {\\n\\twidth: 0.75rem;\\n}\\r\\n\\t:global(.w-20) {\\n\\twidth: 5rem;\\n}\\r\\n\\t:global(.min-w-max) {\\n\\tmin-width: -webkit-max-content;\\n\\tmin-width: -moz-max-content;\\n\\tmin-width: max-content;\\n}\\r\\n\\t:global(.max-w-md) {\\n\\tmax-width: 28rem;\\n}\\r\\n\\t:global(.max-w-sm) {\\n\\tmax-width: 24rem;\\n}\\r\\n\\t:global(.max-w-screen-xl) {\\n\\tmax-width: 1280px;\\n}\\r\\n\\t:global(.max-w-6xl) {\\n\\tmax-width: 72rem;\\n}\\r\\n\\t:global(.max-w-full) {\\n\\tmax-width: 100%;\\n}\\r\\n\\t:global(.max-w-screen-sm) {\\n\\tmax-width: 640px;\\n}\\r\\n\\t:global(.flex-1) {\\n\\tflex: 1 1 0%;\\n}\\r\\n\\t:global(.flex-shrink-0) {\\n\\tflex-shrink: 0;\\n}\\r\\n\\t:global(.table-auto) {\\n\\ttable-layout: auto;\\n}\\r\\n\\t:global(.transform) {\\n\\ttransform: var(--tw-transform);\\n}\\r\\n\\t:global(.cursor-pointer) {\\n\\tcursor: pointer;\\n}\\r\\n\\t:global(.flex-col) {\\n\\tflex-direction: column;\\n}\\r\\n\\t:global(.flex-wrap) {\\n\\tflex-wrap: wrap;\\n}\\r\\n\\t:global(.items-center) {\\n\\talign-items: center;\\n}\\r\\n\\t:global(.justify-end) {\\n\\tjustify-content: flex-end;\\n}\\r\\n\\t:global(.justify-center) {\\n\\tjustify-content: center;\\n}\\r\\n\\t:global(.justify-between) {\\n\\tjustify-content: space-between;\\n}\\r\\n\\t:global(.space-y-8) > :global(:not([hidden])) ~ :global(:not([hidden])) {\\n\\t--tw-space-y-reverse: 0;\\n\\tmargin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\\n\\tmargin-bottom: calc(2rem * var(--tw-space-y-reverse));\\n}\\r\\n\\t:global(.space-x-6) > :global(:not([hidden])) ~ :global(:not([hidden])) {\\n\\t--tw-space-x-reverse: 0;\\n\\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\\n\\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\\n}\\r\\n\\t:global(.space-y-6) > :global(:not([hidden])) ~ :global(:not([hidden])) {\\n\\t--tw-space-y-reverse: 0;\\n\\tmargin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\\n\\tmargin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\\n}\\r\\n\\t:global(.overflow-hidden) {\\n\\toverflow: hidden;\\n}\\r\\n\\t:global(.overflow-visible) {\\n\\toverflow: visible;\\n}\\r\\n\\t:global(.overflow-y-auto) {\\n\\toverflow-y: auto;\\n}\\r\\n\\t:global(.whitespace-nowrap) {\\n\\twhite-space: nowrap;\\n}\\r\\n\\t:global(.rounded) {\\n\\tborder-radius: 0.25rem;\\n}\\r\\n\\t:global(.rounded-lg) {\\n\\tborder-radius: 0.5rem;\\n}\\r\\n\\t:global(.rounded-full) {\\n\\tborder-radius: 9999px;\\n}\\r\\n\\t:global(.rounded-md) {\\n\\tborder-radius: 0.375rem;\\n}\\r\\n\\t:global(.rounded-t-lg) {\\n\\tborder-top-left-radius: 0.5rem;\\n\\tborder-top-right-radius: 0.5rem;\\n}\\r\\n\\t:global(.border) {\\n\\tborder-width: 1px;\\n}\\r\\n\\t:global(.border-2) {\\n\\tborder-width: 2px;\\n}\\r\\n\\t:global(.border-b) {\\n\\tborder-bottom-width: 1px;\\n}\\r\\n\\t:global(.border-r) {\\n\\tborder-right-width: 1px;\\n}\\r\\n\\t:global(.border-gray-300) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.border-gray-200) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.border-gray-500) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(107, 114, 128, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.border-red-900) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(127, 29, 29, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.border-yellow-900) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(120, 53, 15, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.border-green-900) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(6, 78, 59, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.bg-gray-500) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(107, 114, 128, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-white) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-gray-50) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(249, 250, 251, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-gray-200) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-green-200) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(167, 243, 208, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-blue-500) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(59, 130, 246, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-gray-800) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-indigo-200) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(199, 210, 254, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-black) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-gray-100) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-red-500) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-yellow-500) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(245, 158, 11, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-green-500) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(16, 185, 129, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-indigo-600) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(79, 70, 229, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-gray-900) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-purple-800) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(91, 33, 182, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.bg-opacity-75) {\\n\\t--tw-bg-opacity: 0.75;\\n}\\r\\n\\t:global(.bg-gradient-to-r) {\\n\\tbackground-image: linear-gradient(to right, var(--tw-gradient-stops));\\n}\\r\\n\\t:global(.from-blue-400) {\\n\\t--tw-gradient-from: #60a5fa;\\n\\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0));\\n}\\r\\n\\t:global(.to-blue-500) {\\n\\t--tw-gradient-to: #3b82f6;\\n}\\r\\n\\t:global(.fill-current) {\\n\\tfill: currentColor;\\n}\\r\\n\\t:global(.p-3) {\\n\\tpadding: 0.75rem;\\n}\\r\\n\\t:global(.p-8) {\\n\\tpadding: 2rem;\\n}\\r\\n\\t:global(.p-9) {\\n\\tpadding: 2.25rem;\\n}\\r\\n\\t:global(.p-12) {\\n\\tpadding: 3rem;\\n}\\r\\n\\t:global(.p-4) {\\n\\tpadding: 1rem;\\n}\\r\\n\\t:global(.p-6) {\\n\\tpadding: 1.5rem;\\n}\\r\\n\\t:global(.p-10) {\\n\\tpadding: 2.5rem;\\n}\\r\\n\\t:global(.px-4) {\\n\\tpadding-left: 1rem;\\n\\tpadding-right: 1rem;\\n}\\r\\n\\t:global(.py-3) {\\n\\tpadding-top: 0.75rem;\\n\\tpadding-bottom: 0.75rem;\\n}\\r\\n\\t:global(.py-4) {\\n\\tpadding-top: 1rem;\\n\\tpadding-bottom: 1rem;\\n}\\r\\n\\t:global(.px-8) {\\n\\tpadding-left: 2rem;\\n\\tpadding-right: 2rem;\\n}\\r\\n\\t:global(.px-2) {\\n\\tpadding-left: 0.5rem;\\n\\tpadding-right: 0.5rem;\\n}\\r\\n\\t:global(.py-1) {\\n\\tpadding-top: 0.25rem;\\n\\tpadding-bottom: 0.25rem;\\n}\\r\\n\\t:global(.px-3) {\\n\\tpadding-left: 0.75rem;\\n\\tpadding-right: 0.75rem;\\n}\\r\\n\\t:global(.py-2) {\\n\\tpadding-top: 0.5rem;\\n\\tpadding-bottom: 0.5rem;\\n}\\r\\n\\t:global(.px-6) {\\n\\tpadding-left: 1.5rem;\\n\\tpadding-right: 1.5rem;\\n}\\r\\n\\t:global(.py-12) {\\n\\tpadding-top: 3rem;\\n\\tpadding-bottom: 3rem;\\n}\\r\\n\\t:global(.px-5) {\\n\\tpadding-left: 1.25rem;\\n\\tpadding-right: 1.25rem;\\n}\\r\\n\\t:global(.py-5) {\\n\\tpadding-top: 1.25rem;\\n\\tpadding-bottom: 1.25rem;\\n}\\r\\n\\t:global(.py-6) {\\n\\tpadding-top: 1.5rem;\\n\\tpadding-bottom: 1.5rem;\\n}\\r\\n\\t:global(.px-7) {\\n\\tpadding-left: 1.75rem;\\n\\tpadding-right: 1.75rem;\\n}\\r\\n\\t:global(.pt-4) {\\n\\tpadding-top: 1rem;\\n}\\r\\n\\t:global(.pb-20) {\\n\\tpadding-bottom: 5rem;\\n}\\r\\n\\t:global(.pt-5) {\\n\\tpadding-top: 1.25rem;\\n}\\r\\n\\t:global(.pb-4) {\\n\\tpadding-bottom: 1rem;\\n}\\r\\n\\t:global(.pt-2) {\\n\\tpadding-top: 0.5rem;\\n}\\r\\n\\t:global(.pb-0) {\\n\\tpadding-bottom: 0px;\\n}\\r\\n\\t:global(.pb-6) {\\n\\tpadding-bottom: 1.5rem;\\n}\\r\\n\\t:global(.pt-6) {\\n\\tpadding-top: 1.5rem;\\n}\\r\\n\\t:global(.pr-16) {\\n\\tpadding-right: 4rem;\\n}\\r\\n\\t:global(.pl-1) {\\n\\tpadding-left: 0.25rem;\\n}\\r\\n\\t:global(.pt-1) {\\n\\tpadding-top: 0.25rem;\\n}\\r\\n\\t:global(.pb-1) {\\n\\tpadding-bottom: 0.25rem;\\n}\\r\\n\\t:global(.pl-12) {\\n\\tpadding-left: 3rem;\\n}\\r\\n\\t:global(.text-left) {\\n\\ttext-align: left;\\n}\\r\\n\\t:global(.text-center) {\\n\\ttext-align: center;\\n}\\r\\n\\t:global(.text-right) {\\n\\ttext-align: right;\\n}\\r\\n\\t:global(.align-bottom) {\\n\\tvertical-align: bottom;\\n}\\r\\n\\t:global(.font-mono) {\\n\\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace;\\n}\\r\\n\\t:global(.text-sm) {\\n\\tfont-size: 0.875rem;\\n\\tline-height: 1.25rem;\\n}\\r\\n\\t:global(.text-lg) {\\n\\tfont-size: 1.125rem;\\n\\tline-height: 1.75rem;\\n}\\r\\n\\t:global(.text-3xl) {\\n\\tfont-size: 1.875rem;\\n\\tline-height: 2.25rem;\\n}\\r\\n\\t:global(.text-xs) {\\n\\tfont-size: 0.75rem;\\n\\tline-height: 1rem;\\n}\\r\\n\\t:global(.text-base) {\\n\\tfont-size: 1rem;\\n\\tline-height: 1.5rem;\\n}\\r\\n\\t:global(.text-xl) {\\n\\tfont-size: 1.25rem;\\n\\tline-height: 1.75rem;\\n}\\r\\n\\t:global(.text-2xl) {\\n\\tfont-size: 1.5rem;\\n\\tline-height: 2rem;\\n}\\r\\n\\t:global(.text-4xl) {\\n\\tfont-size: 2.25rem;\\n\\tline-height: 2.5rem;\\n}\\r\\n\\t:global(.font-medium) {\\n\\tfont-weight: 500;\\n}\\r\\n\\t:global(.font-semibold) {\\n\\tfont-weight: 600;\\n}\\r\\n\\t:global(.font-light) {\\n\\tfont-weight: 300;\\n}\\r\\n\\t:global(.font-bold) {\\n\\tfont-weight: 700;\\n}\\r\\n\\t:global(.uppercase) {\\n\\ttext-transform: uppercase;\\n}\\r\\n\\t:global(.leading-6) {\\n\\tline-height: 1.5rem;\\n}\\r\\n\\t:global(.leading-none) {\\n\\tline-height: 1;\\n}\\r\\n\\t:global(.leading-normal) {\\n\\tline-height: 1.5;\\n}\\r\\n\\t:global(.leading-snug) {\\n\\tline-height: 1.375;\\n}\\r\\n\\t:global(.leading-tight) {\\n\\tline-height: 1.25;\\n}\\r\\n\\t:global(.tracking-wide) {\\n\\tletter-spacing: 0.025em;\\n}\\r\\n\\t:global(.text-gray-500) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-900) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-black) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-300) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-600) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-green-500) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(16, 185, 129, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-white) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-blue-500) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-400) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-blue-600) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-700) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-red-500) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-blue-300) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(147, 197, 253, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-green-200) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(167, 243, 208, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-gray-800) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.text-opacity-50) {\\n\\t--tw-text-opacity: 0.5;\\n}\\r\\n\\t:global(.opacity-25) {\\n\\topacity: 0.25;\\n}\\r\\n\\t:global(.opacity-75) {\\n\\topacity: 0.75;\\n}\\r\\n\\t:global(.shadow-xl) {\\n\\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.shadow-lg) {\\n\\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.shadow) {\\n\\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.shadow-2xl) {\\n\\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.shadow-md) {\\n\\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.shadow-inner) {\\n\\t--tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\\n\\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\r\\n\\t:global(.filter) {\\n\\tfilter: var(--tw-filter);\\n}\\r\\n\\t:global(.transition-opacity) {\\n\\ttransition-property: opacity;\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\ttransition-duration: 150ms;\\n}\\r\\n\\t:global(.transition-all) {\\n\\ttransition-property: all;\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\ttransition-duration: 150ms;\\n}\\r\\n\\t:global(.transition) {\\n\\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\\n\\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n\\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\\n\\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\ttransition-duration: 150ms;\\n}\\r\\n\\t:global(.duration-200) {\\n\\ttransition-duration: 200ms;\\n}\\r\\n\\r\\n\\t@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\\r\\n\\t:global(*/) :global(html),\\r\\n\\t:global(body),\\r\\n\\t:global(*) {\\r\\n\\t\\tfont-family: 'Poppins', sans-serif;\\r\\n\\t}\\r\\n\\t:global(.hover\\\\:bg-gray-100:hover) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.hover\\\\:bg-blue-600:hover) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(37, 99, 235, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.hover\\\\:bg-blue-50:hover) {\\n\\t--tw-bg-opacity: 1;\\n\\tbackground-color: rgba(239, 246, 255, var(--tw-bg-opacity));\\n}\\r\\n\\t:global(.hover\\\\:text-gray-500:hover) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.hover\\\\:text-gray-900:hover) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.hover\\\\:text-blue-600:hover) {\\n\\t--tw-text-opacity: 1;\\n\\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\\n}\\r\\n\\t:global(.focus\\\\:border-blue-500:focus) {\\n\\t--tw-border-opacity: 1;\\n\\tborder-color: rgba(59, 130, 246, var(--tw-border-opacity));\\n}\\r\\n\\t:global(.focus\\\\:ring-blue-500:focus) {\\n\\t--tw-ring-opacity: 1;\\n\\t--tw-ring-color: rgba(59, 130, 246, var(--tw-ring-opacity));\\n}\\r\\n\\t@media (min-width: 640px) {\\n\\n\\t:global(.sm\\\\:my-8) {\\n\\t\\tmargin-top: 2rem;\\n\\t\\tmargin-bottom: 2rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:my-5) {\\n\\t\\tmargin-top: 1.25rem;\\n\\t\\tmargin-bottom: 1.25rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:mt-0) {\\n\\t\\tmargin-top: 0px;\\n\\t}\\n\\n\\t:global(.sm\\\\:ml-4) {\\n\\t\\tmargin-left: 1rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:ml-auto) {\\n\\t\\tmargin-left: auto;\\n\\t}\\n\\n\\t:global(.sm\\\\:mr-3) {\\n\\t\\tmargin-right: 0.75rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:mr-2) {\\n\\t\\tmargin-right: 0.5rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:mb-0) {\\n\\t\\tmargin-bottom: 0px;\\n\\t}\\n\\n\\t:global(.sm\\\\:inline-block) {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t:global(.sm\\\\:flex) {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t:global(.sm\\\\:hidden) {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t:global(.sm\\\\:w-full) {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t:global(.sm\\\\:w-2\\\\/3) {\\n\\t\\twidth: 66.666667%;\\n\\t}\\n\\n\\t:global(.sm\\\\:w-auto) {\\n\\t\\twidth: auto;\\n\\t}\\n\\n\\t:global(.sm\\\\:max-w-lg) {\\n\\t\\tmax-width: 32rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:flex-row) {\\n\\t\\tflex-direction: row;\\n\\t}\\n\\n\\t:global(.sm\\\\:items-start) {\\n\\t\\talign-items: flex-start;\\n\\t}\\n\\n\\t:global(.sm\\\\:items-center) {\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t:global(.sm\\\\:justify-start) {\\n\\t\\tjustify-content: flex-start;\\n\\t}\\n\\n\\t:global(.sm\\\\:justify-end) {\\n\\t\\tjustify-content: flex-end;\\n\\t}\\n\\n\\t:global(.sm\\\\:space-x-5) > :global(:not([hidden])) ~ :global(:not([hidden])) {\\n\\t\\t--tw-space-x-reverse: 0;\\n\\t\\tmargin-right: calc(1.25rem * var(--tw-space-x-reverse));\\n\\t\\tmargin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\\n\\t}\\n\\n\\t:global(.sm\\\\:overflow-hidden) {\\n\\t\\toverflow: hidden;\\n\\t}\\n\\n\\t:global(.sm\\\\:rounded-md) {\\n\\t\\tborder-radius: 0.375rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:p-6) {\\n\\t\\tpadding: 1.5rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:px-6) {\\n\\t\\tpadding-left: 1.5rem;\\n\\t\\tpadding-right: 1.5rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:pb-4) {\\n\\t\\tpadding-bottom: 1rem;\\n\\t}\\n\\n\\t:global(.sm\\\\:text-left) {\\n\\t\\ttext-align: left;\\n\\t}\\n\\n\\t:global(.sm\\\\:text-sm) {\\n\\t\\tfont-size: 0.875rem;\\n\\t\\tline-height: 1.25rem;\\n\\t}\\n}\\r\\n\\t@media (min-width: 768px) {\\n\\n\\t:global(.md\\\\:col-span-2) {\\n\\t\\tgrid-column: span 2 / span 2;\\n\\t}\\n\\n\\t:global(.md\\\\:mt-0) {\\n\\t\\tmargin-top: 0px;\\n\\t}\\n\\n\\t:global(.md\\\\:-mt-1) {\\n\\t\\tmargin-top: -0.25rem;\\n\\t}\\n\\n\\t:global(.md\\\\:-mt-10) {\\n\\t\\tmargin-top: -2.5rem;\\n\\t}\\n\\n\\t:global(.md\\\\:grid) {\\n\\t\\tdisplay: grid;\\n\\t}\\n\\n\\t:global(.md\\\\:h-9) {\\n\\t\\theight: 2.25rem;\\n\\t}\\n\\n\\t:global(.md\\\\:w-1\\\\/2) {\\n\\t\\twidth: 50%;\\n\\t}\\n\\n\\t:global(.md\\\\:w-9) {\\n\\t\\twidth: 2.25rem;\\n\\t}\\n\\n\\t:global(.md\\\\:max-w-6xl) {\\n\\t\\tmax-width: 72rem;\\n\\t}\\n\\n\\t:global(.md\\\\:grid-cols-3) {\\n\\t\\tgrid-template-columns: repeat(3, minmax(0, 1fr));\\n\\t}\\n\\n\\t:global(.md\\\\:flex-row) {\\n\\t\\tflex-direction: row;\\n\\t}\\n\\n\\t:global(.md\\\\:justify-end) {\\n\\t\\tjustify-content: flex-end;\\n\\t}\\n\\n\\t:global(.md\\\\:gap-6) {\\n\\t\\tgap: 1.5rem;\\n\\t}\\n\\n\\t:global(.md\\\\:px-8) {\\n\\t\\tpadding-left: 2rem;\\n\\t\\tpadding-right: 2rem;\\n\\t}\\n\\n\\t:global(.md\\\\:text-5xl) {\\n\\t\\tfont-size: 3rem;\\n\\t\\tline-height: 1;\\n\\t}\\n\\n\\t:global(.md\\\\:text-base) {\\n\\t\\tfont-size: 1rem;\\n\\t\\tline-height: 1.5rem;\\n\\t}\\n\\n\\t:global(.md\\\\:text-sm) {\\n\\t\\tfont-size: 0.875rem;\\n\\t\\tline-height: 1.25rem;\\n\\t}\\n}\\r\\n\\t@media (min-width: 1024px) {\\n\\n\\t:global(.lg\\\\:order-1) {\\n\\t\\torder: 1;\\n\\t}\\n\\n\\t:global(.lg\\\\:order-2) {\\n\\t\\torder: 2;\\n\\t}\\n\\n\\t:global(.lg\\\\:order-3) {\\n\\t\\torder: 3;\\n\\t}\\n\\n\\t:global(.lg\\\\:order-4) {\\n\\t\\torder: 4;\\n\\t}\\n\\n\\t:global(.lg\\\\:col-span-2) {\\n\\t\\tgrid-column: span 2 / span 2;\\n\\t}\\n\\n\\t:global(.lg\\\\:col-span-1) {\\n\\t\\tgrid-column: span 1 / span 1;\\n\\t}\\n\\n\\t:global(.lg\\\\:row-span-1) {\\n\\t\\tgrid-row: span 1 / span 1;\\n\\t}\\n\\n\\t:global(.lg\\\\:row-span-2) {\\n\\t\\tgrid-row: span 2 / span 2;\\n\\t}\\n\\n\\t:global(.lg\\\\:row-span-4) {\\n\\t\\tgrid-row: span 4 / span 4;\\n\\t}\\n\\n\\t:global(.lg\\\\:mb-0) {\\n\\t\\tmargin-bottom: 0px;\\n\\t}\\n\\n\\t:global(.lg\\\\:ml-3) {\\n\\t\\tmargin-left: 0.75rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:-mt-11) {\\n\\t\\tmargin-top: -2.75rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:grid) {\\n\\t\\tdisplay: grid;\\n\\t}\\n\\n\\t:global(.lg\\\\:h-10) {\\n\\t\\theight: 2.5rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:w-1\\\\/3) {\\n\\t\\twidth: 33.333333%;\\n\\t}\\n\\n\\t:global(.lg\\\\:w-10) {\\n\\t\\twidth: 2.5rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:grid-cols-4) {\\n\\t\\tgrid-template-columns: repeat(4, minmax(0, 1fr));\\n\\t}\\n\\n\\t:global(.lg\\\\:gap-4) {\\n\\t\\tgap: 1rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:px-6) {\\n\\t\\tpadding-left: 1.5rem;\\n\\t\\tpadding-right: 1.5rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:px-8) {\\n\\t\\tpadding-left: 2rem;\\n\\t\\tpadding-right: 2rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:px-9) {\\n\\t\\tpadding-left: 2.25rem;\\n\\t\\tpadding-right: 2.25rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:pb-14) {\\n\\t\\tpadding-bottom: 3.5rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:pb-4) {\\n\\t\\tpadding-bottom: 1rem;\\n\\t}\\n\\n\\t:global(.lg\\\\:pl-16) {\\n\\t\\tpadding-left: 4rem;\\n\\t}\\n}\\r\\n\\t@media (min-width: 1536px) {\\n\\n\\t:global(.\\\\32xl\\\\:row-span-1) {\\n\\t\\tgrid-row: span 1 / span 1;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:row-span-2) {\\n\\t\\tgrid-row: span 2 / span 2;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:mx-10) {\\n\\t\\tmargin-left: 2.5rem;\\n\\t\\tmargin-right: 2.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:mx-8) {\\n\\t\\tmargin-left: 2rem;\\n\\t\\tmargin-right: 2rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:my-2) {\\n\\t\\tmargin-top: 0.5rem;\\n\\t\\tmargin-bottom: 0.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:mx-2) {\\n\\t\\tmargin-left: 0.5rem;\\n\\t\\tmargin-right: 0.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:mb-8) {\\n\\t\\tmargin-bottom: 2rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:ml-0) {\\n\\t\\tmargin-left: 0px;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:-mt-4) {\\n\\t\\tmargin-top: -1rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:-mt-20) {\\n\\t\\tmargin-top: -5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:h-screen) {\\n\\t\\theight: 100vh;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:h-20) {\\n\\t\\theight: 5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:w-20) {\\n\\t\\twidth: 5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:gap-6) {\\n\\t\\tgap: 1.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:pb-20) {\\n\\t\\tpadding-bottom: 5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:pb-8) {\\n\\t\\tpadding-bottom: 2rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:pl-20) {\\n\\t\\tpadding-left: 5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:pt-6) {\\n\\t\\tpadding-top: 1.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:text-2xl) {\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tline-height: 2rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:text-4xl) {\\n\\t\\tfont-size: 2.25rem;\\n\\t\\tline-height: 2.5rem;\\n\\t}\\n\\n\\t:global(.\\\\32xl\\\\:text-3xl) {\\n\\t\\tfont-size: 1.875rem;\\n\\t\\tline-height: 2.25rem;\\n\\t}\\n}</style>\\r\\n"],"names":[],"mappings":"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"}`
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path = "";
  page.subscribe((page2) => {
    path = page2.path;
  });
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(titles[path])}</title>`, ""}`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, { path }, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error2 } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hero } = $$props;
  if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0)
    $$bindings.hero(hero);
  return `<section class="${"m-auto max-w-6xl p-12"}"><div class="${"flex flex-col md:flex-row"}"><div class="${"md:w-1/2 max-w-md flex flex-col justify-center"}"><div class="${"md:text-5xl text-2xl uppercase font-bold"}">${escape(hero.title)}</div>
			<div class="${"text-xl mt-6 mb-4"}">${escape(hero.body)}</div>
			<div class="${"my-6"}">${validate_component(LinkButton, "LinkButton").$$render($$result, Object.assign(hero.link, { size: "lg" }), {}, {})}</div></div>
		<div class="${"flex md:justify-end w-full md:w-1/2 -mt-5"}"><div style="${"background-image: url(hero-dots.svg);background-repeat: no-repeat;"}"><div class="${"shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4"}"><img alt="${"card img"}" class="${"rounded"}"${add_attribute("src", hero.image, 0)}></div></div></div></div></section>`;
});
const IconText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon: icon2 } = $$props, { text } = $$props;
  let { height = 18 } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon2 !== void 0)
    $$bindings.icon(icon2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<div class="${"flex items-center"}">${validate_component(Icon, "Icon").$$render($$result, { icon: icon2, class: "mr-2", height }, {}, {})}
    <span class="${"font-medium"}">${escape(text)}</span></div>`;
});
const OfferCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { offer } = $$props;
  const { label, services: services2, price, per, description, name: name2 } = offer;
  if ($$props.offer === void 0 && $$bindings.offer && offer !== void 0)
    $$bindings.offer(offer);
  return `<div class="${"w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg"}">${label ? `<div class="${"text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"}">${escape(label)}</div>` : ``}
	<div class="${"block text-center text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"}"><h1 class="${"text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"}">${escape(name2)}</h1>
		<h2 class="${"text-sm text-gray-500 text-center pb-6"}"><span class="${"text-3xl"}">${escape(price)}</span>${escape(per)}</h2>
		${escape(description)}</div>
	<div class="${"flex justify-center mt-5"}"><ul>${each(services2, ({ display }) => `<li class="${"mt-2"}">${validate_component(IconText, "IconText").$$render($$result, Object.assign(display), {}, {})}
				</li>`)}</ul></div>

	<div class="${"flex items-center justify-center p-8"}">${validate_component(LinkButton, "LinkButton").$$render($$result, { href: servicesLink.href, size: "lg" }, {}, { default: () => `Select Offer` })}</div></div>`;
});
const OfferSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { offers: offers2 } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.offers === void 0 && $$bindings.offers && offers2 !== void 0)
    $$bindings.offers(offers2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<section><div class="${"container max-w-full mx-auto p-6"}"><h1 class="${"text-center text-4xl text-black font-medium leading-snug"}">${escape(title)}</h1>
		<p class="${"text-center text-lg text-gray-700 mt-2 px-6"}">${escape(description)}</p>
		<div class="${"h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"}"></div>

		<div class="${"max-w-full md:max-w-6xl mx-auto my-3 md:px-8"}"><div class="${"relative flex flex-col md:flex-row items-center justify-center"}">${each(offers2, (offer) => `${validate_component(OfferCard, "OfferCard").$$render($$result, { offer }, {}, {})}`)}</div></div></div></section>`;
});
const TestimonialCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonials: testimonials2 } = $$props;
  let i = 0;
  let quote2 = testimonials2[0];
  setInterval(() => {
    quote2 = testimonials2[++i % testimonials2.length];
  }, 5e3);
  if ($$props.testimonials === void 0 && $$bindings.testimonials && testimonials2 !== void 0)
    $$bindings.testimonials(testimonials2);
  return `<section class="${"p-12 box-content h-64 overflow-hidden"}"><div class="${"mx-auto rounded-lg bg-white shadow-lg p-10 text-gray-800 max-w-screen-sm"}"><div class="${"w-full"}"><div class="${"overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg"}"><img${add_attribute("src", quote2.author.picture, 0)} alt="${""}"></div></div>
			<div class="${"w-full mb-5"}"><div class="${"text-3xl text-blue-500 text-left leading-tight h-3"}">\u201C</div>
				<p class="${"text-md text-gray-700 text-center px-5"}">${escape(quote2.body)}</p>
				<div class="${"text-3xl text-blue-500 text-right leading-tight h-3 -mt-3"}">\u201D</div></div>
			<div class="${"w-full"}"><p class="${"text-md text-blue-500 font-bold text-center"}">${escape(quote2.author.name)}</p>
				<p class="${"text-xs text-gray-500 text-center"}">${escape(quote2.author.contact)}</p></div></div></section>`;
});
const testimonials = [
  {
    author: {
      name: "Bob Kernel",
      contact: "@bob.kernel",
      picture: "https://randomuser.me/api/portraits/men/15.jpg",
      position: ""
    },
    body: "The DTC offers amazing services that I have never dreamed of definitely without any exageration.",
    title: ""
  },
  {
    author: {
      name: "Ruby Ross",
      contact: "@ruby.ross",
      picture: "https://randomuser.me/api/portraits/women/15.jpg",
      position: ""
    },
    body: "The DTC offers amazing services that I have never dreamed of definitely without any exageration.",
    title: ""
  }
];
const weiPerson = {
  name: "Wei",
  position: "Developer",
  contact: "wei@dtc.dev",
  picture: "https://randomuser.me/api/portraits/men/15.jpg"
};
const availableStatus = {
  style: "text-green-500 bg-green-200",
  text: "Available"
};
const frontendWebService = {
  id: "frontendWebService",
  display: {
    text: "Frontend Web",
    icon: "gg-website"
  },
  description: "Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const backendWebService = {
  id: "backendWebService",
  display: {
    text: "Backend Web",
    icon: "carbon-api"
  },
  description: "Back end Development refers to the server side of development where you are primarily focused on how the site works. This type of web development usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser.",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const cloudHostingService = {
  id: "cloudHostingService",
  display: {
    text: "Cloud Hosting",
    icon: "ant-design:cloud-server-outlined"
  },
  description: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const desktopAppService = {
  id: "desktopAppService",
  display: {
    text: "Desktop App",
    icon: "ant-design:desktop-outlined"
  },
  description: "A desktop application is a software program that can be run on a standalone computer to perform a specific task by an end-user. You can also download and install different desktop applications directly from the Internet or purchased from software vendors.",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const mobileAppService = {
  id: "mobileAppService",
  display: {
    text: "Mobile App",
    icon: "ant-design:mobile-outlined"
  },
  description: "A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const dataAnalysisService = {
  id: "dataAnalysisService",
  display: {
    text: "Data Analysis",
    icon: "ant-design:line-chart-outlined"
  },
  description: "Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
  team: [weiPerson],
  status: availableStatus,
  disabled: false
};
const services$1 = [frontendWebService, backendWebService, cloudHostingService, desktopAppService, mobileAppService, dataAnalysisService];
var services$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  frontendWebService,
  backendWebService,
  cloudHostingService,
  desktopAppService,
  mobileAppService,
  dataAnalysisService,
  services: services$1
});
const webOffer = {
  label: "Best",
  name: "Full stack web",
  price: "~ $15",
  per: "/feature",
  description: "Stunning websites with a performant backend to efficiently process and safely store precious data.",
  services: [frontendWebService, backendWebService, cloudHostingService]
};
const desktopAndMobileOffer = {
  label: "",
  name: "Desktop & Mobile App",
  price: "~ $10",
  per: "/view",
  description: "Domain specific desktop and mobile application that will offer the best possible user experience.",
  services: [desktopAppService, mobileAppService]
};
const dataAnalysisOffer = {
  label: "",
  name: "Data Analysis",
  price: "~ $25",
  per: "",
  description: "Given some data, we will create a model that will predict the futur using machine learning technics.",
  services: [dataAnalysisService]
};
const offers = [desktopAndMobileOffer, webOffer, dataAnalysisOffer];
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const hero = {
    title: "Dawson Technology Club",
    body: `Fueled by our passions, we explore, learn and build technologies for people in need.`,
    link: joinLink,
    image: "/hero-image.jpg"
  };
  return `${validate_component(Hero, "Hero").$$render($$result, { hero }, {}, {})}
${validate_component(TestimonialCarousel, "TestimonialCarousel").$$render($$result, { testimonials }, {}, {})}
${validate_component(OfferSection, "OfferSection").$$render($$result, {
    offers,
    title: "Offers",
    description: "Here are our best services that we can offer you."
  }, {}, {})}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "primary" } = $$props;
  let { size: size2 = "md" } = $$props;
  let { style: style2 = "" } = $$props;
  const type = null;
  style2 += " " + {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-50 hover:bg-gray-100 text-gray-900"
  }[variant];
  style2 += " " + {
    sm: "text-xm py-1 px-3",
    md: "text-sm py-2 px-6 font-bold",
    lg: "text-md py-3 px-8 font-bold"
  }[size2];
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<button${add_attribute("type", type, 0)} class="${"shadow rounded transition duration-200 text-center " + escape(style2)}">${slots.default ? slots.default({}) : ``}</button>`;
});
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { title } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="${"mx-auto max-w-screen-sm p-12"}"><div class="${"shadow rounded-md bg-black mx-auto overflow-hidden"}"><div class="${"flex items-center h-6 bg-gray-100 border-b border-gray-500 text-center text-black"}"><div class="${"flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"}"></div>
			<div class="${"ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"}"></div>
			<div class="${"ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"}"></div>
			<div class="${"mx-auto pr-16"}"><p class="${"text-center text-sm"}">${escape(title)}</p></div></div>
		<div class="${"pl-1 pt-1 h-auto font-mono bg-black"}">${each(content.split(/[\n\r\t]+/), (line) => `<p class="${"pb-1 " + escape(line.startsWith("$") ? "text-blue-300" : "text-green-200")}">${escape(line)}</p>`)}</div></div></section>`;
});
function tryGetFromSessionStorage(item, otherwise) {
  var _a;
  try {
    return (_a = JSON.parse(sessionStorage.getItem(item))) != null ? _a : otherwise;
  } catch (e) {
    return otherwise;
  }
}
const Quote_requested = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let terminalContent = "";
  onMount(() => {
    const formData = tryGetFromSessionStorage("formData", {});
    const getBack = formData.contactUseTel ? `Phone number: ${formData.contactTel}
        Call time range: ${formData.contactTelTime}
        Backup email: ${formData.contactEmail}` : `Email: ${formData.contactEmail}`;
    terminalContent = `$ cat request-info.txt
        ${getBack}
        Request name: ${formData.requestName}
        
$ cat thank-you.txt
        Thank you so much for reaching out to us!
        `;
  });
  return `${validate_component(Terminal, "Terminal").$$render($$result, {
    content: terminalContent,
    title: "Your quote request has been received!"
  }, {}, {})}`;
});
var quoteRequested = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Quote_requested
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style: style2 = "" } = $$props;
  let { text = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<span class="${"py-1 px-3 rounded-full text-xs " + escape(style2)}">${escape(text)}${slots.default ? slots.default({}) : ``}</span>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked } = $$props;
  let { style: style2 = null } = $$props;
  let { id: id2 = null } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  return `<input type="${"checkbox"}" class="${"form-checkbox h-6 w-6 rounded " + escape(style2)}"${add_attribute("id", id2, 0)}${add_attribute("checked", checked, 1)}>`;
});
const ServiceRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { service } = $$props;
  let { selectedServices } = $$props;
  let { expandedService } = $$props;
  const { id: id2, display, disabled, status, team } = service;
  let selected = false;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  if ($$props.selectedServices === void 0 && $$bindings.selectedServices && selectedServices !== void 0)
    $$bindings.selectedServices(selectedServices);
  if ($$props.expandedService === void 0 && $$bindings.expandedService && expandedService !== void 0)
    $$bindings.expandedService(expandedService);
  {
    {
      selected = selectedServices.includes(id2);
    }
  }
  return `<tr class="${"border-b border-gray-200 hover:bg-gray-100"}"><td class="${"py-3 px-2"}"><div class="${"flex items-center"}">${!disabled ? `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: selected }, {}, {})}` : ``}</div></td>
	<td class="${"py-3 px-2 text-left whitespace-nowrap"}"><div class="${"flex items-center cursor-pointer"}">${validate_component(IconText, "IconText").$$render($$result, Object.assign(display), {}, {})}
			<div class="${"ml-2 text-gray-300"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ant-design:info-circle-filled" }, {}, {})}</div></div></td>
	<td class="${"py-3 px-2 text-left"}">${validate_component(Badge, "Badge").$$render($$result, Object.assign(status), {}, {})}</td>
	<td class="${"py-3 px-2 text-center"}"><div class="${"flex items-center"}">${each(team, ({ picture, name: name2 }) => `<img class="${"w-6 h-6 rounded-full border-gray-200 border transform"}"${add_attribute("src", picture, 0)}${add_attribute("alt", name2, 0)}>`)}</div></td></tr>`;
});
const ServiceTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedServices } = $$props;
  let { totalServices } = $$props;
  let { services: services2 } = $$props;
  let { expandedService } = $$props;
  if ($$props.selectedServices === void 0 && $$bindings.selectedServices && selectedServices !== void 0)
    $$bindings.selectedServices(selectedServices);
  if ($$props.totalServices === void 0 && $$bindings.totalServices && totalServices !== void 0)
    $$bindings.totalServices(totalServices);
  if ($$props.services === void 0 && $$bindings.services && services2 !== void 0)
    $$bindings.services(services2);
  if ($$props.expandedService === void 0 && $$bindings.expandedService && expandedService !== void 0)
    $$bindings.expandedService(expandedService);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<table class="${"min-w-max w-full table-auto"}"><thead><tr class="${"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"}">${each([selectedServices.length + "/" + totalServices, "Service", "Status", "Team"], (head) => `<th class="${"py-3 px-2 text-left"}">${escape(head)}</th>`)}</tr></thead>
    <tbody class="${"text-gray-600 text-sm font-light"}">${each(services2, (service) => `${validate_component(ServiceRow, "ServiceRow").$$render($$result, {
      service,
      expandedService,
      selectedServices
    }, {
      expandedService: ($$value) => {
        expandedService = $$value;
        $$settled = false;
      },
      selectedServices: ($$value) => {
        selectedServices = $$value;
        $$settled = false;
      }
    }, {})}`)}</tbody></table>`;
  } while (!$$settled);
  return $$rendered;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { display } = $$props;
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  return `<div class="${"fixed z-10 inset-0 overflow-y-auto"}" aria-labelledby="${"modal-title"}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center"}"><div class="${"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}" aria-hidden="${"true"}"></div>
			<div class="${"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"}"><div class="${"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"}"><div class="${"sm:flex sm:items-start"}"><div class="${"mx-auto flex-shrink-0 flex items-center justify-center"}">${validate_component(Icon, "Icon").$$render($$result, { icon: display.icon, height: 24 }, {}, {})}</div>
						<div class="${"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}"><h3 class="${"text-lg leading-6 font-medium text-gray-900"}" id="${"modal-title"}">${escape(display.text)}</h3>
							<div class="${"flex items-center pt-2 sm:justify-start justify-center"}">${slots.head ? slots.head({}) : ``}</div>
							<div class="${"mt-2"}"><p class="${"text-sm text-gray-500"}">${slots.body ? slots.body({}) : ``}</p></div></div></div></div>
				<div class="${"bg-gray-50 px-4 py-3 sm:px-6 flex justify-end"}">${slots.footer ? slots.footer({}) : ``}</div></div></div></div>`;
});
const ServiceTableModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedServices } = $$props;
  let { expandedService } = $$props;
  if ($$props.selectedServices === void 0 && $$bindings.selectedServices && selectedServices !== void 0)
    $$bindings.selectedServices(selectedServices);
  if ($$props.expandedService === void 0 && $$bindings.expandedService && expandedService !== void 0)
    $$bindings.expandedService(expandedService);
  return `${validate_component(Modal, "Modal").$$render($$result, { display: expandedService.display }, {}, {
    footer: () => `<div slot="${"footer"}">${validate_component(Button, "Button").$$render($$result, { variant: "secondary", style: "mr-2" }, {}, { default: () => `Return` })}
		${!selectedServices.includes(expandedService.id) ? `${validate_component(Button, "Button").$$render($$result, { variant: "primary" }, {}, { default: () => `Select` })}` : ``}</div>`,
    body: () => `<div slot="${"body"}"><p class="${"text-sm text-gray-500"}">${escape(expandedService.description)}</p></div>`,
    head: () => `<div slot="${"head"}">${validate_component(Badge, "Badge").$$render($$result, Object.assign(expandedService.status), {}, {})}
		${each(expandedService.team, ({ picture, name: name2 }) => `<img class="${"w-6 h-6 rounded-full border-gray-200 border transform inline"}"${add_attribute("src", picture, 0)}${add_attribute("alt", name2, 0)}>`)}</div>`
  })}`;
});
const ServiceSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { services: services2 } = $$props;
  const totalServices = Object.keys(services2).length;
  let expandedService;
  let selectedServices = [];
  onMount(() => {
    var _a;
    selectedServices = JSON.parse((_a = sessionStorage.selectedServices) !== null && _a !== void 0 ? _a : "[]");
  });
  afterUpdate(() => {
    sessionStorage.selectedServices = JSON.stringify(selectedServices);
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.services === void 0 && $$bindings.services && services2 !== void 0)
    $$bindings.services(services2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"p-9"}"><h1 class="${"text-black font-medium leading-snug my-6 text-2xl"}">${escape(title)}</h1>
	<div class="${"bg-white shadow-md rounded overflow-hidden"}">${validate_component(ServiceTable, "ServiceTable").$$render($$result, {
      services: services2,
      totalServices,
      selectedServices,
      expandedService
    }, {
      selectedServices: ($$value) => {
        selectedServices = $$value;
        $$settled = false;
      },
      expandedService: ($$value) => {
        expandedService = $$value;
        $$settled = false;
      }
    }, {})}</div>
	<div class="${"mt-8"}">${validate_component(LinkButton, "LinkButton").$$render($$result, { href: "/quote", size: "lg" }, {}, { default: () => `Get your custom quote!` })}</div></section>

${expandedService ? `${validate_component(ServiceTableModal, "ServiceModal").$$render($$result, { expandedService, selectedServices }, {
      expandedService: ($$value) => {
        expandedService = $$value;
        $$settled = false;
      },
      selectedServices: ($$value) => {
        selectedServices = $$value;
        $$settled = false;
      }
    }, {})}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ServiceSection, "ServiceSection").$$render($$result, {
    services: services$1,
    title: "Select the services that best fit your needs."
  }, {}, {})}`;
});
var services = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Services
});
const TestimonialBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testimonials: testimonials2 } = $$props;
  const cardClasses = [
    "lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0",
    "lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0",
    "lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8",
    "lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20",
    "lg:order-2 lg:row-span-4 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:pb-4 2xl:h-screen"
  ];
  const bgColors = ["bg-indigo-600", "bg-gray-900", "bg-white", "bg-purple-800", "bg-white"];
  const textColors = ["text-white", "text-white", "text-black", "text-white", "text-black"];
  if ($$props.testimonials === void 0 && $$bindings.testimonials && testimonials2 !== void 0)
    $$bindings.testimonials(testimonials2);
  return `<section><div class="${"flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6"}">${each(testimonials2, ({ author, title, body }, i) => `<div class="${escape(bgColors[i]) + " " + escape(cardClasses[i])}"><div class="${"mx-6 my-8 2xl:mx-10"}"><img class="${"w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4"}"${add_attribute("src", author.picture, 0)}${add_attribute("alt", author.name, 0)}>
					<h1 class="${escape(textColors[i]) + " text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8"}">${escape(author.name)}</h1>
					<h2 class="${escape(textColors[i]) + " text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8"}">${escape(author.position)}
					</h2></div>
				<div class="${"-mt-6 relative"}"><p class="${escape(textColors[i]) + " text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2"}">${escape(title)}</p>
					<br>
					<p class="${escape(textColors[i]) + " text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2"}">\u201C ${escape(body)} \u201D
					</p></div>
			</div>`)}</div></section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const testimonials2 = [0, 0, 0, 0, 0].map(() => ({
    author: weiPerson,
    title: "hello",
    body: "hello"
  }));
  return `${validate_component(TestimonialBoard, "TestimonialsBoard").$$render($$result, { testimonials: testimonials2 }, {}, {})}`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About
});
const contactFormSection = {
  display: {
    text: "How can we reach you?",
    icon: "bx-bxs-contact"
  },
  description: "We need information to contact you when we have a quote ready.",
  fields: [
    {
      id: "contactName",
      kind: "text",
      autocomplete: "name",
      label: "Full name",
      placeholder: "Format: first name, last name"
    },
    {
      id: "contactCompany",
      kind: "text",
      autocomplete: "company",
      label: "Company",
      placeholder: "Ex: Dawson Technology Club, LLC"
    },
    {
      id: "contactEmail",
      kind: "email",
      label: "Email address",
      autocomplete: "email",
      placeholder: "Ex: name@domain.tld"
    },
    {
      id: "contactUseTel",
      kind: "checkbox",
      label: "I wish to receive a phone call."
    },
    {
      id: "contactTel",
      kind: "tel",
      label: "Telephone number",
      placeholder: "+1 123-456-7890",
      autocomplete: "tel",
      description: "We may not be able to call you if you reside outside of Canada.",
      showIf: ({ contactUseTel }) => !!contactUseTel
    },
    {
      id: "contactTelTime",
      kind: "textarea",
      label: "When should we call you?",
      placeholder: "Ex: From Monday to Friday from 4h to 5h.",
      description: "Most DTC members are full-time students, so class hours are not optimal for a call. Please use the Eastern Standard Time.",
      showIf: ({ contactUseTel }) => !!contactUseTel
    },
    {
      id: "contactNotMontreal",
      kind: "checkbox",
      label: "I am not in the Montreal Metropolitan Area."
    },
    {
      id: "contactCity",
      kind: "text",
      label: "City",
      placeholder: "Ex: Montreal, Quebec, Canada",
      description: "Some services may not be available in your region.",
      showIf: ({ contactNotMontreal }) => !!contactNotMontreal
    }
  ]
};
const requestFormSection = {
  display: {
    icon: "carbon-request-quote",
    text: "Your request"
  },
  description: "General information on your request and your expectations.",
  fields: [
    {
      id: "requestName",
      kind: "text",
      label: "How should we name your request?",
      placeholder: "Ex: Super Cool E-Commerce Web Application",
      description: "The request name will be used to identify this request when handling many requests from the same company."
    },
    {
      id: "requestOverview",
      kind: "textarea",
      label: "A brief overview of your request.",
      placeholder: "Ex: E-Commerce Web Application with shopping cart and checkout functionality.",
      description: "Summrize the key features of your request."
    },
    {
      id: "requestDeadline",
      kind: "text",
      label: "When is the deadline for complete delivery?",
      placeholder: "Ex: December 24, 2021",
      description: "Most DTC members are full-time students, so we may not be able to deliver in time depending on our workload."
    },
    {
      id: "requestPrice",
      kind: "number",
      label: "How much should we charge?",
      placeholder: "CAD",
      description: "Please use CAD when calculating the amount."
    }
  ]
};
const style = "focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded sm:text-sm border-gray-300";
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { formField } = $$props;
  let { formData } = $$props;
  const { placeholder, autocomplete, kind, id: id2, label, description, pattern, defaultValue, showIf } = formField;
  let value = null;
  if ($$props.formField === void 0 && $$bindings.formField && formField !== void 0)
    $$bindings.formField(formField);
  if ($$props.formData === void 0 && $$bindings.formData && formData !== void 0)
    $$bindings.formData(formData);
  value = (_b = (_a = formData[id2]) !== null && _a !== void 0 ? _a : defaultValue) !== null && _b !== void 0 ? _b : null;
  return `${!showIf || showIf(formData) ? `<div><div class="${"flex items-center"}">${kind == "checkbox" ? `${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: value, style: "mr-2", id: id2 }, {}, {})}` : ``}
			<label${add_attribute("for", id2, 0)}>${escape(label)}</label></div>

		${kind == "textarea" ? `<textarea required${add_attribute("id", id2, 0)}${add_attribute("class", style, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("pattern", pattern, 0)}>${escape(value)}</textarea>` : `${kind != "checkbox" ? `<input required${add_attribute("id", id2, 0)}${add_attribute("pattern", pattern, 0)}${add_attribute("value", value, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("type", kind, 0)}${add_attribute("class", style, 0)}>` : ``}`}
		${description ? `<p class="${"mt-2 text-sm text-gray-500"}">${escape(formField.description)}</p>` : ``}</div>` : ``}`;
});
const FormSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { formSection } = $$props;
  const { description, display, fields } = formSection;
  let { formData } = $$props;
  if ($$props.formSection === void 0 && $$bindings.formSection && formSection !== void 0)
    $$bindings.formSection(formSection);
  if ($$props.formData === void 0 && $$bindings.formData && formData !== void 0)
    $$bindings.formData(formData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"p-9"}"><div class="${"md:grid md:grid-cols-3 md:gap-6"}"><div><h3 class="${"text-xl font-medium leading-6 text-gray-900"}">${validate_component(IconText, "IconText").$$render($$result, Object.assign(display, { height: 24 }), {}, {})}</h3>
			<p class="${"mt-3 text-gray-600"}">${escape(description)}</p></div>
		<div class="${"mt-5 md:mt-0 md:col-span-2"}"><div class="${"shadow sm:rounded-md sm:overflow-hidden"}"><div class="${"px-4 py-5 bg-white space-y-6 sm:p-6"}">${each(fields, (formField) => `${validate_component(FormField, "FormField").$$render($$result, { formField, formData }, {
      formData: ($$value) => {
        formData = $$value;
        $$settled = false;
      }
    }, {})}`)}</div></div></div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
const QuoteForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  const formSections = [contactFormSection, requestFormSection];
  let formData = {};
  let selectedServices = [];
  onMount(() => {
    formData = tryGetFromSessionStorage("formData", {});
    selectedServices = tryGetFromSessionStorage("selectedServices", []);
    for (const serviceId of selectedServices) {
      const { display } = services$2[serviceId];
      formSections.push({
        display,
        description: `More information on ${display.text} service.`,
        fields: [
          {
            id: `${serviceId}Details`,
            label: `What are the details, features and requirements for ${display.text} service?`,
            kind: "textarea"
          }
        ]
      });
    }
  });
  afterUpdate(() => {
    sessionStorage.formData = JSON.stringify(formData);
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form>${each(formSections, (formSection) => `${validate_component(FormSection, "FormSection").$$render($$result, { formSection, formData }, {
      formData: ($$value) => {
        formData = $$value;
        $$settled = false;
      }
    }, {})}`)}

	<section class="${"p-9"}"><div class="${"flex flex-col sm:flex-row sm:justify-end"}">${validate_component(LinkButton, "LinkButton").$$render($$result, {
      href: "/services",
      size: "lg",
      variant: "secondary",
      style: "sm:mr-2 mb-2 sm:mb-0"
    }, {}, { default: () => `Select more services` })}
			${validate_component(Button, "Button").$$render($$result, { size: "lg", type: "submit" }, {}, { default: () => `Send request` })}</div>
		${``}</section></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(QuoteForm, "QuoteForm").$$render($$result, {}, {}, {})}`;
});
var quote = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Quote
});
export { init, render$1 as render };
