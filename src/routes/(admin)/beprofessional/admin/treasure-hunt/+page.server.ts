import { client } from "$lib/prisma/connection";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {

    const teams = await client.teams.findMany({
        include: {
            Team_members: true,
            Leader: {
                include: {
                    event_participant: true
                }
            }
        },
        where : {
            Leader: {
                event_participant: {
                    some: {
                        event_code: "TH"
                    }
                }
            }
        },
        orderBy: {
            team_name: "asc"
        }
    });

    return {
        teams
    }
}