import { c as connection } from './connection-B7tAGNEl.js';
import { T as TeamNameSchema, a as TransactionSchema, H as HuntMemberSchema } from './types-nSWFzZyp.js';
import { r as redirect, e as error } from './index-DzcLzHBX.js';
import { writeFileSync, unlinkSync } from 'fs';
import { z } from 'zod';
import { P as PRICE } from './constants-BhslKoc5.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const res = await connection.findParticipation(locals.user.participant_id);
  const events = res.map((e) => e.event_code);
  if (events.includes("TH") || events.includes("CUG") || events.includes("CPG") || events.includes("WEB")) {
    throw redirect(301, "/dashboard");
  }
};
const actions = {
  default: async ({ request, locals }) => {
    try {
      const user = locals.user;
      const data = await request.formData();
      let teamName = data.get("teamName");
      teamName = teamName.trim();
      let transactionId = data.get("transactionId");
      transactionId = transactionId.trim();
      const screenshot = data.get("screenshot");
      const members = JSON.parse(data.get("members"));
      const parsed = z.object({
        teamName: TeamNameSchema,
        transactionId: TransactionSchema,
        members: z.array(HuntMemberSchema)
      }).safeParse({ transactionId, teamName, members });
      if (!parsed.success) {
        return {
          success: false,
          error: parsed.error.format()
        };
      }
      const validated = parsed.data;
      if (parsed.data.members.length !== 3) {
        return {
          success: false,
          message: "Exactly 3 members required"
        };
      }
      const emails = parsed.data.members.map((member) => member.email);
      const check = await connection.checkEventParticipation(emails, "TH");
      if (check.length !== 0 || emails.includes(user.email)) {
        return {
          success: false,
          message: "Member is already a team leader"
        };
      }
      const uuid = crypto.randomUUID();
      const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
      try {
        writeFileSync(fileName, Buffer.from(await screenshot.arrayBuffer()));
        const { transactionId: transactionId2, teamName: teamName2, members: members2, ...rest } = validated;
        const payment = {
          amount: PRICE.treasureHunt,
          uuid: crypto.randomUUID(),
          upi_transaction_id: transactionId2,
          screenshot: fileName
        };
        const participation = {
          event_code: "TH",
          participant_id: locals.user.participant_id
        };
        const team = {
          ...rest,
          team_name: teamName2,
          college: locals.user.college,
          leader_id: locals.user.participant_id,
          Team_members: {
            create: members2
          }
        };
        const res = await connection.createTeam(payment, participation, team);
        return {
          success: true
        };
      } catch (e) {
        unlinkSync(fileName);
        if (e.code === "P2002") {
          return {
            success: false,
            message: "Member already exists in some team"
          };
        }
        return {
          success: false,
          message: "Error"
        };
      }
    } catch (err) {
      console.log(err);
      throw error(400, "invalid inputs");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BzEG70QX.js')).default;
const server_id = "src/routes/(protected)/events/team/treasurehunt/+page.server.ts";
const imports = ["_app/immutable/nodes/16.CXPdIAXG.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js","_app/immutable/chunks/each.vxFX_h8z.js","_app/immutable/chunks/input.Q8eMsU2D.js","_app/immutable/chunks/index.BPbQtlAe.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/types.S6jKuIYO.js","_app/immutable/chunks/create.DwgpHfEX.js","_app/immutable/chunks/events.B6wRTb4t.js","_app/immutable/chunks/table-row.Dypp-yo7.js","_app/immutable/chunks/table-caption.DvyHc2o3.js","_app/immutable/chunks/entry.CWI5ZxwB.js","_app/immutable/chunks/paths.B2s9rqBz.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-B9e8W3uC.js.map
