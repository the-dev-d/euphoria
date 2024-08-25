import { a as client } from './connection-B7tAGNEl.js';
import '@prisma/client';

const load = async ({ url }) => {
  const limit = Number(url.searchParams.get("limit")) || 10;
  let page = Number(url.searchParams.get("page")) || 1;
  const ids = (await client.event_participants.findMany({
    select: {
      participant_id: true
    }
  })).map((e) => e.participant_id);
  const count = await client.participants.count({
    where: {
      participant_id: {
        notIn: ids
      }
    }
  });
  if (count !== 0 && page > Math.ceil(count / limit)) {
    page = Math.ceil(count / limit);
  }
  const participants = await client.participants.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: {
      name: "asc"
    },
    where: {
      participant_id: {
        notIn: ids
      }
    }
  });
  return {
    participants,
    limit,
    page,
    count
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DAnpAGRZ.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/non-participants/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DgD6dyi2.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/table-row.Dypp-yo7.js","_app/immutable/chunks/entry.CWI5ZxwB.js","_app/immutable/chunks/paths.B2s9rqBz.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/index.CJbdzusb.js","_app/immutable/chunks/check.8h7GiVfQ.js","_app/immutable/chunks/Icon.g8OtteLt.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/index.BqFHBEbv.js","_app/immutable/chunks/index.BwcdSs5b.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-Bx54J3UP.js.map
