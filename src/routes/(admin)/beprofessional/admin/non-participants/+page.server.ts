import { client } from "$lib/prisma/connection";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({url}) => {

    const limit = Number(url.searchParams.get('limit')) || 10 ;
    let page = Number(url.searchParams.get('page')) || 1;

    const ids = (await client.event_participants.findMany({
        select: {
            participant_id: true
        }
    })).map(e => e.participant_id);

    const count = await client.participants.count({
        where: {
            participant_id: {
                notIn: ids
            }
        }
    })

    if(count !== 0 && page > Math.ceil(count / limit)) {
        page = Math.ceil(count / limit);
    }

    const participants = await client.participants.findMany({
        skip: (page-1)*limit,
        take: limit,
        orderBy: {
            name: 'asc'
        },
        where: {
            participant_id: {
                notIn: ids
            }
        }
    })

    return {
        participants,
        limit,
        page,
        count
    }
}