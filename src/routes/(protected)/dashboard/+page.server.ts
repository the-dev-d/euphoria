import { connection } from "$lib/prisma/connection";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {

    const {user} = locals;
    const events = await connection.findSoloEvents(user.participant_id);

    
    return {
        events
    }
} 