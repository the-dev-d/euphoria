import { a as client } from './connection-B7tAGNEl.js';
import { r as redirect } from './index-DzcLzHBX.js';
import { writeFileSync } from 'fs';
import '@prisma/client';

const ssr = false;
const load = async ({ locals }) => {
  if (!locals.viewer) {
    console.log("not view");
    throw redirect(307, "/respawn/streamersbattle");
  }
  const ticket = await client.tickets.findFirst({
    where: {
      viewer_id: locals.viewer.viewer_id
    }
  });
  return {
    viewer: locals.viewer,
    ticket
  };
};
const actions = {
  logout: async ({ cookies }) => {
    cookies.delete("viewer", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      //TODO : to be changed,
      maxAge: 60 * 60 * 24 * 3
    });
    throw redirect(302, "/");
  },
  book: async ({ request, locals }) => {
    const data = await request.formData();
    const paymentScreenshot = data.get("payment-screenshot");
    const transactionId = data.get("upi-transaction-id");
    const count = Number(data.get("count"));
    const { viewer } = locals;
    const booking = await client.tickets.findMany({
      where: {
        viewer: {
          viewer_id: viewer.viewer_id
        }
      }
    });
    if (booking?.length) {
      return {
        success: false,
        message: "Ticket booking limit reached"
      };
    }
    if (!transactionId) {
      return {
        success: false,
        message: "Transaction id required."
      };
    }
    if (!count) {
      return {
        success: false,
        message: "Count required."
      };
    }
    if (!paymentScreenshot) {
      return {
        success: false,
        message: "Payment screenshot required."
      };
    }
    const uuid = crypto.randomUUID();
    const id = crypto.randomUUID();
    try {
      const fileName = `static/screenshots/viewers/${viewer.viewer_id}-${uuid}.png`;
      writeFileSync(fileName, Buffer.from(await paymentScreenshot.arrayBuffer()));
      const res = await client.tickets.create({
        data: {
          count,
          screenshot: fileName,
          upi_transaction_id: transactionId,
          viewer_id: viewer.viewer_id,
          uuid: id
        }
      });
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error"
      };
    }
    throw redirect(302, "/respawn/streamersbattle/dashboard");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
  ssr: ssr
});

const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dn2MLh9t.js')).default;
const server_id = "src/routes/respawn/streamersbattle/dashboard/+page.server.ts";
const imports = ["_app/immutable/nodes/24.DBM_OkNW.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/constants.CmfnGl05.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/types.S6jKuIYO.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/index.eagm7OMy.js","_app/immutable/chunks/_commonjsHelpers.BosuxZz1.js","_app/immutable/chunks/index.BqFHBEbv.js"];
const stylesheets = ["_app/immutable/assets/24.Bv1H9ZLj.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=24-DAzk5Sa4.js.map
