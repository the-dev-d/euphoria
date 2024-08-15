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
const component = async () => component_cache ??= (await import('./_layout.svelte-DdjpIvos.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.B00UaCiy.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/each.E09WHYhr.js"];
const stylesheets = ["_app/immutable/assets/0.ClXE-_4L.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-CdGgVw0p.js.map
