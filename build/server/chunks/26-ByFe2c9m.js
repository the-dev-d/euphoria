import { a as client } from './connection-B7tAGNEl.js';
import { V as ViewerSchema } from './types-nSWFzZyp.js';
import { r as redirect } from './index-DzcLzHBX.js';
import '@prisma/client';
import 'zod';

const load = ({ locals }) => {
  if (locals.viewer) {
    throw redirect(302, "/respawn/streamersbattle/dashboard");
  }
};
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const phone = data.get("phone").trim();
    const password = data.get("password").trim();
    const parsed = ViewerSchema.safeParse({
      name,
      email,
      password,
      phone
    });
    if (parsed.success) {
      try {
        const existing = await client.viewers.findFirst({
          where: {
            email
          }
        });
        if (existing) {
          return {
            success: false,
            message: "User already exist"
          };
        }
        const created = await client.viewers.create({ data: {
          name,
          email,
          password,
          phone
        } });
        console.log(created);
      } catch (e) {
        console.log(e);
        return {
          success: false,
          error: "Failed to create viewer"
        };
      }
      throw redirect(302, "/respawn/streamersbattle/login");
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

const index = 26;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-m3WnEAgv.js')).default;
const server_id = "src/routes/respawn/streamersbattle/register/+page.server.ts";
const imports = ["_app/immutable/nodes/26.CGHoiOGx.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/types.S6jKuIYO.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/events.B6wRTb4t.js"];
const stylesheets = ["_app/immutable/assets/26.Svdpdr_H.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=26-ByFe2c9m.js.map
