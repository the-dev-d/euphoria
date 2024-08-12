import { client } from "$lib/prisma/connection";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url, depends}) => {


    depends("database");
    let pageNumber = Number(url.searchParams.get('page')) || 0;

    let limit = Number(url.searchParams.get('limit') || 10);
    if(limit < 0)
        limit = 10;

    
    const count = await client.event_participants.count({
        where: {
            verified: false,
        }
    });

    if(pageNumber > Math.ceil(count/limit)) {
        pageNumber = Math.ceil(count/limit);   
    }

    if(pageNumber < 1)
        pageNumber = 1;

    const participations = await client.event_participants.findMany({
        take: limit,
        include: {
            participant: true,

            event_payment: true
        },
        skip: (pageNumber-1) * limit,
        orderBy: {
            created_at: "asc"
        },
        where: {
            verified: false
        }
    })

    return {
        participations,
        pageNumber,
        limit,
        count
    }
}

export const actions = {

    verify: async ({request, locals}) => {

        try {
            const data = await request.formData();
            const participation_id = Number(data.get('participationId'));

            if(!participation_id) {
                return {
                    success: false,
                }
            }

            const res = await client.event_participants.update({
                where: {
                    event_participant_id: participation_id,
                },
                data: {
                    verified: true
                }
            })

            return {
                success: true,
            }

        } catch (error) {
            console.log(error)

            return {
                success: false,
            }
        }
    }
    
} satisfies Actions;