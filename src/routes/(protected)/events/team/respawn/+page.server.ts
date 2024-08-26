import { client, connection } from "$lib/prisma/connection";
import { DiscordIdSchema, GamerSchema, RiotIdSchema, TeamNameSchema, TransactionSchema } from "$lib/zod/types";
import { error, redirect, type Actions } from "@sveltejs/kit";
import { unlinkSync, writeFileSync } from "fs";
import { z } from "zod";
import { PRICE } from "$lib/constants/constants";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({locals}) => {

    const res = await connection.findParticipation(locals.user.participant_id);
    const events = res.map(e => e.event_code);
    
    if(events.includes("RP")) {
        throw redirect(301, "/dashboard")
    }

    const count = await client.event_participants.count({
        where: {
            event_code: "RP"
        }
    });

    if(count >= 16) {
        throw redirect(301, "/dashboard")
    }
}

export const actions = {

    default: async ({request, locals}) => {
        try {
            const user = locals.user;
            const data = await request.formData();
            let teamName = data.get('teamName') as string;
            teamName = teamName.trim();

            let transactionId = data.get('transactionId') as string;
            transactionId = transactionId.trim();

            let riotId = data.get('riotId') as string;
            riotId = riotId.trim();

            let discordId = data.get('discordId') as string;
            discordId = discordId.trim();

            const screenshot = data.get('screenshot') as File;

            let members = JSON.parse(data.get('members') as string);

            const parsed = z.object({
                teamName: TeamNameSchema,
                transactionId: TransactionSchema,
                riotId: RiotIdSchema,
                discordId: DiscordIdSchema,
                members: z.array(GamerSchema)
            }).safeParse({transactionId, teamName, riotId, discordId, members});


            if(!parsed.success) {
                return {
                    success: false,
                    error: parsed.error.format()
                }
            }

            if(parsed.data.members.length < 4) {
                return {
                    success: false,
                    message: "Atleast 4 members required"
                }
            }

            if(parsed.data.members.length >= 4) {

                if((parsed.data.members.length - parsed.data.members.filter(m => m.substitute).length) !== 4)
                    return {
                        success: false,
                        message: "Atleast 4 active members required"
                    }
            }

            if(parsed.data.members.length > 6) {

                return {
                    success: false,
                    message: "Atmost 7 members allowed"
                }
            }

            const validated = parsed.data;
            const emails = validated.members.map(member => member.email );
            const check = await connection.checkEventParticipation(emails, "RP");
            
            if(check.length !== 0 || emails.includes(user.email)) {
                return {
                    success: false,
                    message: "Member is already a team leader"
                }
            }
            
            let membersFormated = validated.members.map(member => {
                const {riotId, discordId, ...rest} = member;
                return {
                    ...rest,
                    riot_id: riotId,
                    discord_id: discordId
                }
            })

            const uuid = crypto.randomUUID();
            const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;

            try {
                writeFileSync(fileName, Buffer.from(await screenshot.arrayBuffer()));
                const {transactionId, teamName, members, riotId, discordId, ...rest} = validated;

                const payment = { 
                    amount: PRICE.respawn, 
                    uuid : crypto.randomUUID(), 
                    upi_transaction_id: transactionId, 
                    screenshot: fileName
                }
                const participation = {
                    event_code: "RP",
                    participant_id: locals.user.participant_id,
                };

                const team = {
                    ...rest,
                    riot_id: validated.riotId,
                    discord_id: validated.discordId,
                    team_name: teamName,
                    college: locals.user.college,
                    leader_id: locals.user.participant_id,
                    game_member: {
                        create: membersFormated
                    }
                }

                const res = await connection.createTeam(payment, participation, team);

                return {
                    success: true,
                }
    
            } catch (e) {
                console.log(e);
                if(e.code === "P2002") {
                    unlinkSync(fileName);
                    return {
                        success: false,
                        message: "Member already exists in some team"
                    }
                }
                return {
                    success: false,
                    message: "Error"
                }
            }
        
        }catch (err) {
            console.log(err);
            throw error(400, "invalid inputs");
        }
    }
} satisfies Actions;