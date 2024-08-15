import { c as connection } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const { user } = locals;
  const events = await connection.findSoloEvents(user.participant_id);
  return {
    events
  };
};
const actions = {
  logout: async ({ cookies }) => {
    cookies.delete("session", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6msvUS8d.js')).default;
const server_id = "src/routes/(protected)/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/8.pfSN_axN.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/each.E09WHYhr.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/index.3pc7-n2X.js","_app/immutable/chunks/index.DB8Jo1Ze.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-D8wp2Fj-.js.map
