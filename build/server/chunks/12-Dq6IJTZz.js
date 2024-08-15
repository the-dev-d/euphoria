import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const participant = await client.participants.findFirst({ where: {
    participant_id: locals.user.participant_id
  } });
  if (!participant) {
    return redirect(300, "/");
  }
  delete participant.password;
  const verified = await client.event_participants.findMany({
    include: {
      event_payment: true
    },
    where: {
      participant_id: locals.user.participant_id,
      verified: true
    }
  });
  return {
    participant,
    verified
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BME14nHE.js')).default;
const server_id = "src/routes/(protected)/profile/+page.server.ts";
const imports = ["_app/immutable/nodes/12.BAIE19Aa.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-Dq6IJTZz.js.map
