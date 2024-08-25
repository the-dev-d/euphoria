import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import { c as createAuthToken } from './Authentication-D6-zTrtl.js';
import '@prisma/client';
import 'crypto';

const load = ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
  if (locals.admin) {
    throw redirect(302, "/beprofessional/admin");
  }
};
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return {
        success: false,
        message: "All fields are required."
      };
    }
    const admin = await client.admins.findFirst({
      where: {
        username
      }
    });
    if (!admin) {
      return {
        success: false,
        message: "User not found"
      };
    }
    if (password !== admin.password) {
      return {
        success: false,
        message: "Invalid credentials"
      };
    }
    const token = createAuthToken(admin.admin_id, admin.username);
    const b64 = btoa(admin.username);
    cookies.set("admin", b64 + "." + token, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/beprofessional/admin");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BVW4cfv3.js')).default;
const server_id = "src/routes/(admin)/beprofessional/login/+page.server.ts";
const imports = ["_app/immutable/nodes/12.CYrvqWx0.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-fq3H7XqP.js.map
