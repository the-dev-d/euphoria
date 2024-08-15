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
const component = async () => component_cache ??= (await import('./_page.svelte-Bix7U0Ok.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/non-participants/+page.server.ts";
const imports = ["_app/immutable/nodes/6.C5b4WuZU.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/each.E09WHYhr.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/chunks/table-row.SiF9UxR7.js","_app/immutable/chunks/entry.BAKMHLdN.js","_app/immutable/chunks/index.3pc7-n2X.js","_app/immutable/chunks/index.BUDEjfi1.js","_app/immutable/chunks/check.KoSura-i.js","_app/immutable/chunks/Icon.BDfCY7FR.js","_app/immutable/chunks/events.z-Wf44Zc.js","_app/immutable/chunks/index.C3YsWl5L.js","_app/immutable/chunks/create.BQ-Ir3Gq.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DqZz0Xw3.js.map
