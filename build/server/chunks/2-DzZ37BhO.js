import { r as redirect } from './index-DzcLzHBX.js';

const load = async ({ locals }) => {
  console.log(locals);
  if (!locals.admin) {
    throw redirect(301, "/beprofessional/login");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Df5U6eVk.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.DMNFs3_Y.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/index.BwcdSs5b.js","_app/immutable/chunks/Icon.g8OtteLt.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/entry.CWI5ZxwB.js","_app/immutable/chunks/paths.B2s9rqBz.js","_app/immutable/chunks/x.BMxJxi-T.js","_app/immutable/chunks/index.BqFHBEbv.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-DzZ37BhO.js.map
