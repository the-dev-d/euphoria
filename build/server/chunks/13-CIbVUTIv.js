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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D1gtJd9V.js')).default;
const server_id = "src/routes/(protected)/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/13.BvnadEZr.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/index.DB8Jo1Ze.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-CIbVUTIv.js.map
