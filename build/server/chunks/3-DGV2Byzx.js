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
const component = async () => component_cache ??= (await import('./_layout.svelte-DeZgeoXZ.js')).default;
const server_id = "src/routes/(protected)/+layout.server.ts";
const imports = ["_app/immutable/nodes/3.BIafCdWd.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DGV2Byzx.js.map
