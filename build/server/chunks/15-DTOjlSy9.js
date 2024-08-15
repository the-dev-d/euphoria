import { c as connection } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import { c as createAuthToken } from './Authentication-D6-zTrtl.js';
import '@prisma/client';
import 'crypto';

const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/dashboard");
  }
};
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    if (!email || !password) {
      return {
        success: false,
        message: "All fields are required."
      };
    }
    const user = await connection.findParticipantByAttribute({ email });
    if (!user) {
      return {
        success: false,
        message: "User not found"
      };
    }
    if (password !== user.password) {
      return {
        success: false,
        message: "Invalid credentials"
      };
    }
    const token = createAuthToken(user.participant_id, user.email);
    const b64 = btoa(user.email);
    cookies.set("session", b64 + "." + token, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/dashboard");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DOtqg_E2.js')).default;
const server_id = "src/routes/login/+page.server.ts";
const imports = ["_app/immutable/nodes/15.BX5vb1S4.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/input.DYxjnJHz.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js"];
const stylesheets = ["_app/immutable/assets/15.C0mDsQyF.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-DTOjlSy9.js.map
