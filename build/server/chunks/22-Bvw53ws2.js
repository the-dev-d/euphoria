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

const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CvBZdVO5.js')).default;
const server_id = "src/routes/respawn/+page.server.ts";
const imports = ["_app/immutable/nodes/22.qQOkOQ5s.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/Parallax.BZHTWI8n.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = ["_app/immutable/assets/22.FMo3NXP8.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=22-Bvw53ws2.js.map
