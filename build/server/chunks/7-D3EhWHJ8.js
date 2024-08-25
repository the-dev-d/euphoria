import { a as client } from './connection-B7tAGNEl.js';
import './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ url, depends }) => {
  depends("database");
  let pageNumber = Number(url.searchParams.get("page")) || 1;
  let limit = Number(url.searchParams.get("limit") || 10);
  if (limit < 0)
    limit = 10;
  const where = {
    verified: false
  };
  const count = await client.tickets.count({
    where
  });
  if (pageNumber > Math.ceil(count / limit)) {
    pageNumber = Math.ceil(count / limit);
  }
  if (pageNumber < 1)
    pageNumber = 1;
  let tickets = await client.tickets.findMany({
    take: limit,
    include: {
      viewer: true
    },
    skip: (pageNumber - 1) * limit,
    where
  });
  console.log(tickets);
  return {
    tickets,
    pageNumber,
    limit,
    count,
    filter: ""
  };
};
const actions = {
  verify: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      const ticketId = Number(data.get("ticketId"));
      if (!ticketId) {
        return {
          success: false
        };
      }
      const res = await client.tickets.update({
        where: {
          ticket_id: ticketId
        },
        data: {
          verified: true
        }
      });
      return {
        success: true
      };
    } catch (error) {
      console.log(error);
      return {
        success: false
      };
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C80rWqVL.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/tickets/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DL5N3k5y.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/table-row.Dypp-yo7.js","_app/immutable/chunks/index.i_jTDUxd.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/index.BqFHBEbv.js","_app/immutable/chunks/index.BwcdSs5b.js","_app/immutable/chunks/Icon.g8OtteLt.js","_app/immutable/chunks/ButtonWrapper.Cok3fw3E.js","_app/immutable/chunks/x.BMxJxi-T.js","_app/immutable/chunks/entry.3ADNXllK.js","_app/immutable/chunks/paths.B5VCgVQX.js","_app/immutable/chunks/index.Ryb5LU2t.js","_app/immutable/chunks/index.CJbdzusb.js","_app/immutable/chunks/check.8h7GiVfQ.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-D3EhWHJ8.js.map
