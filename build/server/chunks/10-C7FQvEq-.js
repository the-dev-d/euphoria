import { c as connection } from './connection-B7tAGNEl.js';
import { T as TeamNameSchema, a as TransactionSchema, R as RiotIdSchema, D as DiscordIdSchema, G as GamerSchema } from './types-xgfFmR_q.js';
import { r as redirect, e as error } from './index-DzcLzHBX.js';
import { writeFileSync, unlinkSync } from 'fs';
import { z } from 'zod';
import { P as PRICE } from './constants-CVDn_NF1.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const res = await connection.findParticipation(locals.user.participant_id);
  const events = res.map((e) => e.event_code);
  if (events.includes("RP")) {
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
      let riotId = data.get("riotId");
      riotId = riotId.trim();
      let discordId = data.get("discordId");
      discordId = discordId.trim();
      const screenshot = data.get("screenshot");
      let members = JSON.parse(data.get("members"));
      const parsed = z.object({
        teamName: TeamNameSchema,
        transactionId: TransactionSchema,
        riotId: RiotIdSchema,
        discordId: DiscordIdSchema,
        members: z.array(GamerSchema)
      }).safeParse({ transactionId, teamName, riotId, discordId, members });
      if (!parsed.success) {
        return {
          success: false,
          error: parsed.error.format()
        };
      }
      if (parsed.data.members.length < 4) {
        return {
          success: false,
          message: "Atleast 4 members required"
        };
      }
      if (parsed.data.members.length >= 4) {
        if (parsed.data.members.length - parsed.data.members.filter((m) => m.substitute).length !== 4)
          return {
            success: false,
            message: "Atleast 4 active members required"
          };
      }
      if (parsed.data.members.length > 6) {
        return {
          success: false,
          message: "Atmost 7 members allowed"
        };
      }
      const validated = parsed.data;
      const emails = validated.members.map((member) => member.email);
      const check = await connection.checkEventParticipation(emails, "RP");
      if (check.length !== 0 || emails.includes(user.email)) {
        return {
          success: false,
          message: "Member is already a team leader"
        };
      }
      let membersFormated = validated.members.map((member) => {
        const { riotId: riotId2, discordId: discordId2, ...rest } = member;
        return {
          ...rest,
          riot_id: riotId2,
          discord_id: discordId2
        };
      });
      const uuid = crypto.randomUUID();
      const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
      try {
        writeFileSync(fileName, Buffer.from(await screenshot.arrayBuffer()));
        const { transactionId: transactionId2, teamName: teamName2, members: members2, riotId: riotId2, discordId: discordId2, ...rest } = validated;
        const payment = {
          amount: PRICE.respawn,
          uuid: crypto.randomUUID(),
          upi_transaction_id: transactionId2,
          screenshot: fileName
        };
        const participation = {
          event_code: "RP",
          participant_id: locals.user.participant_id
        };
        const team = {
          ...rest,
          riot_id: validated.riotId,
          discord_id: validated.discordId,
          team_name: teamName2,
          college: locals.user.college,
          leader_id: locals.user.participant_id,
          game_member: {
            create: membersFormated
          }
        };
        const res = await connection.createTeam(payment, participation, team);
        return {
          success: true
        };
      } catch (e) {
        console.log(e);
        if (e.code === "P2002") {
          unlinkSync(fileName);
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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-vQzkp8H-.js')).default;
const server_id = "src/routes/(protected)/events/team/respawn/+page.server.ts";
const imports = ["_app/immutable/nodes/10.DEZkw8Tj.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js","_app/immutable/chunks/each.E09WHYhr.js","_app/immutable/chunks/input.DYxjnJHz.js","_app/immutable/chunks/index.r_n6alX8.js","_app/immutable/chunks/index.DB8Jo1Ze.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/chunks/types.CyUq3k7x.js","_app/immutable/chunks/create.BQ-Ir3Gq.js","_app/immutable/chunks/events.z-Wf44Zc.js","_app/immutable/chunks/table-row.SiF9UxR7.js","_app/immutable/chunks/table-caption.DMwMDTYM.js","_app/immutable/chunks/entry.BAKMHLdN.js","_app/immutable/chunks/Icon.BDfCY7FR.js","_app/immutable/chunks/check.KoSura-i.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-C7FQvEq-.js.map
