import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ params }) => {
  const { uuid } = params;
  const participation = await client.event_payment.findFirst({
    include: {
      participation: {
        include: {
          participant: true
        }
      }
    },
    where: {
      uuid
    }
  });
  return {
    uuid,
    participation: participation?.participation,
    participant: participation?.participation[0].participant
  };
};
const actions = {
  complete: async ({ request }) => {
    const data = await request.formData();
    const participation = Number(data.get("participation"));
    if (!participation) {
      throw redirect(301, "/");
    }
    const res = await client.event_participants.update({
      data: {
        used: true
      },
      where: {
        event_participant_id: participation
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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B9keLHvp.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/verify/[uuid]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BqUIEnJp.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/badge.Dq79_EoU.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-Dd8fE9t1.js.map
