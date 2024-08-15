import { r as redirect } from './index-DzcLzHBX.js';

const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(302, "/register");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-d9OdFL9X.js')).default;
const server_id = "src/routes/(protected)/+layout.server.ts";
const imports = ["_app/immutable/nodes/3.BCk2NhJk.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DLGk-eaO.js.map
