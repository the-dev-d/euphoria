import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ params }) => {
  const { uuid } = params;
  const participation = await client.tickets.findFirst({
    include: {
      viewer: true
    },
    where: {
      uuid
    }
  });
  return {
    uuid,
    viewer: participation?.viewer,
    ticket: participation
  };
};
const actions = {
  complete: async ({ request }) => {
    const data = await request.formData();
    const uuid = String(data.get("uuid"));
    if (!uuid) {
      throw redirect(301, "/");
    }
    const res = await client.tickets.update({
      data: {
        used: true
      },
      where: {
        uuid
      }
    });
    return res;
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CBRhCxOg.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/verify/viewer/[uuid]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.DwVn7SP0.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/badge.Dq79_EoU.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-5BYy8NdR.js.map
