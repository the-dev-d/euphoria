import { c as connection } from './connection-B7tAGNEl.js';
import { C as ContestantSchema } from './types-nSWFzZyp.js';
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

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BVJ4BEfB.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/21.C7oALGxh.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/types.S6jKuIYO.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/events.B6wRTb4t.js"];
const stylesheets = ["_app/immutable/assets/20.C0mDsQyF.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=21-rhTDBabd.js.map
