import { client } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = async ({params}) => {

    const {uuid} = params;

    const participation = await client.event_payment.findFirst({
        include: {
            participation: {
                include: {
                    participant: true
                }
            }
        },
        where: {
            uuid
        }
    })

    return {
        uuid,
        participation: participation?.participation,
        participant: participation?.participation[0].participant
    }
}

export const actions = {

    complete: async ({request}) => {
        const data = await request.formData();

        const participation = Number(data.get('participation'));

        if(!participation) {
            throw redirect(301, "/");
        }

        const res = await client.event_participants.update({
            data: {
                used: true,
            },
            where: {
                event_participant_id: participation
            }
        })

        return res;

    }

} satisfies Actions