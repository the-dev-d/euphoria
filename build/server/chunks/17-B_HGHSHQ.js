import { c as connection } from './connection-B7tAGNEl.js';
import '@prisma/client';

const load = async () => {
  try {
    const count = await connection.getGamingCount();
    return {
      count
    };
  } catch (error) {
    console.log(error);
    return "__";
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BnFoizIv.js')).default;
const server_id = "src/routes/respawn/+page.server.ts";
const imports = ["_app/immutable/nodes/17.nvtCJa0t.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/Parallax.CJMUaHSn.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/17.lehdjlE-.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=17-B_HGHSHQ.js.map
