import { client } from "$lib/prisma/connection";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {

    const participant = await client.participants.findFirst({where: {
        participant_id: locals.user.participant_id
    }})

    if(!participant) {
        return redirect(300, "/");
    }

    delete participant.password;

    const verified = await client.event_participants.findMany({
        include: {
            event_payment: true,
        },
        where: {
            participant_id: locals.user.participant_id,
            verified: true
        }
    })

    return {
        participant,
        verified
    }
}