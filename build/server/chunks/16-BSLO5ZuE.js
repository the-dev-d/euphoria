import { c as connection } from './connection-B7tAGNEl.js';
import { C as ContestantSchema } from './types-xgfFmR_q.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';
import 'zod';

const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/dashboard");
  }
};
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const phone = data.get("phone").trim();
    const password = data.get("password").trim();
    const college = data.get("college").trim();
    const parsed = ContestantSchema.safeParse({
      name,
      email,
      password,
      phone,
      college
    });
    if (parsed.success) {
      try {
        const existing = await connection.findParticipantByAttribute({ email });
        if (existing) {
          return {
            success: false,
            message: "User already exist"
          };
        }
        const created = await connection.createParticipant(parsed.data);
      } catch (e) {
        return {
          success: false,
          error: "Failed to create participant"
        };
      }
      throw redirect(302, "/login");
    }
    return {
      success: false,
      error: parsed.error.format(),
      data: {
        name,
        email,
        password,
        phone
      }
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-LhmCHH0p.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/16.D6caW_lw.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/input.DYxjnJHz.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/chunks/types.CyUq3k7x.js","_app/immutable/chunks/create.BQ-Ir3Gq.js","_app/immutable/chunks/events.z-Wf44Zc.js"];
const stylesheets = ["_app/immutable/assets/15.C0mDsQyF.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-BSLO5ZuE.js.map
