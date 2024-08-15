import { connection } from "$lib/prisma/connection";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {

    const {user} = locals;
    const events = await connection.findSoloEvents(user.participant_id);
        
    return {
        events
    }
} 

export const actions = {

    logout: async({cookies}) => {

        cookies.delete('session', {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false, //TODO : to be changed,
            maxAge: 60 * 60 * 24 * 3
        });

        throw redirect(302, "/");
    }
} satisfies Actions