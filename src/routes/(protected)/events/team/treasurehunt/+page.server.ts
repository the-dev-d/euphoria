import { connection } from "$lib/prisma/connection";
import { HuntMemberSchema, TeamNameSchema, TransactionSchema } from "$lib/zod/types";
import { error, redirect, type Actions } from "@sveltejs/kit";
import { writeFileSync } from "fs";
import { z } from "zod";
import { PRICE } from "$lib/constants/constants";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = async ({locals}) => {

    const res = await connection.findParticipation(locals.user.participant_id);
    const events = res.map(e => e.event_code);
    
    if(events.includes("TH")) {
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

            const screenshot = data.get('screenshot') as File;

            const members = JSON.parse(data.get('members') as string);

            const parsed = z.object({
                teamName: TeamNameSchema,
                transactionId: TransactionSchema,
                members: z.array(HuntMemberSchema)
            }).safeParse({transactionId, teamName, members});

            if(!parsed.success) {
                return {
                    success: false,
                    error: parsed.error.format()
                }
            }

            const validated = parsed.data;

            if(parsed.data.members.length !== 3) {
                return {
                    success: false,
                    message: "Exactly 3 members required"
                }
            }

            const emails = parsed.data.members.map(member => member.email);
            const check = await connection.checkEventParticipation(emails, "TH");
            if(check.length !== 0 || emails.includes(user.email)) {
                return {
                    success: false,
                    message: "Member is already a team leader"
                }
            }
            

            const uuid = crypto.randomUUID();
            try {
                const fileName = `static/screenshots/${user.participant_id}-${uuid}.png`;
                writeFileSync(fileName, Buffer.from(await screenshot.arrayBuffer()));
                const {transactionId, teamName, members, ...rest} = validated;

                const payment = { 
                    amount: PRICE.treasureHunt, 
                    uuid : crypto.randomUUID(), 
                    upi_transaction_id: transactionId, 
                    screenshot: fileName
                }
                const participation = {
                    event_code: "TH",
                    participant_id: locals.user.participant_id,

                };

                const team = {
                    ...rest,
                    team_name: teamName,
                    college: locals.user.college,
                    leader_id: locals.user.participant_id,
                    Team_members: {
                        create: members
                    }
                }

                const res = await connection.createTeam(payment, participation, team);

                return {
                    success: true,
                }
    
            } catch (e) {
    
                if(e.code === "P2002") {
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