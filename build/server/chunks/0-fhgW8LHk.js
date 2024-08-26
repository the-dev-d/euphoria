const load = ({ locals }) => {
  if (locals.user) {
    return {
      authenticated: true,
      user: locals.user
    };
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-D1ZPxnf4.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.D3qXd0T1.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js"];
const stylesheets = ["_app/immutable/assets/0.k2YkF6YO.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-fhgW8LHk.js.map
