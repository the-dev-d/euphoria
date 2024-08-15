import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ url, depends }) => {
  depends("database");
  let pageNumber = Number(url.searchParams.get("page")) || 0;
  let limit = Number(url.searchParams.get("limit") || 10);
  if (limit < 0)
    limit = 10;
  const count = await client.event_participants.count({
    where: {
      verified: false
    }
  });
  if (pageNumber > Math.ceil(count / limit)) {
    pageNumber = Math.ceil(count / limit);
  }
  if (pageNumber < 1)
    pageNumber = 1;
  let participations = await client.event_participants.findMany({
    take: limit,
    include: {
      participant: true,
      event_payment: true
    },
    skip: (pageNumber - 1) * limit,
    orderBy: {
      created_at: "asc"
    },
    where: {
      verified: false
    }
  });
  participations = participations.map((p) => {
    delete p.participant.password;
    return p;
  });
  return {
    participations,
    pageNumber,
    limit,
    count
  };
};
const actions = {
  verify: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      const participation_id = Number(data.get("participationId"));
      if (!participation_id) {
        return {
          success: false
        };
      }
      const res = await client.event_participants.update({
        where: {
          event_participant_id: participation_id
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
  },
  logout: async ({ cookies }) => {
    cookies.delete("admin", {
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BBPO106d.js')).default;
const server_id = "src/routes/(admin)/beprofessional/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/5.zOHFSRJD.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/each.E09WHYhr.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/chunks/table-row.SiF9UxR7.js","_app/immutable/chunks/index.C3YsWl5L.js","_app/immutable/chunks/Icon.BDfCY7FR.js","_app/immutable/chunks/events.z-Wf44Zc.js","_app/immutable/chunks/entry.BAKMHLdN.js","_app/immutable/chunks/index.3pc7-n2X.js","_app/immutable/chunks/index.BUDEjfi1.js","_app/immutable/chunks/check.KoSura-i.js","_app/immutable/chunks/create.BQ-Ir3Gq.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/x.yxnTnJkM.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-2rCvT3Rz.js.map
