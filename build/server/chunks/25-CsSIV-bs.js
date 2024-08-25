import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import { c as createAuthToken } from './Authentication-D6-zTrtl.js';
import '@prisma/client';
import 'crypto';

const load = ({ locals }) => {
  if (locals.viewer) {
    throw redirect(302, "/respawn/streamersbattle/dashboard");
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
    const user = await client.viewers.findFirst({ where: { email } });
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
    const token = createAuthToken(user.viewer_id, user.email);
    const b64 = btoa(user.email);
    cookies.set("viewer", b64 + "." + token, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/respawn/streamersbattle/dashboard");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bmhd6tmf.js')).default;
const server_id = "src/routes/respawn/streamersbattle/login/+page.server.ts";
const imports = ["_app/immutable/nodes/25.CuldRSC7.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js"];
const stylesheets = ["_app/immutable/assets/25.BMflRGif.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=25-CsSIV-bs.js.map
